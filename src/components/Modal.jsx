import React from 'react'
import Inputs from './Inputs'

const Modal = () => {
  return (
    <div>
      <form className='row' >
        <div className="col-8 ">
        <div className="shadow rounded my-4 p-4">
          <h6 className='text-start text-warning'>Title</h6>
        <Inputs
        name={'goods'}
        plaseHolder={'Name goods'} 
        label={'Name goods'} />
        <Inputs
        name={'categories'}
        plaseHolder={'Categories'} 
        label={'Category'}
        />
        </div>
        <div className="shadow rounded my-4 p-4">
          <h6 className='text-start text-warning'>Unit of measurement</h6>
        <Inputs
        name={'measurement'}
        plaseHolder={'Unit of measurement'} 
        label={'Unit of measurement'}
        />
        <Inputs
        name={'packageName'}
        plaseHolder={'Package names'} 
        label={'Package names'}
        />
        <Inputs
        name={'numberOfPackages'}
        plaseHolder={'Number of packages'} 
        label={'Number of packages'}
        />
        </div>
        <div className="shadow rounded my-4 p-4">
          <h6 className='text-start text-warning'>Inventory</h6>
        <Inputs
        name={'barcode'}
        plaseHolder={'Barcode'} 
        value={Date.now()}
        label={'Barcode'}
        />
        <Inputs
        name={'remainder'}
        plaseHolder={'Remainder'} 
        label={'Remainder'}
        />
        <Inputs
        name={'vendorCode'}
        plaseHolder={'Vendor code'} 
        label={'Vendor code'}
        />
        <Inputs
        name={'alert'}
        plaseHolder={'Alert'}
        label={'Alert'} />
        </div>
        </div>
        <div className="col-4">
        <div className="shadow rounded my-4 p-4">
          <h6 className='text-start text-warning'>Price</h6>
        <Inputs
        name={'sellingPrice'}
        plaseHolder={'Selling price'} 
        label={'Selling price'}
        />
        <Inputs
        name={'wholesalePrice'}
        plaseHolder={'Wholesale price'} 
        label={'Wholesale price'}
        />
        <Inputs
        name={'purchasePrice'}
        plaseHolder={'Purchase price'} 
        label={'Purchase price'}
        />
        </div>
        <div className="shadow rounded my-4 p-4">
          <h6 className='text-start text-warning'>Product or material</h6>
        <Inputs
        name={'productOrMaterial'}
        plaseHolder={'Product or material'}
        label={'Product or material'}
        />
        </div>
        </div>
      </form>
    </div>
  )
}

export default Modal