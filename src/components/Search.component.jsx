import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchComponent = ({ isAddCity }) => {
  //nav
  const nav = useNavigate();
  const cityManageHandle = () => {
    nav("/add");
  };

  return (
    <div
      className={` bg-blue-500 w-full flex rounded-lg justify-between gap-6 py-4 px-4
        `}
    >
        <button className=" text-white font-bold w-1/12 flex items-center text-2xl justify-center">
          <CiSearch />
        </button>
      <div className=" w-4/5">
        <input
          className=" text-white text-2xl py-1 rounded-lg bg-blue-500 border-0"
          type="text"
        />
      </div>
          <button
           onClick={cityManageHandle}
           className=" text-white w-1/12 text-2xl flex items-center justify-center"
         >
           <IoMenu />
         </button>
    </div>
  );
};

export default SearchComponent;
