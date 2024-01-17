import React from 'react'
import bg3 from '../Assets/bg3.jpeg'
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
        <img src={bg3} alt="bg1" className="absolute inset-0 z-0 w-full h-auto"/>
        <div className={`w-full bg-slate-800 bg-opacity-70 ${isFixed ? 'fixed' : 'relative'} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 menu`}>
          <h1 className="mb-2 text-4xl font-bold text-center text-white">Savory Delights</h1>

          <label className="px-4 mb-5 leading-normal text-center text-orange-50">
            Welcome to ‘Savory Delights’ - a culinary journey that brings together the finest offerings from land and sea. Our menu features an exquisite selection of dishes, each crafted with passion and precision. Indulge in our succulent **Prawn Cake**, a delightful blend of fresh prawns and aromatic spices, deep-fried to golden perfection. Savor the crispy, juicy goodness of our **Fried Chicken**, marinated in a secret blend of herbs and spices. And don’t miss our assortment of **Sandwiches**, each one a unique combination of fresh ingredients and flavors, nestled between slices of artisan bread. At ‘Savory Delights’, we believe in celebrating the joy of food. Join us and embark on a gastronomic adventure that will tantalize your taste buds and leave you craving for more.
          </label>
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

