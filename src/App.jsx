import React from 'react'
import { Login ,Home,SignUp,Navbar,Verification,SideBar} from './components';
import {
  Routes,
  Route
} from "react-router-dom";
import { useLocation } from 'react-router-dom';

const App = () => {
  const location=useLocation()
  return (
    <div>
     {location.pathname!=='/login' && location.pathname!=='/signup' && location.pathname!=='/verification' && <Navbar/>}
     <SideBar/>
      <Routes >
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<SignUp/>} />
        <Route exact path='/verification' element={<Verification/>} />
      </Routes>
    </div>
  )
}

export default App
