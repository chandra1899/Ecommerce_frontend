import React from 'react'
import {Tilt} from 'react-tilt'
import { motion } from 'framer-motion'


const ProductCard = ({index}) => {
  return (
     <motion.div 
    whileHover={{
      scale:1.1
    }}
    key={index} className='h-[280px] w-[250px] bg-white shadow-xl rounded-xl'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Beautiful-pink-flower_-_West_Virginia_-_ForestWander.jpg" alt="" className='h-[70%] object-cover shadow-xl' />
      <div className='font-poppins flex flex-row justify-between items-center px-4 my-2'>
        <p>flower</p>
        <p className='font-medium'>20</p>
      </div>
      <p className='font-poppins flex flex-row justify-between items-center px-4 my-2'>description</p>
      <button className='h-[35px] font-medium rounded-lg text-[17px] px-4 w-auto p-2 text-black bg-green-600 hover:bg-green-700 my-4 mx-auto'>Add To Bucket</button>
    </motion.div>
  )
}

export default ProductCard
