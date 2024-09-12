import React from 'react'
import product from '../product'

const Image = () => {
  return (
    <img src={product.imgUrl} alt="" className='w-[300px] h-[300px] rounded-md' />
  )
}

export default Image