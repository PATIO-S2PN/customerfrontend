import React from 'react'
import bg1 from '../Assets/bg1.jpg'
import MenuItems from './MenuItems'
import { useState, useEffect } from 'react';

export default function MenuOne() {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const img = document.querySelector('img');
      const imgRect = img.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
  
      if (imgRect.bottom <= viewportHeight / 2) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className='flex flex-col items-between'>
      <div className="relative h-screen mb-5">
        <img src={bg1} alt="bg1" className="absolute inset-0 z-0 w-full h-auto"/>
        <div className={`w-full h-16 bg-white ${isFixed ? 'fixed' : 'relative'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 menu`}>
          <h1 className="text-4xl font-bold text-center text-black">Menu</h1>
        </div>
      </div>
      <div className='mt-20'>
        <MenuItems/>
        <MenuItems/>
        <MenuItems/>
      </div>
    </div>
  )
}

