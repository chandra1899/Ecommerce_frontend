import React, { useEffect, useState } from 'react'
import apple_icon from '../assets/apple_icon.png'
import { useDispatch, useSelector } from 'react-redux'
import {cartNumberAction} from '../store/cartNumberSlice'

const Cart = () => {
  const cartProducts=useSelector(state=>state.cartProducts.cartProducts)
 const dispatch=useDispatch()
  const removeItemFremCart=async (event,id)=>{
    let res= await fetch(`http://localhost:8000/api/cart/deleteProduct/${id}`,{
          method:'post',
          headers:{
            'Access-Control-Allow-Origin': '*',
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:'include', 
        });
        if(res.status===200){
          event.target.parentElement.classList.add('hidden');
          console.log(event.target.parentElement);
          dispatch(cartNumberAction.setdec(1))
        }
  }
  useEffect(()=>{
    // console.log('in cart',cartProducts);
  },[])
  return (
    <div className='mt-[50px] flex flex-col justify-center items-center font-medium p-12'>
      {cartProducts.length!==0 && cartProducts.map((product,index)=>(
        <div className='flex flex-row justify-start items-center my-6'>
        <img src={`http://localhost:8000/api/product/photo/${product.cartProduct._id}`} alt="" className='h-[130px]' />
        <div className='w-[550px] ml-6'>
          <p className='font-bold text-[18px]'>{product.cartProduct.name}</p>
          <p className='overflow-clip h-[50px]'>{product.cartProduct.description}</p>
          <p>⭐⭐⭐</p>
          <p className='mx-4'>$ <span className='font-bold'>{product.cartProduct.price}</span></p>
        </div>
        <button className='h-[35px] w-[100px] bg-red-600 hover:bg-red-700 rounded-lg' onClick={(event)=>{removeItemFremCart(event,product.cartProduct._id)}}>Remove</button>
      </div>
      ))}
      
    </div>
  )
}

export default Cart
