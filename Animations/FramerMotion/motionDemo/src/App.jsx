import React from "react";
import { easeIn, easeInOut, easeOut, motion } from "motion/react";
import SpiderMan from "./Practice/SpiderMan";
import Drag from "./Practice/Drag";

const App = () => {
  return (
    <div>
   {/* <SpiderMan/>      */}        {/*Spiderman hanging animation*/}
   <Drag/>
    </div>
  );
};

export default App;
