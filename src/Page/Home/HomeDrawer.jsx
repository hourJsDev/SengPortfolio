import React, { useState } from "react";
import { Button, Space, Drawer, Dropdown } from "antd";
import { useGlobalContext } from "../../Context";
import { Link } from "react-router-dom";
import { RiCloseFill } from "react-icons/ri";
const HomeDrawer = () => {
  const { openNav, setNavModal, setOpenNav } = useGlobalContext();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpenNav(true);
  };
  const onClose = () => {
    setOpenNav(false);
  };
  const handleClick = () => {
    setNavModal(true);
    setOpenNav(false);
  };
  const items = [
    {
      label: <Link to="photography">Photography</Link>,
      key: "0",
    },
    {
      label: <Link to="videography">Videography</Link>,
      key: "1",
    },
  ];
  return (
    <>
      <Drawer
        style={{ background: "black" }}
        className="bg-black"
        title="Basic Drawer"
        placement="right"
        onClose={onClose}
        open={openNav}
      >
        <ul className="text-[white] gap-[1rem]  mx-auto w-[10rem] flex flex-col items-center">
          <Link onClick={() => setOpenNav(false)} to="/">
            <li>Home</li>
          </Link>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>Portfolio</Space>
            </a>
          </Dropdown>
          <button onClick={onClose} className="text-[white] text-[2rem] ">
            <RiCloseFill />
          </button>
        </ul>
      </Drawer>
    </>
  );
};
export default HomeDrawer;
