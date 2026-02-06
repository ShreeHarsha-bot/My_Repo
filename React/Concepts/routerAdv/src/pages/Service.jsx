import React from "react";
import Rent1 from "./Rent1";
import CameraRent from "./CameraRent";
import LensRent from "./LensRent";
import EquipRent from "./EquipRent";

const Service = () => {
  const CamRent = [
    {
      img2: "https://www.paramvah.com/images/services/CameraRental/AlexaSXT/AlexaSXT5.jpg",
      desc2: "ALEXA SXT EV",
    },
    {
      img2: "https://www.paramvah.com/images/services/CameraRental/MasterPrimelenses/MasterPrimelenses.jpg",
      desc2: "MASTER PRIME LENS",
    },
    {
      img2: "https://www.paramvah.com/images/services/CameraRental/REDGemini5K/RED-DSMC2-Gemini-2.jpg",
      desc2: "RED GEMINI 5K",
    },
  ];
  const Lens=[
    {img3:"https://www.paramvah.com/images/services/CameraRental/MasterPrimelenses/16mmLarge.jpg",desc3:"16MM"},
    {img3:"https://www.paramvah.com/images/services/CameraRental/MasterPrimelenses/25mmLarge.jpg",desc3:"25MM"},
    {img3:"https://www.paramvah.com/images/services/CameraRental/MasterPrimelenses/25mmLarge.jpg",desc3:"35MM"},
    {img3:"https://www.paramvah.com/images/services/CameraRental/MasterPrimelenses/25mmLarge.jpg",desc3:"50MM"},
    {img3:"https://www.paramvah.com/images/services/CameraRental/MasterPrimelenses/25mmLarge.jpg",desc3:"75MM"},
    {img3:"https://www.paramvah.com/images/services/CameraRental/MasterPrimelenses/100mmLarge.jpg",desc3:"100MM"}
  ];
  const EqRent=[
    {img4:"https://www.paramvah.com/images/services/EquipmentRental/Panther-1.jpg",desc4:"PANTHER"},
    {img4:"https://www.paramvah.com/images/services/EquipmentRental/Gimbal.jpg",desc4:"GIMBAL"},
    {img4:"https://www.paramvah.com/images/services/EquipmentRental/Panther-2.jpg",desc4:"PANTHER"}
  ];

  return (
    <div>
      <h2 className="flex justify-center items-center mt-15 font-bold underline text-2xl">
        SERVICE
      </h2>
      <div className="flex justify-center">
        <Rent1
          img="https://assets.videomaker.com/2020/03/lens-rental-los-angeles.jpg"
          rentTitle="CAMERA RENTAL SERVICE"
          desc1="FOR MORE QUERIES CONTACT GURU"
          cont1="(+919876543212)"
        />
        <Rent1
          img="https://t3.ftcdn.net/jpg/02/79/67/00/360_F_279670083_6Q2SmbCUEYU3ucziI2trGspNIApgzB2v.jpg"
          rentTitle="Equipment Rental"
          desc1="FOR MORE QUERIES CONTACT Harish"
          cont1="(+918765432101)"
        />
        <Rent1
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3i817U6LvunNJ7OdgBu8HbS_MNPqWOK59PQ&s"
          rentTitle="Post Production "
          desc1="FOR MORE QUERIES CONTACT Rohith"
          cont1="(+918073290614)"
        />
      </div>
      <h2 className="text-center text-2xl font-semibold bg-white  underline p-2 ">CAMERA RENTAL SERVICES</h2>
      <div className="flex justify-center bg-white w-screen flex-wrap ">
       {CamRent.map((camera,index)=>(
        <CameraRent key={index} data={camera}/>
       ))}
      </div>
      <h2 className="text-center text-2xl font-medium  bg-gray-300 pt-5">MASTER PRIME LENS</h2>
      <div className="flex justify-center bg-gray-300  w-screen ">
       {Lens.map((lens,index)=>(
        <LensRent key={index} data={lens}/>
       ))}
      </div>
      <h2 className="text-center text-2xl font-medium underline bg-white pt-5">EQUIPMENT RENTAL SERVICE</h2>
      <div className="flex justify-center bg-white gap-20  w-screen ">
          {EqRent.map((Equip,index)=>(
        <EquipRent key={index} data={Equip}/>
       ))}
      </div>
    </div>
  );
};

export default Service;
