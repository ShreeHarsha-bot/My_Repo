import React from 'react'
import { easeIn, easeInOut, easeOut, motion } from "motion/react";


const SpiderMan = () => {
  return (
    <div>
       <div>
        <motion.img
          animate={{
            x: 250,
            y: 350,
          }}
          transition={{
            duration: 2,
            delay:2.5,
            ease:easeInOut,
          }}
          src="https://static.vecteezy.com/system/resources/previews/048/799/740/non_2x/female-athlete-in-action-young-fitness-sportive-girl-in-sports-uniform-running-free-png.png"
        />
        <motion.img 
        initial={{
          x:600
        }}
        animate={{
          y:300,
          x:300
        }}
        transition={{
          duration:2,
          // repeat:Infinity,
            delay:2.5,
          ease:easeInOut
        }}
        src="https://static.vecteezy.com/system/resources/thumbnails/052/924/279/small/a-cartoon-boy-running-in-the-air-png.png" alt="" />
      </div>
     <div>
       <motion.img 
      initial={{
       x:440,
       y:-700

      }}
      animate={{
      x:440,
       y:[-700,-190,-300,-195,-305,-210,-310,-215,-315,-220,-320,-225,-325,-230,-700],

      }}
      transition={{
       duration:7,
         delay:3,
        // repeat:Infinity

      }}
     
      src="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyYmF5dWZta29lYmNmOHo0dnJzcjBxM2Y0a29lanlxYXVveGh1Y3hyNiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/h2MouomJFCpMfWVfUj/source.gif" alt="" />
     
     </div>
    </div>
  )
}

export default SpiderMan
