import '../order.css'
import React, { useState } from 'react'
import downarrow from '../assets/downarrow.png'

const OrderItem = ({order}) => {
    const [productOpen,setProductOpen]=useState(false)
  return (
    <div className='w-[95vw] my-6 bg-slate-300'>
    <table  className='border-2 border-slate-500'>
  <thead className='border-2 border-black h-[50px]'>
    <th>#PaymentIntentId</th>
    <th>customerId</th>
    <th>Delivery Status</th>
    <th>payment through</th>
    <th>Payment Status</th>
    <th>mobile</th>
  </thead>
  <tbody className='font-medium'>
  <tr className='h-[50px]'>
    <td><p className='bg-violet-400 rounded-l-full rounded-r-full w-[80%] font-medium text-violet-800'>#{order.paymentIntentId}</p></td>
    <td><p>{order.customerId}</p></td>
    <td ><p className='bg-orange-300 rounded-l-full rounded-r-full w-[80%] font-medium text-orange-700'>{order.delivery_status}</p></td>
    <td><p>{order.paymentBy}</p></td>
    <td ><p className='bg-green-400 rounded-l-full rounded-r-full w-[80%] font-medium text-green-800'>{order.payment_status}</p></td>
    <td><p>{order.mobile}</p></td>
  </tr>
  </tbody>
  <tfoot >
    <td colSpan='6'>
    <div className='h-[35px] hover:bg-slate-300 cursor-pointer w-[95vw] flex justify-center items-center font-bold border-t-2 border-slate-500' onClick={()=>{setProductOpen((pre)=>!pre)}}><p>Products</p>
    <img src={downarrow} alt="" className='mx-4'/>
    </div>
    <div className={`${productOpen?"h-[100px]":'h-0'} w-[95vw] bg-red-600 transition-all duration-300 ease-in-out`}>
    </div>
    </td>
  </tfoot>
</table>
      
    </div>
  )
}

export default OrderItem
