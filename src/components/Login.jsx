import React from 'react'
import logo from '../assets/logo.png'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  const submit=()=>{

  }
  const formik=useFormik({
    initialValues:{
      email:''
    },
    validationSchema:Yup.object({
      email:Yup.string()
        .email('Enter valid email')
        .required('required'),
    }),
    onSubmit:submit
  })
  const handleKeyEnter=(e)=>{
    if(e.key=='Enter'){
      formik.handleSubmit()
    }
   }
  return (
    <>
    <div className='flex flex-col justify-start items-center h-[100vh] w-[100vw] bg-gray-200'>
      <img src={logo} className='h-[100px] w-[100px] ' alt="ecommerce logo" />
      <div className='bg-white h-auto w-[350px] p-8 pt-6 shadow-xl'>
        <p className='font-poppins text-[2.25rem]'>Login</p>
      <form className='my-4'  onKeyUp={handleKeyEnter}>
        <label className='flex flex-col'>
          <span className='font-medium'>your Email</span>
          <input 
          type="email"
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter email"
          className='my-2 border-2 border-gray-500 h-[30px] p-4 px-2 outline-none '
          />
            {formik.touched.email && formik.errors.email && <p className={`text-red-700 font-medium text-[0.8rem] ml-1 tracking-widest`}>{formik.errors.email}</p>}
        </label>
      </form>
      <button className='w-[100%] -my-2 h-[37px] hover:bg-violet-600 font-medium text-[1.1rem] bg-violet-500 rounded-lg'>continue</button>
      </div>
        <p className='my-9 font-poppins opacity-75'>--------- &nbsp; New to ecommerce &nbsp;---------</p>
     <button className='w-[350px] bg-white shadow-xl hover:bg-slate-100 h-[35px]' onClick={()=>{navigate('/signUp')}}>Create account</button>
    </div>
    </>
  )
}

export default Login
