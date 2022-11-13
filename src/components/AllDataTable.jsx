import React from 'react'
import { useSelector } from 'react-redux'
import { allData } from '../utils/actionsTyps'
import DeleteBtn from './actions/DeleteBtn'
import EditBtn from './actions/EditBtn'

function DataTable() {
  const {addAllSales} = useSelector(states => states.addMarkets)
  return (
    <div>
    <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name of Good</th>
            <th scope="col">Employee</th>
            <th scope="col">Amount</th>
            <th scope="col">Price</th>
            <th scope="col">Total Summ</th>
            <th scope="col">Data Sale</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            addAllSales.map((data,i)=>(
              <tr key={data.id}>
                <th scope="row">{i+1}</th>
                <td>{data.goods.value}</td>
                <td>{data.employee.value}</td>
                <td>{data.amount}</td>
                <td>{data.summ} so'm</td>
                <td>{data.totalSumm} so'm</td>
                <td>{data.createdDate.split("-").reverse().join("-")}</td>
                <td> 
                <EditBtn editData={addAllSales} type={allData} 
                editId={data.id} index={i} /> 
                <DeleteBtn index={i} type={allData} />
                </td>
              </tr>
            ))
          }
        </tbody>
  </table>
  </div>
  )
}

export default DataTable