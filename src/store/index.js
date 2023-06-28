import {configureStore } from '@reduxjs/toolkit'
import loginFormReducer from './loginSlice'
import signUpFormReducer from './signupSlice'
import verificationReducer from './verificationSlice'

const store=configureStore({
    reducer:{
      isEmail:loginFormReducer,
      isVerify:verificationReducer,
      isSignUp:signUpFormReducer
    }
});

export default store