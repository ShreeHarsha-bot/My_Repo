import React from 'react'
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import music from "../assets/music.png";

const Foot1 = () => {
  return (
    <div>
       <div className=' w-50 flex justify-center gap-x-5 mt-3 '>
        <a className='hover:scale-85 cursor-pointer'>
            <img src={facebook}/>
        </a>
        <a className='hover:scale-135 cursor-pointer'>
            <img src={insta}/>
        </a>
        <a className='hover:scale-85 cursor-pointer'>
            <img src={youtube}/>
        </a>
        <a className='hover:scale-135 cursor-pointer'>
            <img src={twitter}/>
        </a>
        <a className='hover:scale-85 cursor-pointer'>
            <img src={music}/>
        </a>
       </div>
    </div>
  )
}

export default Foot1
