import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({name,index}) => {
  return (
   <>
    {name!=='border' ? <motion.li
      variants={variants}
    >
      <motion.label className={`${name==='All products'?'ml-[30px]':'ml-[60px]'}  flex my-6 items-center`}>
      <input type="checkbox" className={`mr-6 ${name==='All products'?'h-[17px] w-[17px]':'h-[15px] w-[15px]'} `}/>
      <motion.p
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      className={`${name==='All products'?'text-[17px] my-3':'text-[15px]'} cursor-pointer w-[100px] mx-4`}
      >
        {name}</motion.p>
      </motion.label>
    </motion.li>:
    <div >
<span className=" mx-[30px]">

</span>
    </div>
    }
   </>
  );
};


export default MenuItem
