import React from 'react'

const SwipeCard = ({src}) => {
  return (
    <div  className='h-[100%] w-[100%] bg-white shadow-xl rounded-xl'>
    <img src={src} alt="" className='h-[75%] w-[100%] object-cover' />
      <div className='font-poppins flex flex-row justify-between mt-4 items-center px-4 my-2'>
        <p>flower</p>
        <p className='font-medium'>20</p>
      </div>
      <p className='font-poppins flex flex-row justify-between items-center px-4 my-2'>description</p>
    </div>
  )
}

export default SwipeCard
