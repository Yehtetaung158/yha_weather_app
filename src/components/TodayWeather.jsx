import React from "react";

const TodayWeather = ({hourly}) => {
  return (
    <div className=" w-full">
      {/* <ScrollArea> */}
      <div
        className=" bg-blue-500 py-2 rounded-lg flex flex-row gap-4 text-white text-l mb-8 overflow-auto items-center justify-center "
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* Internet Explorer 10+ */,
        }}
      >
        <style>
          {`
            /* WebKit */
            .overflow-auto::-webkit-scrollbar {
              width: 0;
              height: 0;
            }
          `}
        </style>
        {hourly ? <>
        
        {hourly?.map((i,index)=>(< >
    <div key={index} className=" flex flex-col items-center justify-start w-52">
        <h1>{i.datetime.slice(11,14)} : 00</h1>
        {/* <h1>{i.weather.icon}</h1> */}
        <img className=" w-20" src={`https://cdn.weatherbit.io/static/img/icons/${i.weather.icon}.png`} alt="" />
        <h1>{i.temp}° </h1>
        {/* <h1>{i.weather.description}° </h1> */}
    </div>
    </>)
    )}

    </> :  <div className=" flex flex-col gap-4 px-2">
        <h1 className=" m-8">Loading ....</h1>
    </div>}
      </div>
    </div>
  );
};

export default TodayWeather;

// {hourly ? <>

//     {hourly?.map((i,index)=>(< >
// <div key={index} className=" flex flex-col gap-4 px-2 m-2">
//     <h1>{i.datetime.slice(11,14)} : 00</h1>
//     {/* <h1>{i.weather.icon}</h1> */}
//     <img src={`https://cdn.weatherbit.io/static/img/icons/${i.weather.icon}.png`} alt="" />
//     <h1>{i.temp}° </h1>
//     <h1>{i.city_name}° </h1>
// </div>
// </>)
// )}

// </> :  <div className=" flex flex-col gap-4 px-2">
//     <h1 className=" m-8">Loading ....</h1>
// </div>}
