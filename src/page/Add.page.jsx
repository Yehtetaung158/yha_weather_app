import React, { useEffect, useState } from "react";
import { RiMenuAddFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import AddInput from "../components/AddInput";
import CityList from "../components/CityList";
import { useGetCurrentByCityMutation } from "../store/service/endpiont/weatherendpoint";
import RfreshnadBack from "../components/RfreshnadBack";
import { addObjectToLocalStorage } from "../store/service/onobyoneservice";

const AddPage = () => {
  const [isAddCity, setIsAddCity] = useState(true);
  const addCityHandle = () => {
    setIsAddCity(!isAddCity);
  };

  const nav = useNavigate();

//   auth 

  const [currentCityFun,{data,isError,isLoading}]=useGetCurrentByCityMutation()

  console.log(data,isError,isLoading)
  const currentData = data?.data[0];
  

  useEffect(() => {
    if (currentData) {
      addObjectToLocalStorage(currentData);
    }
  }, [data]);

  return (
    <div
      className=" w-[430px] h-full bg-bg flex flex-col gap-4 items-center mx-auto overflow-auto px-4 relative"
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
{/* Home and Addinput */}
      <div className=" w-full flex items-center py-2">
        {isAddCity ? (
          <>
            <RfreshnadBack/>
          </>
        ) : (
          <AddInput currentCityFun={currentCityFun}/>
        )}
      </div>
{/* Citylist  */}
<CityList/>


{/* spacer */}
<div className=" h-20"></div>

{/* Add Button  */}
      <button
        onClick={addCityHandle}
        className=" text-3xl  text-white flex gap-4 bg-blue-500 w-full justify-center items-center p-4 absolute left-0 right-0 bottom-0"
      >
        {isAddCity ? (
          <>
            <RiMenuAddFill className=" text-3xl text-white" />
            <h1 className="text-2xl">ADD</h1>
          </>
        ) : (
          <h1 className=" text-2xl">Cancle</h1>
        )}
      </button>
    </div>
  );
};

export default AddPage;
