import React, { useEffect } from 'react'
import { Login ,Home,SignUp,Navbar,Verification,Cart,Orders,AdminPanel,CreateProductForm} from './components';
import {
  Routes,
  Route
} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import {createProductForm} from './store/createProductSlice'
import {userState} from './store/user'

const App = () => {
  const location=useLocation()
  const dispatch=useDispatch();
  const user=useSelector(state=>state.user.user)
    const isCreateProductOpen=useSelector(state=>state.isCreateProductFormOpen.isCreateProductOpen)
    const handleBackDrop=()=>{
      dispatch(createProductForm.setFalse());
    }
    const calluser=async ()=>{
      try {
        // setLoading(true)
        let res= await fetch(`http://localhost:8000/api/user/getuser`,{
          method:'GET',
          // mode: 'no-cors',
          headers:{
            'Access-Control-Allow-Origin': '*',
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:'include', 
        });
        let data=await res.json();
        // setLoading(false)
        // console.log(res.status);
        if(res.status===200){
          dispatch(userState.setUser(data.can));
          console.log(data.can);
      }
      else{
        dispatch(userState.unsetUser());
      }
      } catch (err) {
       
      }
    }
    useEffect( () => {
       calluser();
    }, []);

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
