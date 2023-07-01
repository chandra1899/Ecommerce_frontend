import React,{useEffect} from 'react'
import { Footer, PhotoSlider,ProductCard ,SwiperComponent1,SwiperComponent2} from '.'
import {motion} from 'framer-motion'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const products=['boys','girls','men' ,'women'];
const product1=['boys','girls','men'];

const Card=({product,index})=>(
  <div className="xs:w-[250px] w-full">
<motion.div
    variants={fadeIn("right","spring",0.3*index,0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] '
     >
      <ProductCard product={product} index={index}/>
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
    {products.map((product,index)=>(
      <Card product={product} index={index}/>
    ))}
    </div>
    <div className='w-[100vw] h-auto bg-gray-200 absolute top-[125vh]'>
      <div className='w-[100%] bg-dimWhite h-auto p-10'>
      <div className='flex flex-wrap m-3 justify-around items-center'>
      {product1.map((p,index)=>(
        <ProductCard index={index}/>
      ))}
      </div>
      <div className='flex flex-wrap justify-around items-center'>
      {product1.map((p,index)=>(
        <ProductCard index={index}/>
      ))}
      </div>
      </div>
      <SwiperComponent1/>
      <SwiperComponent2/>
      <Footer/>
    </div>
    </div>
  )
}

export default SectionWrapper(Home,"about")
