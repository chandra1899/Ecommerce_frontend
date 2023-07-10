import React, { useEffect, useState } from 'react'
import apple_icon from '../assets/apple_icon.png'
import { useDispatch, useSelector } from 'react-redux'
import {cartNumberAction} from '../store/cartNumberSlice'
import {cartProductsActions} from '../store/cartProductsSlice'
import CartProduct from './CartProduct'
import {subTotalActions} from '../store/subTotalSlice'

const Cart = () => {
  
  const user=useSelector(state=>state.user.user)
  const cartProducts=useSelector(state=>state.cartProducts.cartProducts)
 const dispatch=useDispatch()
 const subTotal=useSelector(state=>state.subTotal.subTotal)
 
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
  const setSubTotal=()=>{
    let total=0;
    cartProducts.map((product)=>{
        total+=product.quantity*product.cartProduct.price
    })
    dispatch(subTotalActions.setSubTotal(total))
  }
  useEffect( () => {
    getCartProducts()
    setSubTotal()
 }, [user]);
  return (
    <div className='mt-[50px] flex flex-col justify-center items-center font-medium p-12'>
      {cartProducts.length!==0 && cartProducts.map((product,index)=>(
        <CartProduct product={product} index={index}/>
      ))}
      <div className='flex flex-row items-center justify-between w-[60vw] mt-12'>
        <p className='text-[28px]'>Sub Total:-$ {subTotal}</p>
        <div className='text-white'>
          <button className='h-[35px] rounded-lg bg-pink-700 hover:bg-pink-800 w-[140px] mx-4'>Empty Cart</button>
          <button className='h-[35px] rounded-lg bg-blue-700 hover:bg-blue-800 w-[140px] mx-4' onClick={()=>{handleCheckOut()}}>Checkout</button>
        </div>

      </div>
      
    </div>
  )
}

export default Cart
