import React from 'react'
import { easeIn, easeInOut, easeOut, motion, scale } from "motion/react";


const Drag = () => {
  return (
    <div>
      <motion.div className="box1" 
      drag
      whileDrag={{
            scale:2
        }}
      dragConstraints={{
        left:0,
        // right:0,
        top:0,
        bottom:0
      }}
      >
      
      </motion.div>
    </div>
  )
}

export default Drag
