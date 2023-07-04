import React from 'react'
import {Tilt} from 'react-tilt'
import {fadeIn,textVariant} from '../utils/motion'
import {motion} from 'framer-motion'
import { SectionWrapper } from '../hoc'
import apple_icon from '../assets/apple_icon.png'
import dress_icon from '../assets/dress_icon.png'
import earPod_icon from '../assets/earPod_icon.png'
import headPhone_icon from '../assets/headPhone_icon.png'
import shoe_icon from '../assets/shoe_icon.png'
import watch_icon from '../assets/watch_icon.png'

const product1=['boys','girls','men'];
const HomeSection_2 = () => {
  return (
    <div className='w-[100%] bg-dimWhite h-auto p-10 my-4 py-15'>
      <div className='flex flex-wrap m-3 justify-around items-center mb-16 mt-10'>
      <motion.div variants={textVariant()} className='text-[18px] font-medium flex flex-col justify-center items-start'>
        <p>Electronics</p>
        <p>$ <span className='font-bold'>99</span></p>
        <p>⭐⭐⭐</p>
        <Tilt>
            <div
             options={{
                max:45,
                scale:1,
                speed:45
              }}
            >
        <img src={apple_icon} alt="" className='h-[230px] w-[230px] object-contain'/>
            </div>
        </Tilt>
        <button className='h-[35px] rounded-lg text-[17px] px-4 w-auto p-2 text-black bg-green-600 hover:bg-green-700 my-4 mx-auto'>Add To Bucket</button>
      </motion.div>
      <motion.div variants={textVariant()} className='text-[18px] font-medium flex flex-col justify-center items-start'>
        <p>Electronics</p>
        <p>$ <span className='font-bold'>99</span></p>
        <p>⭐⭐⭐</p>
        <Tilt>
            <div
             options={{
                max:45,
                scale:1,
                speed:45
              }}
            >
        <img src={earPod_icon} alt="" className='h-[230px] w-[230px] object-contain'/>
            </div>
        </Tilt>
        <button className='h-[35px] rounded-lg text-[17px] px-4 w-auto p-2 text-black bg-green-600 hover:bg-green-700 my-4 mx-auto'>Add To Bucket</button>
      </motion.div>
      <motion.div variants={textVariant()} className='text-[18px] font-medium flex flex-col justify-center items-start'>
        <p>Electronics</p>
        <p>$ <span className='font-bold'>99</span></p>
        <p>⭐⭐⭐</p>
        <Tilt>
            <div
             options={{
                max:45,
                scale:1,
                speed:45
              }}
            >
        <img src={headPhone_icon} alt="" className='h-[230px] w-[230px] object-contain'/>
            </div>
        </Tilt>
        <button className='h-[35px] rounded-lg text-[17px] px-4 w-auto p-2 text-black bg-green-600 hover:bg-green-700 my-4 mx-auto'>Add To Bucket</button>
      </motion.div>
      </div>

      <div className='flex flex-wrap justify-around items-center mb-16'>
      <motion.div variants={textVariant()} className='text-[18px] font-medium flex flex-col justify-center items-start'>
        <p>Electronics</p>
        <p>$ <span className='font-bold'>99</span></p>
        <p>⭐⭐⭐</p>
        <Tilt>
            <div
             options={{
                max:45,
                scale:1,
                speed:45
              }}
            >
        <img src={shoe_icon} alt="" className='h-[230px] w-[230px] object-contain'/>
            </div>
        </Tilt>
        <button className='h-[35px] rounded-lg text-[17px] px-4 w-auto p-2 text-black bg-green-600 hover:bg-green-700 my-4 mx-auto'>Add To Bucket</button>
      </motion.div>
      <motion.div variants={textVariant()} className='text-[18px] font-medium flex flex-col justify-center items-start'>
        <p>Electronics</p>
        <p>$ <span className='font-bold'>99</span></p>
        <p>⭐⭐⭐</p>
        <Tilt>
            <div
             options={{
                max:45,
                scale:1,
                speed:45
              }}
            >
        <img src={watch_icon} alt="" className='h-[230px] w-[230px] object-contain'/>
            </div>
        </Tilt>
        <button className='h-[35px] rounded-lg text-[17px] px-4 w-auto p-2 text-black bg-green-600 hover:bg-green-700 my-4 mx-auto'>Add To Bucket</button>
      </motion.div>
      <motion.div variants={textVariant()} className='text-[18px] font-medium flex flex-col justify-center items-start'>
        <p>Electronics</p>
        <p>$ <span className='font-bold'>99</span></p>
        <p>⭐⭐⭐</p>
        <Tilt>
            <div
             options={{
                max:45,
                scale:1,
                speed:45
              }}
            >
        <img src={dress_icon} alt="" className='h-[230px] w-[230px] object-contain'/>
            </div>
        </Tilt>
        <button className='h-[35px] rounded-lg text-[17px] px-4 w-auto p-2 text-black bg-green-600 hover:bg-green-700 my-4 mx-auto'>Add To Bucket</button>
      </motion.div>
      </div>
      </div>
  )
}

// export default HomeSection_2
export default SectionWrapper(HomeSection_2,"HomeSection_2")
