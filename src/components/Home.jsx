import React,{useEffect} from 'react'
import { Footer, PhotoSlider,ProductCard ,SwiperComponent1,SwiperComponent2,MidelSwiper,LastHome,HomeSection_2} from '.'
import {motion} from 'framer-motion'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import ac_icon from '../assets/ac_icon.png'
import fridge_icon from '../assets/fridge_icon.png'
import oven_icon from '../assets/oven_icon.png'
import washingMachine_icon from '../assets/washingMachine_icon.png'

const Card=({product,src,index})=>(
  <div className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right","spring",0.3*index,0.75)}
    className='w-[1005] p-[1px] rounded-[20px] '
     >
      <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    key={index} className='h-auto p-2 w-[250px] bg-white shadow-xl rounded-xl cursor-pointer'>
     <div className='flex justify-center items-center my-4'>
     <img src={src} alt="" className='h-[180px] object-cover p-2' />
     </div>
      <div className='font-medium flex flex-row justify-between items-center px-6 my-2'>
        <p>Name</p>
        <p className='font-medium'>$ <span className='font-bold'>99</span></p>
      </div>
      <p className='px-4'>⭐⭐⭐</p>
      <p className='font-medium flex flex-row justify-between items-center px-4 my-2 break-words'>description jnu sdf oi sfi jjkjlfvbn fghb df dfhfhfghf</p>
    </motion.div>
    </motion.div>
    </div>
)

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className='flex flex-col justify-center items-center'>
    <PhotoSlider/>
    <div className='absolute z-[1] top-[40vh] mt-20 flex flex-wrap gap-20 px-10'>
      <Card src={ac_icon} index='1'/>
      <Card src={fridge_icon} index='2'/>
      <Card src={oven_icon} index='3'/>
      <Card src={washingMachine_icon} index='4'/>
    </div>
    <div className='w-[100vw] h-auto bg-gray-200 absolute top-[125vh]'>
      <HomeSection_2/>
      <SwiperComponent1/>
      <MidelSwiper/>
      <SwiperComponent2/>
      <LastHome/>
      <Footer/>
    </div>
    </div>
  )
}

export default SectionWrapper(Home,"about")
