import React from 'react'
import apple_icon from '../assets/apple_icon.png'

const Cart = () => {
  return (
    <div className='mt-[50px] flex flex-col font-medium p-12'>
      <div className='flex flex-row justify-start items-center'>
        <img src={apple_icon} alt="" className='h-[130px]' />
        <div className='w-[550px] ml-6'>
          <p className='font-bold text-[18px]'>Name</p>
          <p>dfgvdfgrtb edfgvedb dfgrthedv sdgerrty  vcgstgrtg etethfsfggsrf</p>
          <p>⭐⭐⭐</p>
          <p className='mx-4'>$ <span className='font-bold'>99</span></p>
        </div>
        <button className='h-[35px] w-[100px] bg-red-600 hover:bg-red-700 rounded-lg'>Remove</button>
      </div>
    </div>
  )
}

export default Cart
