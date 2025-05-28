import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { NavLink } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Collection', path: '/collection' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
 
];

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <img src={assets.logo} className='w-36' alt="Logo" />
      
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        {navItems.map((item, index) => (
          <NavLink 
            key={index}
            to={item.path}
            className='flex flex-col items-center gap-1'
            
            activeClassName='text-black' 
          >
            <p>{item.name}</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
          </NavLink>
        ))}
      </ul>

         
         <div className='flex items-center gap-6'>
             <img src={assets.search_icon} className='cursor-pointer  w-5 ' alt="" />

             <div className='group relative'>
                <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
             
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>

                   <div className='flex flex-col gap-2  w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                     <p className="cursor-pointer hover:text-black"> My Profile</p>
                     <p className="cursor-pointer hover:text-black"> Order</p>
                     <p className="cursor-pointer hover:text-black"> Logout</p>
                   </div>
                </div>
             </div>
         </div>



    </div>
  );
};

export default Navbar;





 
