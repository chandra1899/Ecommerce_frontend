import React from 'react'
import menu from '../assets/menu.svg'
import { useSelector,useDispatch} from 'react-redux'
import { sideBar } from '../store/sideBarSlice'
import search from '../assets/search.png'
import cart from '../assets/cart.png'
import address from '../assets/address.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  const isSideOpen=useSelector((state)=>state.isSideOpen.isSideOpen)
  const dispatch=useDispatch()

  return (
    <div className='w-[100vw] h-[50px] fixed top-0 text-white bg-black flex items-center justify-around px-2 z-10'>
      <img src={menu} alt="menu" className='h-[35px] w-[34px] cursor-pointer hover:border-2 hover:border-white' onClick={()=>{dispatch(sideBar.toggle())}}/>
      <div className='font-medium  cursor-pointer flex flex-wrap hover:border-2 hover:border-white justify-center items-center p-2 h-[100%] w-[100px] text-[18px]' onClick={()=>{navigate('/')}}>E-comerce</div>
      <div className='flex flex-row h-[90%] px-4 w-[190px] cursor-pointer hover:border-2 hover:border-white'>
       <div className=' flex justify-center items-end -mt-3'> 
       <img src={address} className='h-[20px] w-[20px] ' alt="address-icon" />
       </div>
        <div>
          <p className='opacity-80 text-[15px]'>Hello</p>
          <p className='font-medium -mt-1'>select your address</p>
        </div>
      </div>

      <div className='h-[75%] w-[33%] flex flex-row'>
      <input type="text" className='h-[100%] w-[80%] p-2 px-4 text-black outline-none' placeholder='Search in ecommerce'/>
      <div className='h-[100%] w-[45px] bg-green-600 hover:bg-green-700 cursor-pointer flex justify-center items-center'>
        <img src={search} alt="search-icon" className='h-[80%]' />
      </div>
      </div>

      <p className='font-medium text-[1.45rem] cursor-pointer flex flex-wrap hover:border-2 hover:border-white justify-center items-center p-2 h-[100%] w-[140px]' onClick={()=>{navigate('/login')}}>Hello, sign-in accounts</p>

      <p className='font-medium text-[1.45rem] cursor-pointer flex flex-wrap hover:border-2 hover:border-white justify-center items-center p-2 h-[100%] w-[120px]' onClick={()=>{navigate('/orders')}}>Returns<span className='font-bold'>& orders</span></p>

      <div className='relative w-[100px] cursor-pointer flex h-[100%] hover:border-2 hover:border-white justify-center items-center' onClick={()=>{navigate('/cart')}}>
        <span className='absolute top-0 flex justify-center items-center right-2 h-[50%] bg-red-600 text-white rounded-full p-2'>3</span>
        <img src={cart} alt="cart-icon" className='h-[80%]' />
      </div>

    </div>
  )
}

export default Navbar
