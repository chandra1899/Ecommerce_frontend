import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apple_icon from '../assets/apple_icon.png'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import {cartNumberAction} from '../store/cartNumberSlice'

const Product = () => {
    const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user.user)
    const [product,setProduct]=useState({})
    const {id}=useParams()
    const getProductDetails=async ()=>{
        let res= await fetch(`http://localhost:8000/api/product/getProductDetails/${id}`,{
            method:'GET',
            headers:{
              'Access-Control-Allow-Origin': '*',
              Accept:"application/json",
              "Content-Type":"application/json"
            },
            credentials:'include', 
          });
          let data=await res.json();
          if(res.status===200){
            if(product)setProduct(data.product);
            console.log(data.product);
          }
    }

    const handleAddCart=async (id)=>{
        if(user){
          let res=await fetch(`http://localhost:8000/api/cart/addProduct/${id}`,{
                method:"post",
                headers:{
                  "Content-Type":"application/json"
              },
              credentials:'include', 
              })
              let data=await res.json();
              if(res.status===200){
                // window.alert('added to cart')
                dispatch(cartNumberAction.setinc(1))
              }
    
        }else{
          navigate('/login')
        }
      }
    useEffect(()=>{
    getProductDetails();
    console.log(id);
    },[])
  return (
    <div className='mt-[50px] font-medium text-[17px]'>
      <div className='flex flex-row justify-center items-center mt-[8%]'>
        <img src={`http://localhost:8000/api/product/photo/${id}`}  alt="" className='h-[350px] mx-6'/>
        <div className='w-[450px] flex flex-col mx-12'>
            <p className='text-[21px] font-poppins'>{product.name}</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;{product.description}</p>
            <p className='ml-4 mt-6 border-b-2 border-slate-400 '>4⭐⭐⭐⭐<span className='text-[15px] text-[#007185] ml-6 cursor-pointer hover:underline hover:text-[#CC0C39]'>1,065 ratings</span></p>
            <p className='h-[35px] p-2 bg-[#CC0C39] rounded-lg my-4 w-[140px] flex justify-center items-center'>Deal of the Day</p>
            <p className='font-medium text-[25px]'><span className='text-[#CC0C39] font-normal text-[25px]'>-67% &nbsp;</span> $<span className='font-poppins'>{product.price}</span></p>
            <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className='h-[35px] rounded-lg text-[17px] px-4 w-[140px] p-2 text-black bg-green-600 hover:bg-green-700 my-4' onClick={()=>{handleAddCart(id)}}>Add To Bucket</motion.button>
        </div>
      </div>
    </div>
  )
}

export default Product
