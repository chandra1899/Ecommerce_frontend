import {configureStore } from '@reduxjs/toolkit'
import loginFormReducer from './loginSlice'
import signUpFormReducer from './signupSlice'
import verificationReducer from './verificationSlice'
import sideBarReducer from './sideBarSlice'

const store=configureStore({
    reducer:{
      isEmail:loginFormReducer,
      isVerify:verificationReducer,
      isSignUp:signUpFormReducer,
      isSideOpen:sideBarReducer
    }
});

export default store