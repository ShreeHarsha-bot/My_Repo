import React from "react";
import { easeIn, easeInOut, easeOut, motion } from "motion/react";

const App = () => {
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
            delay:3,
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
            delay:3,
          ease:easeInOut
        }}
        src="https://static.vecteezy.com/system/resources/thumbnails/052/924/279/small/a-cartoon-boy-running-in-the-air-png.png" alt="" />
      </div>
      <motion.img 
      initial={{
        x:500,
        y:-1000
      }}
      animate={{
        x:440,
        y:-200
      }}
      transition={{
       duration:3,
         delay:3
      }}
      src="https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUyYmF5dWZta29lYmNmOHo0dnJzcjBxM2Y0a29lanlxYXVveGh1Y3hyNiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/h2MouomJFCpMfWVfUj/source.gif" alt="" />
     <motion.img 
     initial={{
      x:800,y:-400
     }}
     animate={{
      x:800,
      y:-100
     }}
     src="https://media.indiedb.com/cache/images/groups/1/19/18016/thumb_620x2000/2584719-iron_man_animated.1.gif" alt="" />
      </div>
  );
};

export default App;
