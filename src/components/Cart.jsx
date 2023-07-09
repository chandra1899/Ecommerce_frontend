import React, { useEffect, useState } from 'react'
import apple_icon from '../assets/apple_icon.png'
import { useDispatch, useSelector } from 'react-redux'
import {cartNumberAction} from '../store/cartNumberSlice'
import { useNavigate } from 'react-router-dom'
import {cartProductsActions} from '../store/cartProductsSlice'

const Cart = () => {
  const navigate=useNavigate()
  const user=useSelector(state=>state.user.user)
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
          // console.log(event.target);
          event.target.parentElement.parentElement.parentElement.classList.add('hidden');
          console.log(event.target.parentElement);
          dispatch(cartNumberAction.setdec(1))
        }
  }
  const handleCheckOut=async()=>{
    let res= await fetch(`http://localhost:8000/api/stripe/create-checkout-session`,{
          method:'post',
          headers:{
            'Access-Control-Allow-Origin': '*',
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:'include', 
        });
        let data=await res.json();
        if(res.status===200){
          // navigate(data.url)
          window.location.href=data.url
        }
  }
  const getCartProducts=async ()=>{
    let res= await fetch(`http://localhost:8000/api/cart/getProducts`,{
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
          // if(data.products!==undefined)
          dispatch(cartProductsActions.setCartProducts(data.cartProducts))
          dispatch(cartNumberAction.setCartNumber(data.cartProducts.length))
          // setCartProducts(data.cartProducts)
          console.log(data.cartProducts);
        }
  }
  useEffect( () => {
    getCartProducts()
 }, [user]);
  return (
    <div className='mt-[50px] flex flex-col justify-center items-center font-medium p-12'>
      {cartProducts.length!==0 && cartProducts.map((product,index)=>(
        <div className='flex flex-row justify-between items-center my-6'>
        <img src={`http://localhost:8000/api/product/photo/${product.cartProduct._id}`} alt="" className='h-[130px] cursor-pointer' onClick={()=>{navigate(`/product/${product.cartProduct._id}`)}}/>
        <div className='w-[550px] ml-6'>
          <p className='font-bold text-[18px]'>{product.cartProduct.name}</p>
          <p className='overflow-clip h-[50px]'>{product.cartProduct.description}</p>
          <p>⭐⭐⭐</p>
         <div className='flex flex-row justify-start items-center'>
          <div className='flex flex-row justify-around p-4 items-center h-[32px] w-[100px] rounded-r-full rounded-s-full mx-4 border-[1px] border-slate-500'>
            <p className='text-[38px] font-normal mb-3 cursor-pointer'>-</p>
            <p className='text-[18px] font-normal'>1</p>
            <p className='text-[28px] font-normal mb-1 cursor-pointer'>+</p>
          </div>
         <button className='h-[32px] w-[80px] bg-red-600 hover:bg-red-700 rounded-lg my-4' onClick={(event)=>{removeItemFremCart(event,product.cartProduct._id)}}>Remove</button>
         </div>
        </div>
          <p className='mx-4'>$ <span className='font-bold'>{product.cartProduct.price}</span></p>
        
      </div>
      ))}
      <div className='flex flex-row items-center justify-between w-[60vw] mt-12'>
        <p className='text-[28px]'>Sub Total:-$ 99</p>
        <div className='text-white'>
          <button className='h-[35px] rounded-lg bg-pink-700 hover:bg-pink-800 w-[140px] mx-4'>Empty Cart</button>
          <button className='h-[35px] rounded-lg bg-blue-700 hover:bg-blue-800 w-[140px] mx-4' onClick={()=>{handleCheckOut()}}>Checkout</button>
        </div>

      </div>
      
    </div>
  )
}

export default Cart
