import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteObj } from '../../redux/redux-slices/addMarketSlice'

function DeleteBtn({index,type}) {
    const {addAllSales} = useSelector(state=>state.addMarkets)
    const dispatch = useDispatch()
    const deletHandler = () => {
        dispatch( deleteObj({ type, index}) )
        console.log(addAllSales);
    }
  return (
    <button onClick={deletHandler} className='btn btn-danger m-1' >DeleteBtn</button>
  )
}

export default DeleteBtn