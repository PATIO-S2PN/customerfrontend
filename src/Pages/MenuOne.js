import React from 'react';
import bg3 from '../Assets/burgerbgnew.jpg';
import MenuItems from './MenuItems';
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import cart from '../Assets/cartIcon.webp';

export default function MenuOne() {
  const navigate = useNavigate();
  const category = 'Burgers';

  return (
    <div className="relative w-screen h-screen bg-fixed bg-cover" style={{ backgroundImage: `url(${bg3})` }}>
      <img src={logo} alt='logo' className='absolute z-20 h-[50px] w-[170px] top-10 left-10 cursor-pointer' onClick={() => navigate("/")} />

      <div className='relative z-10 w-full h-full px-6 pt-24 pb-10 overflow-auto lg:pt-64'>
        <div className="px-5 py-5 mx-auto mb-4 rounded-lg max-w-8xl bg-slate-800 bg-opacity-80">
          <h1 className="mb-4 text-3xl font-bold text-center text-white md:text-4xl">Burger Delights</h1>
          <p className="hidden leading-normal text-center md:block text-orange-50">
            Welcome to ‘Savory Delights’ - a culinary journey that brings together the finest offerings from land and sea. Our menu features an exquisite selection of dishes, each crafted with passion and precision. Indulge in our succulent **Prawn Cake**, a delightful blend of fresh prawns and aromatic spices, deep-fried to golden perfection. Savor the crispy, juicy goodness of our **Fried Chicken**, marinated in a secret blend of herbs and spices. And don’t miss our assortment of **Sandwiches**, each one a unique combination of fresh ingredients and flavors, nestled between slices of artisan bread. At ‘Savory Delights’, we believe in celebrating the joy of food. Join us and embark on a gastronomic adventure that will tantalize your taste buds and leave you craving for more.
          </p>
        </div>
        <MenuItems category={category}/>
        <div className="fixed z-20 w-12 h-12 overflow-hidden border-4 border-red-800 rounded-full cursor-pointer top-4 right-4 md:top-10 md:right-16">
          <img 
            src={cart} 
            onClick={() => navigate('/cartnew')} 
            alt="Cart" 
            className="object-cover w-full h-full" 
          />
        </div>
      </div>
    </div>
  );
}
