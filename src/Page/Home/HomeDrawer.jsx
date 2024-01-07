import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { useGlobalContext } from '../../Context';
import { Link } from 'react-router-dom';
import { RiCloseFill } from "react-icons/ri";
const HomeDrawer = () => {
    const {openNav,setOpenNav} = useGlobalContext()
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpenNav(true);
  };
  const onClose = () => {
    setOpenNav(false);
  };
  return (
    <>
      <Drawer style={{background: 'black'}} className='bg-black' title="Basic Drawer" placement="right" onClose={onClose} open={openNav}>
        <ul className='text-[white] gap-[1rem]  mx-auto w-[10rem] flex flex-col items-center'>
           <Link to='/'><li>Home</li></Link> 
           <Link to='/portfolio'><li>Portfolio</li></Link> 
           <button onClick={onClose} className='text-[white] text-[2rem] '><RiCloseFill/></button>

        </ul>
      </Drawer>
    </>
  );
};
export default HomeDrawer;