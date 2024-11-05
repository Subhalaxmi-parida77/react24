import React from "react";
import T1 from "../src/assets/T1.png";
import Doctor from "../src/assets/Doctor.png";
import Womanbrush from "../src/assets/Womanbrush.png";
const Herosection = () => {
    return(
        <div className="bg-blue-600 w-full h-[30rem] flex items-center justify-between px-20 ">
           <div className="my-5">
            <h2 className="text-[2rem] text-white font-semibold ">Better Life Through</h2>
            <p className="text-[3rem] text-white font-semibold">Better Dentistry</p>
            <p className="text-[0.7rem] text-white font-bold w-[30rem] mt-4">Join us a fun a friendly dental enviroment. Our Professionals are warking so<br></br>
            her to see mile on your face that you deserve! We are dedicated about our<br></br> duties.</p>
            </div>
            <div className="">
           <img src={T1}alt=""  />          
           <div className='absolute right-72 top-96 animate-bounce'>
           <img src={Doctor}alt=""  /> 
           <div className='absolute right-72 top-96 animate-bounce'>
           <img src={Womanbrush}alt=""  />  
           </div>
           </div>
            </div>
        </div>
    )
}
export default Herosection