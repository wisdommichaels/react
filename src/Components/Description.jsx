import React from 'react'
import product from '../product'

const Description = () => {
  return (
    <div>
      <h2 className='text-lg font-semibold'>{product.description}</h2>
    </div>
  )
}

export default Description