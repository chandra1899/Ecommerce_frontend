import React,{useEffect} from 'react'
import { Footer, PhotoSlider,ProductCard ,SwiperComponent1,SwiperComponent2,MidelSwiper,LastHome,HomeSection_2} from '.'
import {motion} from 'framer-motion'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const Card=({product,index})=>(
  <div className="xs:w-[250px] w-full">
    <motion.div
    variants={fadeIn("right","spring",0.3*index,0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] '
     >
      <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    key={index} className='h-[280px] w-[250px] bg-white shadow-xl rounded-xl'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Beautiful-pink-flower_-_West_Virginia_-_ForestWander.jpg" alt="" className='h-[70%] object-cover shadow-xl' />
      <div className='font-poppins flex flex-row justify-between items-center px-4 my-2'>
        <p>flower</p>
        <p className='font-medium'>20</p>
      </div>
      <p className='font-poppins flex flex-row justify-between items-center px-4 my-2'>description</p>
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
      <Card  index='1'/>
      <Card  index='2'/>
      <Card index='3'/>
      <Card index='4'/>
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
