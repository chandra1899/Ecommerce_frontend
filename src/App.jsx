import React from 'react'
import { Login ,Home,SignUp,Navbar,Verification,SideBar,Cart,Orders,AdminPanel,CreateProductForm} from './components';
import {
  Routes,
  Route
} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import {createProductForm} from './store/createProductSlice'

const App = () => {
  const location=useLocation()
  const dispath=useDispatch();
    const isCreateProductOpen=useSelector(state=>state.isCreateProductFormOpen.isCreateProductOpen)
    const handleBackDrop=()=>{
      dispath(createProductForm.setFalse());
    }

  return (
    <div className='relative z-0'>
     {location.pathname!=='/login' && location.pathname!=='/signup' && location.pathname!=='/verification' && <Navbar/>}
     <CreateProductForm/>
     {(isCreateProductOpen) && <div className='bg-gray-900 absolute bg-opacity-70 -mt-52  h-[170vh] w-[150vw] z-[39] ' onClick={handleBackDrop}></div>}
      <Routes >
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<SignUp/>} />
        <Route exact path='/verification' element={<Verification/>} />
        <Route exact path='/cart' element={<Cart/>} />
        <Route exact path='/orders' element={<Orders/>} />
        <Route exact path='/admin' element={<AdminPanel/>} />
      </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App
