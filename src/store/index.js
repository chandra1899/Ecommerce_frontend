import {configureStore } from '@reduxjs/toolkit'
import loginFormReducer from './loginSlice'
import signUpFormReducer from './signupSlice'
import verificationReducer from './verificationSlice'
import sideBarReducer from './sideBarSlice'
import createProductFormReducer from './createProductSlice'
import userReducer from './user'
import cartProductReducer from './cartProductsSlice'
import cartNumberReducer from './cartNumberSlice'

const store=configureStore({
    reducer:{
      isEmail:loginFormReducer,
      isVerify:verificationReducer,
      isSignUp:signUpFormReducer,
      isSideOpen:sideBarReducer,
      isCreateProductFormOpen:createProductFormReducer,
      user:userReducer,
      cartProducts:cartProductReducer,
      cartNumber:cartNumberReducer
    }
});

export default store