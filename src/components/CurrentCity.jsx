import React from 'react'

const CurrentCity = ({item}) => {
  return (
    <div className=' flex flex-col items-center space-y-2 p-2 w-full'>
         <h1 className=' text-3xl font-bold text-white'>{item.city_name}</h1>
         <h1 className=' text-[100px] text-white'> {item.temp} °</h1>
         {/* <h1 className=' text-xl font-bold text-white'><span>35°</span> / <span>27°</span></h1> */}
         <h1 className=' text-xl font-bold text-white'>{item.weather.description}</h1>
    </div>
  )
}

export default CurrentCity