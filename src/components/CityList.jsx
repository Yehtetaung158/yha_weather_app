import React, { useEffect, useState } from 'react'
import { useGetCurrentByCityMutation } from '../store/service/endpiont/weatherendpoint';
import Dropdwn from './Dropdwn';

const CityList = ({data}) => {
    const [fetchItemById,{isLoading}] = useGetCurrentByCityMutation();
    // console.log("I am loading ", isLoading)

    const fetchItemsOneByOne = async (myarrayfromlocal) => {
      const fetchedItems = [];
    
      for (const obj of myarrayfromlocal) {
        try {
          const item = await fetchItemById(obj.city_name).unwrap();
          fetchedItems.push(item);
        } catch (error) {
          console.error('Failed to fetch item:', error);
        }
      }
      return fetchedItems;
    };

    const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async (myarrayfromlocal) => {
    const result = await fetchItemsOneByOne(myarrayfromlocal);
    setItems(result);
    // setLoading(false);
  };
  const i=items.map((i)=>i.data)
  const j=i.map((j)=>j[0])

  let array = JSON.parse(localStorage.getItem("myArray"));

  useEffect(()=>{
      fetchData(array)
  },[data])



  return (
    <div
    className='w-full h-full overflow-auto'
    style={{
        scrollbarWidth: "none" /* Firefox */,
        msOverflowStyle: "none" /* Internet Explorer 10+ */,
      }}>
        <style>
          {`
            /* WebKit */
            .overflow-auto::-webkit-scrollbar {
              width: 0;
              height: 0;
            }
          `}
        </style>
{/* Empty  */}
        <div className=' last:flex hidden w-full h-full justify-center items-center text-xl text-white'>
            <h1>There is on List!!</h1>
        </div>
{/* CitiesList */}
        {isLoading && <h1 className=' text-white text-2xl h-full w-full flex justify-center items-center'>Loading ....</h1>}
        
            {array?.map((i,index)=>(
                 <div key={index} className=' rounded-lg w-full bg-blue-500 my-6 p-6 py-10 flex justify-between items-center relative'>
                 <h1 className=' text-white text-3xl'>{i.city_name}</h1>
                 <h1 className=' flex flex-col gap-2 text-white justify-end items-end text-xl'>
                     <span>{i.temp}°</span>
                     <span>{i.weather.description}</span>
                 </h1>
                 <div className=' absolute right-2 top-1'>
                  <Dropdwn i={i} array={array} loading={loading} setLoading={setLoading}/>
                 </div>
             </div>
            ))}
    </div>
  )
}

export default CityList