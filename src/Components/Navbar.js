import React, { useState } from 'react';
import logo from '../Assets/logonew.svg';
import { Link } from 'react-router-dom';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [open, setOpen] = useState(false); // State for mobile menu toggle

  const Links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#categories" },
    { name: "Specials", href: "#specials" },
    { name: "Chefs", href: "#chefs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className='fixed z-50 w-full'>
      <div className='fixed left-0 w-full shadow-md top-4'>
        <div className='flex md:items-left sm:items-left justify-between bg-transparent px-7'>
          <a href='/'>
<<<<<<< HEAD
            <img src={logo} className='w-[170px] h-[50px] cursor-pointer' alt='logo' />
=======
              <img src = {logo} alt='logo' className='w-[170px] h-[50px] curser-pointer'></img>
>>>>>>> ff22bf3d51f0f97c57f075cc56016e39b98dc55b
          </a>

          {/* Mobile menu toggle icon */}
          <div onClick={() => setOpen(!open)} className='text-3xl md:text-left cursor-pointer md:hidden' style={{ color: '#FFCF87' }}>
            {open ? <FaTimes /> : <FaBars />}
          </div>

<<<<<<< HEAD

          {/* Mobile User dropdown */}
            {showDropdown2 && (
              <div className='absolute left-20 top-10 gap-5 w-48 mt-2 origin-top-right rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 z-50'>
                <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                  <Link to='/register' className='block px-4 py-2 text-sm text-orange-50 hover:bg-gray-400 hover:text-gray-900' role='menuitem' onClick={() => setShowDropdown2(false)}>
                    Create Account
                  </Link>
                  <Link to='/login' className='block px-4 py-2 text-sm text-orange-50 hover:bg-gray-400 hover:text-gray-900' role='menuitem' onClick={() => setShowDropdown2(false)}>
                    Login
                  </Link>
                  <Link to='/logout' className='block px-4 py-2 text-sm text-orange-50 hover:bg-gray-400 hover:text-gray-900' role='menuitem' onClick={() => setShowDropdown2(false)}>
                    Logout
                  </Link>
                </div>
              </div>
            )}

          {/* Navigation Links */}
          <ul className={`md:flex md:items-left md:pb-0 pb-12 absolute md:static md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
            <li >
            <div className='md:hidden'>
              <FaUser
                size={25}
                style={{ color: 'white' }}
                className='cursor-pointer'
                onClick={() => setShowDropdown2(!showDropdown2)}
              />
            </div>
            </li>
            {Links.map((link) => (
              <li key={link.name} className='text-lg md:ml-8 md:my-0 my-7'>
                <a href={link.href} className='duration-500 text-gray-50 hover:text-[#E44848] focus:text-[#E44848]'>{link.name}</a>
              </li>
            ))}
=======
          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
              transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
              {
                  Links.map((link)=>(
                  <li key={link.name} className='text-lg md:ml-8 md:my-0 my-7'>
                  <a href={link.href} className='duration-500 text-orange-200 hover:text-[#E44848] focus:text-[#E44848]' >{link.name}</a>
                  </li>
                  ))
              }
        
>>>>>>> ff22bf3d51f0f97c57f075cc56016e39b98dc55b
          </ul>

          {/* Desktop User dropdown */}
          <div className='relative inline-block text-left md:block hidden'>
            <div>
              <FaUser
                size={25}
                style={{ color: 'white' }}
                className='cursor-pointer'
                onClick={() => setShowDropdown(!showDropdown)}
              />
            </div>

            {showDropdown && (
              <div className='absolute right-2 w-48 mt-2 origin-top-right rounded-md shadow-lg bg-slate-800 ring-1 ring-black ring-opacity-5 z-50'>
                <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
                  <Link to='/register' className='block px-4 py-2 text-sm text-orange-50 hover:bg-gray-400 hover:text-gray-900' role='menuitem' onClick={() => setShowDropdown(false)}>
                    Create Account
                  </Link>
                  <Link to='/login' className='block px-4 py-2 text-sm text-orange-50 hover:bg-gray-400 hover:text-gray-900' role='menuitem' onClick={() => setShowDropdown(false)}>
                    Login
                  </Link>
<<<<<<< HEAD
                  <Link to='/logout' className='block px-4 py-2 text-sm text-orange-50 hover:bg-gray-400 hover:text-gray-900' role='menuitem' onClick={() => setShowDropdown(false)}>
                    Logout
=======
                  <Link to='/profile' className='block px-4 py-2 text-sm text-orange-50 hover:bg-gray-400 hover:text-gray-900' role='menuitem' onClick={() => setShowDropdown(false)}>
                    Profile
>>>>>>> ff22bf3d51f0f97c57f075cc56016e39b98dc55b
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
