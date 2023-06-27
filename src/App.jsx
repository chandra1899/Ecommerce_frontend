import React from 'react'
import { Login ,Home,SignUp,Navbar,Verification} from './components';
import {
  Routes,
  Route
} from "react-router-dom";
import { useLocation } from 'react-router-dom';

const App = () => {
  const location=useLocation()
  return (
    <div>
     {location.pathname!=='/login' && location.pathname!=='/signUp' && location.pathname!=='/verification' && <Navbar/>}
      <Routes >
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signUp' element={<SignUp/>} />
        <Route exact path='/verification' element={<Verification/>} />
      </Routes>
    </div>
  )
}

export default App
