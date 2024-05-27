import React from "react";
import { CgDetailsLess } from "react-icons/cg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { AiOutlineDeleteRow } from "react-icons/ai";

const Dropdwn = ({i,array,setLoading,loading}) => {
    const deleteHandle=()=>{
        const currentIndex=array.indexOf(i)
        // const currentCity=array.find((j)=>array.indexOf(j)===currentIndex)
        // console.log("current index",currentIndex ," //" ,currentCity)
        array.splice(currentIndex,1)
        localStorage.setItem("myArray", JSON.stringify(array));
        // seRf(!rf)
        setLoading(!loading)
        // setInput("")
    }
  return (
    <div className=" h-4 w-6 text-white text-3xl">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <CgDetailsLess />
          {/* <h1>open</h1> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" mr-20">
          <button onClick={deleteHandle} className=" bg-white flex gap-2 items-center px-4 py-2 ">
          <AiOutlineDeleteRow className=" text-red-700 text-xl"/>
          <h1 className=" text-xl text-blue-900">Remove</h1>
          </button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdwn;
