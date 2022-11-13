import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function AllSumms() {
  
  const [allSumm,setAllSumm] = useState()
  const {addAllSales} = useSelector(states => states.addMarkets)
  useEffect(()=>{
    if (addAllSales.length !== 0) {
      const allSumm = addAllSales.reduce((total,allSumm)=>{
        return total + allSumm.totalSumm 
      },0)
      setAllSumm(allSumm)
    }
  },[addAllSales])
  return (
    <div className="fixed-bottom allSumm bg-secondary">
        All Summs: {allSumm && ` ${allSumm} so'm` }
    </div>
  )
}

export default AllSumms