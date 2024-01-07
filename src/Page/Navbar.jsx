import React from "react";
import { RiAlignRight } from "react-icons/ri";
import { useGlobalContext } from "../Context";

const Navbar = () => {
    const {setOpenNav} = useGlobalContext()
  return (
    <nav className="w-[90%] mx-auto mt-[1rem] flex justify-between items-center">
      <h1 className="text-[white] text-[1.3rem]">MINGSENG</h1>
      <div>
        <button onClick={()=> setOpenNav(true)} className="text-[white] text-[1.3rem]">
          <RiAlignRight />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
