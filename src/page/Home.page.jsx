import React from 'react'
import SearchComponent from '../components/Search.component'
import CurrentCity from '../components/CurrentCity'
import TodayWeather from '../components/TodayWeather'
import Confort from '../components/Confort'

const HomePage = () => {
  return (
    <div className=' w-[430px] h-full bg-bg flex justify-center flex-col gap-4 items-center mx-auto overflow-auto pt-24 px-4'
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
        <SearchComponent/>
        <CurrentCity/>
        <TodayWeather/>
        <TodayWeather/>
        <Confort/>
        <Confort/>
    </div>
  )
}

export default HomePage