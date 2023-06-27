import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import logo from '../assets/logo.png'

const SignUp = () => {
    const handleKeyEnter1=(e)=>{
        if(e.key=='Enter'){
          formik2.handleSubmit()
        }
       }
    const handleKeyEnter2=(e)=>{
        if(e.key=='Enter'){
          formik2.handleSubmit()
        }
       }
       const submit=()=>{

       }
       const formik1 = useFormik({
        initialValues: {
          name:'',
          email: '',
          password: ''
        },
        validationSchema:Yup.object({
          name:Yup.string()
          .min(6,'name must be min 6 characters')
          .required('required'),
          email:Yup.string()
          .email('Enter valid email')
          .required('required'),
          password:Yup.string()
          .min(6,'password must be min 6 characters')
          .matches(/[0-9]/, 'Password requires a number')
          .matches(/[a-z]/, 'Password requires a lowercase letter')
          .matches(/[A-Z]/, 'Password requires an uppercase letter')
          .matches(/[^\w]/, 'Password requires a symbol')
          .required('required'),
        }),
        onSubmit:submit
      });
      const formik2 = useFormik({
        initialValues: {
          otp:''
        },
        validationSchema:Yup.object({
          otp:Yup.string()
          .min(4,'password must be min 4 characters')
          .matches(/[0-9]/, 'Password requires a number')
          .required('required'),
        }),
        onSubmit:submit
      });
  return (
    <div className='flex flex-col justify-start items-center h-[150vh] w-[100vw] bg-gray-200'>
      <img src={logo} className='h-[100px] w-[100px] ' alt="ecommerce logo" />
      <div className='bg-white h-auto w-[350px] p-8 pt-6 shadow-xl'>
        <p className='font-poppins text-[2.25rem]'>Create Account</p>
       
     <form className='my-4'  onKeyUp={handleKeyEnter1}>
        <label className='flex flex-col'>
          <span className='font-medium'>your Name</span>
          <input 
          type="name"
          name='name'
          value={formik1.values.name}
          onChange={formik1.handleChange}
          onBlur={formik1.handleBlur}
          placeholder="Enter Name"
          className='my-2 border-2 shadow-inner border-gray-500 h-[30px] p-4 px-2 outline-none '
          />
            {formik1.touched.name && formik1.errors.name && <p className={`text-red-700 font-medium text-[0.8rem] ml-1 tracking-widest`}>{formik1.errors.name}</p>}
        </label>
        <label className='flex flex-col'>
          <span className='font-medium'>your Email</span>
          <input 
          type="email"
          name='email'
          value={formik1.values.email}
          onChange={formik1.handleChange}
          onBlur={formik1.handleBlur}
          placeholder="Enter email"
          className='my-2 border-2 shadow-inner border-gray-500 h-[30px] p-4 px-2 outline-none '
          />
            {formik1.touched.email && formik1.errors.email && <p className={`text-red-700 font-medium text-[0.8rem] ml-1 tracking-widest`}>{formik1.errors.email}</p>}
        </label>
        <label className='flex flex-col'>
          <span className='font-medium'>your Password</span>
          <input 
          type="password"
          name='password'
          value={formik1.values.password}
          onChange={formik1.handleChange}
          onBlur={formik1.handleBlur}
          placeholder="Enter password"
          className='my-2 border-2 shadow-inner border-gray-500 h-[30px] p-4 px-2 outline-none '
          />
            {formik1.touched.password && formik1.errors.password && <p className={`text-red-700 font-medium text-[0.8rem] ml-1 tracking-widest`}>{formik1.errors.password}</p>}
        </label>
      </form>
      <p> By enrolling your mobile Email address, you consent to receive automated security notifications via text message from ecommerce. Message and data rates may apply.</p>
     <button className='w-[100%] mt-4 h-[37px] hover:bg-violet-600 font-medium text-[1.1rem] bg-violet-500 rounded-lg' onClick={formik1.handleSubmit}>continue</button>
      </div>
    </div>
  )
}

export default SignUp
