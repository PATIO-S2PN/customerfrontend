import React, { useState } from 'react'
import logo from '../Assets/logonew.svg'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    let Links =[
      {name:"Home",href:"/"},
      {name:"About",href:"#about"},
      {name:"Menu",href:"#categories"},
      {name:"Specials",href:"#specials"},
      {name:"Chefs",href:"#chefs"},
      {name:"Gallery",href:"#gallery"},
      {name:"Contact",href:"#contact"},

    ];
    
    let [open,setOpen]=useState(false);
    
    return (
     <nav className='fixed z-50 w-full '>     
      <div className='fixed left-0 w-full shadow-md top-4'>
        <div className='flex-wrap items-center justify-between bg-transparent md:flex md:px-10 px-7'>
          <a href='/'>
              <img src = {logo} className='w-[170px] h-[50px] curser-pointer'></img>
          </a>
            
          <div onClick={()=>setOpen(!open)} className='absolute text-3xl cursor-pointer right-8 top-6 md:hidden'>
              <ion-icon name={open ? 'close':'menu'}></ion-icon>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
              transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
              {
                  Links.map((link)=>(
                  <li key={link.name} className='text-lg md:ml-8 md:my-0 my-7'>
                  <a href={link.href} className='duration-500 text-gray-50 hover:text-[#E44848] focus:text-[#E44848]' >{link.name}</a>
                  </li>
                  ))
              }
        
          </ul>
          <div className='relative inline-block text-left'>
          <div>
            <FaUser 
              size={25} 
              className='text-white cursor-pointer' 
              onClick={() => setShowDropdown(!showDropdown)}
            />
          </div>
      
            {showDropdown && (
              <div className='absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5'>
                <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                  <Link to='/register' className='block px-4 py-2 text-sm text-orange-50 hover:bg-gray-400 hover:text-gray-900' role='menuitem' onClick={() => setShowDropdown(false)}>
                    Create Account
                  </Link>
                  <Link to='/login' className='block px-4 py-2 text-sm text-orange-50 hover:bg-gray-400 hover:text-gray-900' role='menuitem' onClick={() => setShowDropdown(false)}>
                    Login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>  
  )
}

export default Nav