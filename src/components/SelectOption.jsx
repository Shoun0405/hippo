import AsyncSelect from 'react-select/async'
import { useDispatch } from 'react-redux'
import { price, setFocus } from '../redux/redux-slices/addMarketSlice'
import { Controller } from 'react-hook-form'

function SelectOption({option,name,placeholder,control,findId,label,next}) {

    const options = option.map(data=>{
     return{
        id:data.id,
        value:data.name,
        label:data.name
     }
    })
    const dispatch = useDispatch()
    const handleChange =(selected)=>{
        dispatch(setFocus(next))
        if (findId) {
            const findGood = option.find(good=> good.id === selected.id).prices.defaultPrice
            dispatch(price(findGood))  
        }
    }

    const loadOptions = (searched,callback)=>{
        setTimeout(()=>{
            const filtered = options.filter(option=>{
                return option.label.toLowerCase()
                .includes(searched.toLowerCase())
            })
            callback(filtered)
        },0)
    }

  return (
    <Controller
    name={name}
    control={control}
    rules={{required:true}}
    render={({field:{onChange,value},fieldState:{error}})=>(
    <div>
        <label 
        className="text-start form-label">{label}</label>
        <AsyncSelect
        className='mb-3'
        loadOptions={loadOptions}
        defaultOptions
        onBlur={(e)=>console.log(e)}
        value={value}
        placeholder={placeholder}
        backspaceRemovesValue={true}
        onChange={(newVal=>{
        onChange(newVal)    
        handleChange(newVal)
        })}
        />
    {error && (<p className='error'>{error.message}</p>)}
    </div>
    )}/>
  )
}

export default SelectOption