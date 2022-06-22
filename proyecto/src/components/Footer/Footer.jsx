import React from 'react'
import { SiZendesk } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { Links } from '../Links/Links'

const Footer = () => {
  return (


    
<footer className="p-4 bg-gray-900 shadow md:px-6 md:py-8 dark:bg-gray-800">
<div className="sm:flex sm:items-center sm:justify-between">
<Link to='/' className="flex items-center mb-4 sm:mb-0 no-underline">
<SiZendesk name="logo-ionic" className='mr-3 h-8 text-indigo-600'/>
<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Custom Your Desk</span>
</Link>


<ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
<li>
  <Link to='/' className="mr-4 hover:underline md:mr-6"> 
    Home
  </Link>
</li>
<li>
  <Link to='/about' className="mr-4 hover:underline md:mr-6"> 
    About
  </Link>
</li>  
{Links.map((link)=>{
  return(
      <li className="mr-4 hover:underline md:mr-6">
      <Link to={link.path}>{link.title}</Link>
      </li>
  )
    })}


</ul>
</div>
<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022  
<Link to='/' className="hover:underline"> Custom Your Desk</Link>. All Rights Reserved.
</span>
</footer>

  )
}

export default Footer