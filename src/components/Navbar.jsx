import React from 'react'
import menu from '../assets/menu.svg'
import { useSelector,useDispatch} from 'react-redux'
import { sideBar } from '../store/sideBarSlice'

const Navbar = () => {
  const isSideOpen=useSelector((state)=>state.isSideOpen.isSideOpen)
  const dispatch=useDispatch()

  return (
    <div className='w-[100vw] h-[50px] fixed top-0 text-white bg-blue-600 flex items-center px-2'>
      <img src={menu} alt="menu" className='h-[35px] w-[35px] cursor-pointer' onClick={()=>{dispatch(sideBar.toggle())}}/>
    </div>
  )
}

export default Navbar
