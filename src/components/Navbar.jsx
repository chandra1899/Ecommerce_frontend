import React from 'react'
import menu from '../assets/menu.svg'
import { useSelector,useDispatch} from 'react-redux'
import { sideBar } from '../store/sideBarSlice'
import search from '../assets/search.png'
import cart from '../assets/cart.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  const isSideOpen=useSelector((state)=>state.isSideOpen.isSideOpen)
  const dispatch=useDispatch()

  return (
    <div className='w-[100vw] h-[50px] fixed top-0 text-white bg-black flex items-center justify-around px-2 z-10'>
      <img src={menu} alt="menu" className='h-[35px] w-[35px] cursor-pointer' onClick={()=>{dispatch(sideBar.toggle())}}/>
      <p>Home</p>
      <p>Address</p>

      <div className='h-[75%] w-[33%] flex flex-row'>
      <input type="text" className='h-[100%] w-[80%] p-2 px-4 text-black outline-none' placeholder='Search in ecommerce'/>
      <div className='h-[100%] w-[45px] bg-green-600 hover:bg-green-700 cursor-pointer flex justify-center items-center'>
        <img src={search} alt="search-icon" className='h-[80%]' />
      </div>
      </div>

      <p className='font-medium text-[1.45rem] cursor-pointer flex flex-wrap hover:border-2 hover:border-white justify-center items-center p-2 h-[100%] w-[140px]' onClick={()=>{navigate('/login')}}>Hello, sign-in accounts</p>

      <p className='font-medium text-[1.45rem] cursor-pointer flex flex-wrap hover:border-2 hover:border-white justify-center items-center p-2 h-[100%] w-[120px]'>Returns<span className='font-bold'>& orders</span></p>

      <div className='relative w-[100px] cursor-pointer flex h-[100%] hover:border-2 hover:border-white justify-center items-center'>
        <span className='absolute top-0 flex justify-center items-center right-2 h-[50%] bg-red-600 text-white rounded-full p-2'>3</span>
        <img src={cart} alt="cart-icon" className='h-[80%]' />
      </div>

    </div>
  )
}

export default Navbar
