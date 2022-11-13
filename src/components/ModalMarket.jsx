/* eslint-disable react-hooks/exhaustive-deps */
import React, {  useState } from 'react'
import { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { allSales, clearLocalSales, 
  modalToggle } from '../redux/redux-slices/addMarketSlice';
import FormComponent from './FormComponent';
import LocalDataTable from './LocalDataTable';

const customStyles = {
  content: {
    inset:'50px'
  },
};

Modal.setAppElement('body');

function ModalMarket() {

  const {setModal} = useSelector(state=>state.addMarkets)
  const dispatch = useDispatch()
  
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    if (setModal) {
      openModal()
    }
  },[setModal])

   function openModal() {
    setIsOpen(true)
    dispatch(modalToggle(true))
  }


  function closeModal() {
    setIsOpen(false)
    dispatch(clearLocalSales())
    dispatch(modalToggle(false))
  }

  
  const saveBtn = () => {
    setIsOpen(false)
    dispatch(allSales())
    dispatch(clearLocalSales())
    dispatch(modalToggle(false))
  }

  return (
    <div className="container mt-5 mb-3 pt-5 d-flex">
      <button className=' ms-auto btn btn-primary' 
      onClick={openModal}>Add Selling</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button 
        onClick={saveBtn}
        className="btn bg-warning bg-gradient bg-opacity-50">Save</button>
          <span className='closeModal cursorPointer' 
          onClick={closeModal} >&#10005;</span>
        <div className='container p-2'>
          <FormComponent/>
          <LocalDataTable/>
        </div>
      </Modal>

    </div>
  )
}

export default ModalMarket