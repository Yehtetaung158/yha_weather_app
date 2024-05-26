import React from 'react'

const Confort = () => {
  return (
    <div className=' w-full '>
        <h1 className=' text-white text-xl mb-2'>Confort Level</h1>
            <div className=' bg-blue-500 p-2 rounded-lg flex flex-row justify-between w-full text-white'>
        <div className=' flex gap-4 flex-col '>
            <h1 className=' text-xl'>Homidity</h1>
            <h1 className=' text-4xl'>78%</h1>
        </div>
        <div className=' flex gap-4 flex-col'>
            <h1 className=' text-xl'>Feels like 31°</h1>
            <h1 className=' text-xl'>Uv index Low</h1>
        </div>
    </div>
    </div>
  
  )
}

export default Confort