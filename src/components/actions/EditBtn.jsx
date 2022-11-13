import { useDispatch } from "react-redux"
import { modalToggle, setForm } from "../../redux/redux-slices/addMarketSlice"
import { allData } from "../../utils/actionsTyps"

function EditBtn({editData, editId, type, index}) {

    const dispatch = useDispatch()

    const findObj = () => {
        const editObj = editData.find(data=>data.id === editId)
        console.log(editObj);
        dispatch(setForm({editObj,type,index}))
        if (type === allData ) {
            dispatch(modalToggle(true))
        }
    }
  return (
    <button onClick={findObj} className='btn btn-warning m-1' >EditBtn</button>
  )
}

export default EditBtn