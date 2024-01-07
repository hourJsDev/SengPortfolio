import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useGlobalContext } from '../../Context';
import { Link } from 'react-router-dom';
const HomeModal = () => {
    const {navModal,setNavModal} = useGlobalContext()
  const showModal = () => {
    setNavModal(true);
  };
  const handleOk = () => {
    setNavModal(false);
  };
  const handleCancel = () => {
    setNavModal(false);
  };
  return (
    <>
      <Modal footer={null} title="Portfolio" open={navModal} onOk={handleOk} onCancel={handleCancel}>
        <ul className='text-center flex flex-col gap-[1rem]'>
        <Link><li>Photography</li></Link>
        <Link><li>Videography</li></Link>
        </ul>
      </Modal>
    </>
  );
};
export default HomeModal;