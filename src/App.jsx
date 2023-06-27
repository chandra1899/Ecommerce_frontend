import React from 'react'
import { Login ,Home,SignUp,Navbar} from './components';
import {
  Routes,
  Route
} from "react-router-dom";
import { useLocation } from 'react-router-dom';

const App = () => {
  const location=useLocation()
  return (
    <div>
     {location.pathname!=='/login' && location.pathname!=='/signUp' && <Navbar/>}
      <Routes >
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signUp' element={<SignUp/>} />
      </Routes>
    </div>
  )
}

export default App
