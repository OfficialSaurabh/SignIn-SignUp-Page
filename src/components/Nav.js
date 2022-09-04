import React from 'react'
import Logo from "../img/Logo_nav.svg";


function Nav() {
  return (
    <div className='sticky top-0 z-50'>
        <div className="w-full  bg-gray-900 py-3 flex justify-between items-center text-white px-5">
            <img src={Logo} alt="" />
            <a href="/" className=""><button className=' bg-secondary-color px-5 py-2 rounded-lg text-white'>Sign In</button></a>
        </div>
    </div>
  )
}

export default Nav