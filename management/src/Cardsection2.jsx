import React from 'react'
import card1 from "../src/assets/card1.png";
import card2 from "../src/assets/card2.png";
import card3 from "../src/assets/card3.png";




function Cardsection2() {
  return (
    <div className='mx-auto px-16 py-11'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 items-center shadow-lg group relative transition-transform hover:scale-105 duration-500">
                <div className='py-8'>
                <img src={card1} alt="" className='mx-auto'/>
                <p className="text-center">Easy Appointment</p>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam?
                </p>

                </div>

            </div>
            <div className="border rounded-lg p-4 items-center shadow-lg group relative transition-transform hover:scale-105 duration-500">
                <div className='py-8'>
                <img src={card2} alt="" className='mx-auto'/>
                <p className="text-center">Easy Appointment</p>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam?
                </p>

                </div>

            </div>
            <div className="border rounded-lg p-4 items-center shadow-lg group relative transition-transform hover:scale-105 duration-500">
                <div className='py-8'>
                <img src={card3} alt="" className='mx-auto'/>
                <p className="text-center">Easy Appointment</p>
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam?
                </p>

                </div>

            </div>
            

        </div>
      
    </div>
  )
}

export default Cardsection2