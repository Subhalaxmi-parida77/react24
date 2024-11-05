import React from 'react'

function Header() {
  return (
    <div className="bg-white flex h-[5rem] justify-between items-center p-10 shadow-md">
        <div className="">
            <img className="w-20" src="../src/assets/logo.jpg" alt="logo" />
        </div>
        <div className="flex gap-8">
            <p className=''>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Team</p>
            <p>Gallery</p>
            <p>Testimonial</p>
            <p>Blog</p>
            <p>Contact</p>
        </div>
    </div>
    
  )
}

export default Header