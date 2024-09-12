import React from 'react'
import product from '../product'

const Image = () => {
  return (
    <img src={product.imgUrl} alt="" className='w-40'/>
  )
}

export default Image