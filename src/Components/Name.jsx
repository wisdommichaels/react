import React from 'react'
import product from '../product'

const Name = () => {
  return (
    <div>
       <h1 className='text-3xl font-bold text-white p-2'>{product.name}</h1>
    </div>
  )
}

export default Name