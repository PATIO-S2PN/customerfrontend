import React, { useState } from 'react'
import logo from '../Assets/logonew.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Nav = () => {
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
     <nav className='fixed z-50 w-full'>     
      <div className='fixed left-0 w-full shadow-md top-4'>
        <div className='items-center justify-between bg-gray-800 md:flex md:px-10 px-7'>
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
                  <a href={link.href} className='duration-500 text-gray-50 hover:text-[#E44848]'>{link.name}</a>
                  </li>
                  ))
              }
        
          </ul>
          <div className='flex felx-col'>
              <FontAwesomeIcon icon="fa-light fa-user" /> 
          </div>
        </div>
      </div>
    </nav>  
  )
}

export default Nav