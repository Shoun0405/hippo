import React from 'react'

function InputComponent({type,name,placeHolder,
  label,max,register
}) {
  

  return (
    <div className='mb-3'>
    <label htmlFor={name}
    className={"text-start form-label"}>{label}</label>
    <input 
    type={type} 
    className="form-control"
    placeholder={placeHolder}
    max={max}
    id={name}
    {...register(name)}
    />
    </div>
  )
}

export default InputComponent