import React, { useState } from 'react'

function Inputs({type,name,placeHolder,value,label}) {
  return (
    <div className='mb-3'>
    <label htmlFor={name}
    className="text-start form-label">{label}</label>
    <input 
    type={type || 'text'} 
    className="form-control" 
    placeholder={placeHolder} 
    name={name}
    defaultValue={value}
    id={name}
    />
    </div>
  )
}

export default Inputs