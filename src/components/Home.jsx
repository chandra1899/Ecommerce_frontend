import React,{useEffect,useState} from 'react'
import { Footer, PhotoSlider,ProductCard ,SwiperComponent1,SwiperComponent2,MidelSwiper,LastHome,HomeSection_2} from '.'
import {motion} from 'framer-motion'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import ac_icon from '../assets/ac_icon.png'
import fridge_icon from '../assets/fridge_icon.png'
import oven_icon from '../assets/oven_icon.png'
import washingMachine_icon from '../assets/washingMachine_icon.png'

const Card=({product,index})=>(
  <div className="xs:w-[250px] w-full">
    {/* {console.log(index)} */}
    <motion.div
    // variants={fadeIn("right","spring",0.3*index,0.75)}
    className='w-[1005] p-[1px] rounded-[20px] '
     >
      <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    key={product._id} className='h-auto p-2 w-[250px] bg-white shadow-xl rounded-xl cursor-pointer'>
     <div className='flex justify-center items-center my-4'>
     <img src={`http://localhost:8000/api/product/photo/${product._id}`} alt={product.name} className='h-[180px] object-cover p-2' />
     </div>
      <div className='font-medium flex flex-row justify-between items-center px-6 my-2'>
        <p>{product.name}</p>
        <p className='font-medium'>$ <span className='font-bold'>{product.price}</span></p>
      </div>
      <p className='px-4'>⭐⭐⭐</p>
      <p className='font-medium flex flex-row justify-between items-center px-4 my-4 break-words'>Description</p>
    </motion.div>
    </motion.div>
    </div>
)

const Home = () => {
  const [section1Products,setSection1Products]=useState([]);
  const getSection1=async ()=>{
    let res=await fetch(`http://localhost:8000/api/product/getParticularProducts?belongsTo=section1`,{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
          },
          credentials:'include', 
          })
          let data=await res.json();
          if(res.status===200){
            console.log(data.products);
         
            if(data.products!==undefined){setSection1Products(data.products)}
          }else{
            window.alert('error in fetching products of section1')
          }
  }
  useEffect(()=>{
    window.scrollTo(0,0)
    getSection1()
    console.log("section1Products",typeof section1Products);
  },[])
  return (
    <div className='flex flex-col justify-center items-center'>
    <PhotoSlider/>
    <div className='absolute z-[1] top-[40vh] mt-20 flex flex-wrap gap-20 px-10'>
      {section1Products.length!==0 && section1Products.map((product,index)=>(
        <Card product={product} index={index}/>
        ))}
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
