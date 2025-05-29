import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = (props) => {
  return (
    <div>
      <div className='flex flex-col sm:grid sm:grid-cols-3 gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} alt="Logo" className='mb-5 w-32' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-500'>
            {/* 
            props.navItems.map((item,index) =>(
              <li key={index} className='cursor-pointer hover:text-black'>{item.name}</li>
            )) 
            */}
            <li className='cursor-pointer hover:text-black'>Home</li>
            <li className='cursor-pointer hover:text-black'>Shop</li>
            <li className='cursor-pointer hover:text-black'>About</li>
            <li className='cursor-pointer hover:text-black'>Contact</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>Get In Touch</p>
          <ul className='flex flex-col gap-2 text-gray-500'>
            <li>Address: Tamil Nadu, India</li>
            <li>Phone: +91 98987 86767</li>
            <li>Email: test@gmail.com</li>
          </ul>
        </div>
        <hr />
        <p className='py-5 text-center text-sm'>Copyright &copy; 2023. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
