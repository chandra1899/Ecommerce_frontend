import React from 'react'
import {Tilt} from 'react-tilt'


const ProductCard = ({index}) => {
  return (
   <Tilt>
     <div 
    options={{
      max:45,
      scale:1,
      speed:450
    }}
    key={index} className='h-[280px] w-[250px] bg-white shadow-xl rounded-xl'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Beautiful-pink-flower_-_West_Virginia_-_ForestWander.jpg" alt="" className='h-[70%] object-cover shadow-xl' />
      <div className='font-poppins flex flex-row justify-between items-center px-4 my-2'>
        <p>flower</p>
        <p className='font-medium'>20</p>
      </div>
      <p className='font-poppins flex flex-row justify-between items-center px-4 my-2'>description</p>
    </div>
   </Tilt>
  )
}

export default ProductCard
