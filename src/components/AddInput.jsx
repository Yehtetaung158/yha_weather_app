import React, { useState } from 'react'

const AddInput = ({currentCityFun}) => {

    const [input,setInput]=useState("")
    const inputChange=(e)=>{
        setInput(e.target.value)
    }
    const cityAddHandle=()=>{
        currentCityFun(input)
        setInput("")
    }

  return (
    <div
      className={` bg-blue-500 w-full flex rounded-lg justify-between gap-6 py-4 px-4
        `}
    >
      <div className=" w-4/5">
        <input
         value={input}
         onChange={inputChange}
          className=" text-white text-2xl py-1 rounded-lg bg-blue-500 border-0"
          type="text"
        />
      </div>
        <button
        onClick={cityAddHandle}
        className=" text-blue-500 w-1/12 text-2xl flex items-center justify-center bg-blue-200 px-8 rounded-lg py-"
      >
        Add
      </button>
    </div>
  )
}

export default AddInput