import {configureStore } from '@reduxjs/toolkit'
import loginFormReducer from './loginSlice'
import verificationReducer from './verificationSlice'

const store=configureStore({
    reducer:{
      isEmail:loginFormReducer,
      isVerify:verificationReducer
    }
});

export default store