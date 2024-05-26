import React from 'react'

const CityList = () => {

    let array = JSON.parse(localStorage.getItem("myArray"));

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
            <h1>There is List Add city</h1>
        </div>
{/* CitiesList */}
            {array.map((i)=>(
                 <div key={i.lat} className=' rounded-lg w-full bg-blue-500 my-6 p-6 flex justify-between items-center'>
                 <h1 className=' text-white text-3xl'>{i.city_name}</h1>
                 <h1 className=' flex flex-col gap-2 text-white justify-end items-end text-xl'>
                     <span>{i.temp}°</span>
                     <span>{i.weather.description}</span>
                 </h1>
             </div>
            ))}
    </div>
  )
}

export default CityList