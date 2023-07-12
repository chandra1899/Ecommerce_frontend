import React, { useEffect, useState } from 'react'
import {OrderItem} from '.'

const Orders = () => {
  const [orders,setOrders]=useState([])
  const getOrders=async ()=>{
    let res= await fetch(`http://localhost:8000/api/order/getorders`,{
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
      setOrders(data.orders)
      console.log(data.orders);
    }
  }
  useEffect(()=>{
    getOrders()
  },[])
  return (
    <div className='mt-[60px] flex flex-col justify-center items-center'>
      {orders.map((order)=>(
       <OrderItem order={order}/>
      ))}
    </div>
  )
}

export default Orders
