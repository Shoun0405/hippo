import { useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { 
    listOfGoods, 
    listEmployee,
    listClient } from '../data/dataBasa'
import { localSales, updatArr } from '../redux/redux-slices/addMarketSlice'
import InputComponent from './InputComponent'
import SelectOption from './SelectOption'

function FormHook() {
    const date = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0]

    const [editAct,setEditAct] = useState(false)

    const dispatch = useDispatch()
    const {selectedPrice,setObject,isEdited} = useSelector(state=> state.addMarkets)

    const id = Date.now()

    const msg = "This option is required."

    const {control,handleSubmit,register,setValue,formState,reset} = useForm({
        defaultValues:{
            id,
            createdDate:date,
            amount:null,
            clients:'',
            employee:'',
            goods:'',
            summ:null
        },
        mode:'onSubmit'
    })

    const byDefaultValues = {
          id,
          createdDate:date,
          amount:null,
          clients:'',
          employee:'',
          goods:'',
          summ:null
        }
        
    useEffect(()=>{
      if (selectedPrice) {
        setValue('summ',selectedPrice)
      }
    },[selectedPrice, setValue])

    const resetEdit = () =>{
        reset({...formState.defaultValues,...setObject})
    }

    useEffect(()=>{
      if (isEdited) {
        setEditAct(true)
        resetEdit()
      }      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isEdited])

    const editSubmit =(data)=>{
      dispatch(updatArr({data}))
      reset({...formState.defaultValues,...byDefaultValues})
      setEditAct(false)
    }

    const onSubmit = (data) =>{
      dispatch(localSales(data))
      reset({...formState.defaultValues,...byDefaultValues})
      setValue('id',Date.now())
    }

    const editOrSubmit =(data)=> editAct ? editSubmit(data) : onSubmit(data) 


  return (
    <div className="container-fluid">
    <form onSubmit={handleSubmit(editOrSubmit)} >
        
    <div className='row justify-content-center' >
          <div className="col-6"> 
            <InputComponent 
            type={"date"}  
            id={'date'}
            max={date}
            label={'Created Date'}
            name={'createdDate'}
            register={register}
            />
            <SelectOption
            label={'Clients'}
            placeholder={'Clients...'}
            option={listClient}
            control={control}
            name="clients"
            next={'goods'}
            />  
            <InputComponent 
            type={"number"}
            label={'Price'}
            name={'summ'}
            placeHolder={'Price'}
            register={register}
            />
            </div>
          <div className="col-6">
            
            <SelectOption
            label={'Employee'}
            placeholder={'Employee...'}
            option={listEmployee}
            control={control}
            name="employee"
            next={'clients'}
            />  
            <SelectOption
            label={'Goods'}
            placeholder={'Goods...'}
            option={listOfGoods}
            control={control}
            name="goods"
            msg={msg}
            findId={true}
            next={'amount'}
            />  
            <InputComponent 
            type={"number"}
            label={'Amount'}
            placeHolder={'Amount'}
            name={'amount'}
            register={register}
            />
          </div>
          </div>
          <div className="d-grid my-5">
          <button type='submit'
          className="btn btn-success">Submit</button>
          </div>
    </form>
    </div>
  )
}

export default FormHook