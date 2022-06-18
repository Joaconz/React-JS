import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { BiMenu } from 'react-icons/bi';
import { SiZendesk } from 'react-icons/si';
import { Links } from "../Links/Links";
import DropDown from "./DropDown";


function NavBar() {
  const [open, setOpen] = useState(false);

  

  return (
    <header className="sticky top-0 z-50 mb-10">
      <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <Link to='/' className="no-underline">
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 no-underline'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <SiZendesk name="logo-ionic"></SiZendesk>
        </span>
        Custom Your Desk
      </div>
      </Link>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <BiMenu name={open ? 'close':'menu'}></BiMenu>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        <li key='Home' className='md:ml-8 text-xl md:my-0 my-7'>
        <Link to='/' className='text-gray-800 hover:text-gray-400 duration-500 	no-underline'>
                Home
              </Link>
        </li>

        <li key='About' className='md:ml-8 text-xl md:my-0 my-7'>
        <Link to='/about' className='text-gray-800 hover:text-gray-400 duration-500	no-underline'>
                About
              </Link>
        </li>

        <li key='products' className='md:ml-8 text-xl md:my-0 my-7'>
          <DropDown/>
        </li>

        {
          Links.map((link)=>(
            <li key={link.title} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.path} className='text-gray-800 hover:text-gray-400 duration-500 	no-underline'>
                {link.title}
              </Link>
            </li>
          ))
          }
        
        <li> 
        <CartWidget />
        </li>
      </ul>
      </div>
      </div>
    </header>

  
  );
}

export default NavBar;
