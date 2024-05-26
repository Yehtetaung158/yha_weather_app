import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useGetCurrentByCityMutation } from "../store/service/endpiont/weatherendpoint";
// import { fetchItemsOneByOne } from "../store/service/onobyoneservice";

const RfreshnadBack = () => {
  const nav = useNavigate();

  const [fetchItemById,{isLoading}] = useGetCurrentByCityMutation();

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
  const [loading, setLoading] = useState(true);

  const fetchData = async (myarrayfromlocal) => {
    const result = await fetchItemsOneByOne(myarrayfromlocal);
    setItems(result);
    setLoading(false);
  };

  console.log("refreshed",items,isLoading)

  let array = JSON.parse(localStorage.getItem("myArray"));

  const refresHandle=()=>{
    fetchData(array)
  }

  
  return (
    <div className=" w-full flex  justify-between">
      <button
        onClick={() => {
          nav("/");
          // setIsAddCity(false);
          // console.log(isAddCity);
        }}
        className=" flex gap-2 py-2"
      >
        <MdOutlineArrowBackIos className=" text-white text-3xl" />
        <h1 className=" text-white text-2xl">Home</h1>
      </button>

      <button
        onClick={refresHandle}
        className=" text-blue-500 w-1/12 text-2xl flex items-center justify-center bg-blue-200 px-8 rounded-lg py-"
      >
        Fresh
      </button>
    </div>
  );
};

export default RfreshnadBack;
