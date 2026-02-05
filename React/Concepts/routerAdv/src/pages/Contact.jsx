import React from "react";
import facebook from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import music from "../assets/music.png";

const Contact = () => {
  return (
    <div className="h-full w-full">
      <h2 className="flex justify-center items-center m-10 font-bold text-2xl underline ">
        CONTACT US
      </h2>
      <div className="flex gap-20 m-15">
        <div className="h-132 w-2xl  relative ">
            <form action="" className="flex flex-col gap-1 font-bold m-5 p-5 ">
              Name:<input type="text" placeholder="Please enter your first name"/>
            {/* Last Name:<input type="text" placeholder="Please enter your last name"/> */}
            Email:<input type="email" placeholder="Please enter your email" />
            Phone:<input type="tel"  placeholder="Please enter your phone"/>
            Message:<textarea rows={5} cols={50} placeholder="Message for us"></textarea>
            <button type="submit"
            className="w-fit p-4 bg-black text-white font-semibold py-3 mt-3 rounded-lg 
         hover:bg-gray-800 transition shadow-md"
            >Send Message</button>
            </form>
          <div className="absolute left-160 w-1 h-105 rounded-4xl m-15 bottom-4 bg-black "></div>
        </div>
        <div className="font-semibold m-15 p-5 flex-col flex gap-5">
          <a className="flex items-center gap-2 h-10 w-10 rounded-b-full">
            <img className="h-8 w-8" src={facebook} />
            facebook.com/deepastudios
          </a>
          <a className="flex items-center gap-2 h-10 w-10 rounded-b-full">
            <img src={insta} className="h-8 w-8" />
            instagram.com/deepastudios
          </a>
          <a className="flex items-center gap-2 h-10 w-10 rounded-b-full">
            <img src={youtube} className="h-8 w-8" />
            youtube.com/deepastudios
          </a>
          <a className="flex items-center gap-2 h-10 w-10 rounded-b-full">
            <img src={twitter} className="h-8 w-8" />
            twitter.com/deepastudios
          </a>
          <a className="flex items-center gap-2 h-10 w-10 rounded-b-full">
            <img src={music} className="h-8 w-8" />
            music.youtube.com/deepastudios
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
