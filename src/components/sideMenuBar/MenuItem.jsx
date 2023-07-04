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

export const MenuItem = () => {
  return (
    <motion.li
      variants={variants}
    >
      <motion.label className="ml-[100px] flex my-12 items-center">
      <input type="checkbox" className="mr-6 h-[20px] w-[20px]"/>
      <motion.p
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      className="text-[18px] cursor-pointer mx-4"
      >
        hello</motion.p>
      </motion.label>
    </motion.li>
  );
};


export default MenuItem
