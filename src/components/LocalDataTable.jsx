import { useSelector } from 'react-redux'
import { localData } from '../utils/actionsTyps'
import DeleteBtn from './actions/DeleteBtn'
import EditBtn from './actions/EditBtn'

function LocalDataTable() {
    const {addLocalSale} = useSelector(states => states.addMarkets)
  return (
    <div>
    <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name of Good</th>
            <th scope="col">Amount</th>
            <th scope="col">Price</th>
            <th scope="col">Total Summ</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                addLocalSale.map((data,i)=>(
                    <tr key={data.id} >
                      <th scope="row">{i+1}</th>
                      <td>{data.goods.value}</td>
                      <td>{data.amount}</td>
                      <td>{data.summ} so'm</td>
                      <td>{data.totalSumm} so'm</td>
                      <td>
                      <EditBtn editData={addLocalSale} type={localData} 
                      editId={data.id} index={i} />
                      <DeleteBtn index={i} type={localData} /></td>
                    </tr>
                ))
            }
        </tbody>
  </table></div>
  )
}

export default LocalDataTable