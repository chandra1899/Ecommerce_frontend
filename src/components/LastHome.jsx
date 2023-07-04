import React from 'react'
import { motion } from 'framer-motion'

const LastHome = () => {
  return (
    <div className='flex flex-row justify-center items-center my-10'>
    {/* 3watch alexa phone */}
    <div className='bg-white h-auto w-[27vw] m-2 break-words p-4 shadow-xl text-[18px] flex flex-col justify-center items-start'>
        <p className='font-medium'>Smasang kjdf gokkj iokmdf pjkmkdf pokk  pojsdfmf jiop dfgv </p>
        <p className='font-poppins my-1 mt-2'>$ <span className='font-bold'>99</span> </p>
        <p className='my-1'>⭐⭐⭐</p>
        <motion.div
             whileHover={{
              scale:1.1
            }}
            className='h-[250px] m-auto'
            >

        <img src="https://i5.walmartimages.com/asr/e1ae90b2-98da-443b-888c-a71228c5234e.eb10d07052b374f38aa17166043f5a7a.jpeg" alt="" className='h-[250px] m-auto' />
            </motion.div>
            <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className='h-[35px] font-medium rounded-lg text-[17px] px-4 w-auto p-2 text-black bg-green-600 hover:bg-green-700 my-4 mx-auto'>Add To Bucket</motion.button>
    </div>
    <div className='bg-white h-auto w-[27vw] m-2 break-words p-4 shadow-xl text-[18px] flex flex-col justify-center items-start'>
    <p className='font-medium'>Smasang kjdf gokkj iokmdf pjkmkdf pokk  pojsdfmf jiop dfgv </p>
        <p className='font-poppins my-1 mt-2'>$ <span className='font-bold'>99</span> </p>
        <p className='my-1'>⭐⭐⭐⭐</p>
        <motion.div
             whileHover={{
              scale:1.1
            }}
            className='h-[250px] m-auto'
            >

    <img src="https://cdn.macrumors.com/article-new/2017/10/61yI7vWa83L._SL1000_-e1507027523440-800x818.jpg?retina" alt="" className='h-[250px] m-auto' />
            </motion.div>
            <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className='h-[35px] font-medium rounded-lg text-[17px] px-4 w-auto p-2 text-black bg-green-600 hover:bg-green-700 my-4 mx-auto'>Add To Bucket</motion.button>
    </div>
    <div className='bg-white h-auto w-[27vw] m-2 break-words p-4 shadow-xl text-[18px] flex flex-col justify-center items-start'>
    <p className='font-medium'>Smasang kjdf gokkj iokmdf pjkmkdf pokk  pojsdfmf jiop dfgv </p>
        <p className='font-poppins my-1 mt-2'>$ <span className='font-bold'>99</span> </p>
        <p className='my-1'>⭐⭐⭐⭐⭐</p>
        <motion.div
             whileHover={{
              scale:1.1
            }}
            className='h-[250px] m-auto'
            >

    <img src="https://img.tttcdn.com/product/xy/2000/2000/p/gu1/P/8/PF0008GY-US-128/PF0008GY-US-128-1-fa9d-CVm7.jpg?version=20180226" alt="" className='h-[250px] m-auto'/>
            </motion.div>
            <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className='h-[35px] font-medium rounded-lg text-[17px] px-4 w-auto p-2 text-black bg-green-600 hover:bg-green-700 my-4 mx-auto'>Add To Bucket</motion.button>
    </div>
    </div>
  )
}

export default LastHome
