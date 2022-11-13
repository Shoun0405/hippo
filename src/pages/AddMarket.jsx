import React from 'react'
import AllSumms from '../components/AllSumms'
import DataTable from '../components/AllDataTable'
import ModalMarket from '../components/ModalMarket'
import Navbar from '../components/Navbar'

function AddMarket() {
  return (
    <div className="App container-fuild px-3">
        <Navbar/>
        <ModalMarket/>
        <DataTable/>
        <AllSumms/>
    </div>
  )
}

export default AddMarket