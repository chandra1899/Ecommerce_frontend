import React from 'react'
import close from '../assets/close.svg'
import { useSelector,useDispatch} from 'react-redux'
import { sideBar } from '../store/sideBarSlice'

const SideBar = () => {
    const isSideOpen=useSelector((state)=>state.isSideOpen.isSideOpen)
    const dispatch=useDispatch()
  return (
    <div className={`h-[100vh] ${isSideOpen?'w-[350px]':'w-0'} fixed transition-all duration-300 ease-in-out text-white bg-black-gradient z-[11]`}>
      <img src={close} alt="close" className='right-4 top-4 absolute cursor-pointer' onClick={()=>{dispatch(sideBar.setFalse())}}/>
    </div>
  )
}

export default SideBar