import React, { useState } from 'react'
// import { useGetByCityHourlyMutation } from '../store/service/endpiont/weatherendpoint';
import CurrentCity from './CurrentCity';
import TodayWeather from './TodayWeather';
import Confort from './Confort';

const HomeWeather = ({items,weatherHourly,currentIndex,hourly}) => {
//     const [hourlyFun, weatherHourly] = useGetByCityHourlyMutation();
//   console.log(
//     weatherHourly.data?.data,
//     weatherHourly?.isLoading,
//     weatherHourly?.isError
//   );
//   const hourly = weatherHourly.data?.data;

//   const items = JSON.parse(localStorage.getItem("myArray"));
//   console.log(items);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     const newIndex = (currentIndex - 1 + items.length) % items.length;
//     setCurrentIndex(newIndex);
//     const currentCityName = items[newIndex].city_name;
//     hourlyFun(currentCityName);
//     console.log(currentCityName);
//   };

//   const goToNext = () => {
//     const newIndex = (currentIndex + 1) % items.length;
//     setCurrentIndex(newIndex);
//     const currentCityName = items[newIndex].city_name;
//     console.log(currentCityName);
//   };
  return (
<div
    className='w-full h-full overflow-auto relative mb-6'
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
{/* CitiesList */}
        {weatherHourly?.isLoading && <h1 className=' text-white text-2xl h-full w-full flex justify-center items-center'>Loading ....</h1>}
        <div className="relative w-full h-full max-w-4xl mx-auto bg-bg">
        <div className=" relative h-full">
          <div
            className="whitespace-nowrap transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className=" inline-block w-full h-full py-8">
                <CurrentCity item={item} />
                <TodayWeather hourly={hourly}/>
                <TodayWeather />
                <Confort />
                <Confort />
              </div>
            ))}
          </div>
        </div>
      </div>
        
    </div>  )
}

export default HomeWeather