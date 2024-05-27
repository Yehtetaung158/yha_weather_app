import React, { useEffect, useState } from "react";
import SearchComponent from "../components/Search.component";
import CurrentCity from "../components/CurrentCity";
import TodayWeather from "../components/TodayWeather";
import Confort from "../components/Confort";
import { useGetByCityHourlyMutation } from "../store/service/endpiont/weatherendpoint";
import HomeWeather from "../components/HomeWeather";

const HomePage = () => {
  const [hourlyFun, weatherHourly] = useGetByCityHourlyMutation();
  console.log(
    weatherHourly.data?.data,
    weatherHourly?.isLoading,
    weatherHourly?.isError
  );
  const hourly = weatherHourly.data?.data;

  const items = JSON.parse(localStorage.getItem("myArray"));
  console.log("I am clity list",items);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
    const currentCityName = items[newIndex].city_name;
    hourlyFun(currentCityName);
    console.log(currentCityName);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
    const currentCityName = items[newIndex].city_name;
    hourlyFun(currentCityName)
    console.log(currentCityName);
  };

  useEffect(()=>{
    hourlyFun(items[0].city_name)
  },[])


  return (
    <div
      className=" w-[430px] h-full bg-bg flex justify-center flex-col gap-4 items-center mx-auto pt-2 px-4 overflow-auto relative">
      
      <SearchComponent />
      <HomeWeather items={items} weatherHourly={weatherHourly} currentIndex={currentIndex} hourly={hourly}/>
      <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl text-white px-4 py-2"
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2  text-white px-4 py-2 text-3xl"
        >
          ❯
        </button>
    </div>
  );
};

export default HomePage;