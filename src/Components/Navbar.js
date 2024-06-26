import React, { useState, useEffect } from 'react';
import logo from '../Assets/logonew.svg';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = ({ backgroundColor, positionClass }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showProfileSubmenu, setShowProfileSubmenu] = useState(false);

    let Links = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Menu", href: "#categories" },
        { name: "Specials", href: "#specials" },
        { name: "Chefs", href: "#chefs" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
        { name: "Profile", href: "#", onClick: () => setShowProfileSubmenu(!showProfileSubmenu), className: "md:hidden" }
    ];

    return (
        <nav style={{ backgroundColor }} className={`fixed ${positionClass} z-50 w-full shadow-md transition-all duration-300`}>
            <div className='flex items-center justify-between px-7 md:px-10'>
                <a href='/'>
                    <img src={logo} alt='logo' className='w-[170px] h-[50px] cursor-pointer' />
                </a>
                <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
                    <MenuIcon style={{ color: 'white' }} />
                </button>
                <ul className={`md:flex md:items-center absolute md:static top-10 md:top-0 right-0 w-auto px-8 md:w-auto transition-all duration-500 ease-in ${isOpen ? 'block' : 'hidden'} bg-[#101E21] md:bg-transparent`}>
                    {Links.map((link) => (
                        <li key={link.name} className={`text-lg md:ml-8 md:my-0 my-7 ${link.className || ''}`}>
                            <a href={link.href} onClick={link.onClick} className='duration-500 text-orange-200 hover:text-[#E44848] focus:text-[#E44848]'>{link.name}</a>
                            {link.name === "Profile" && showProfileSubmenu && (
                                <ul className='mt-2 ml-4'>
                                    <li className='my-2 text-sm'>
                                        <Link to='/register' className='text-orange-200 hover:text-[#E44848] focus:text-[#E44848]'>Create Account</Link>
                                    </li>
                                    <li className='my-2 text-sm'>
                                        <Link to='/login' className='text-orange-200 hover:text-[#E44848] focus:text-[#E44848]'>Login</Link>
                                    </li>
                                    <li className='my-2 text-sm'>
                                        <Link to='/profile' className='text-orange-200 hover:text-[#E44848] focus:text-[#E44848]'>Profile</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <div className='relative hidden inline-block text-left md:block'>
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
                                <Link to='/profile' className='block px-4 py-2 text-sm text-orange-50 hover:bg-gray-400 hover:text-gray-900' role='menuitem' onClick={() => setShowDropdown(false)}>
                                    Profile
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
