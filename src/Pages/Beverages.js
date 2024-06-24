import React from 'react';
import sub from '../Assets/bbg.jpg';
import MenuItems from './MenuItems';
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import cart from '../Assets/cartIcon.webp';

export default function Beverages() {
  const navigate = useNavigate();
  const category = 'Beverages';


  return (
    <div className="relative w-screen h-screen bg-fixed bg-cover" style={{ backgroundImage: `url(${sub})` }}>
      <img src={logo} alt='logo' className='absolute z-20 h-[50px] w-[170px] top-10 left-10 cursor-pointer' onClick={() => navigate("/")} />

      <div className='relative z-10 w-full h-full px-6 pt-24 pb-10 overflow-auto lg:pt-64'>
        <div className="px-5 py-5 mx-auto mb-4 rounded-lg max-w-8xl bg-slate-800 bg-opacity-80">
          <h1 className="mb-4 text-3xl font-bold text-center text-white md:text-4xl">Beverages</h1>
          <p className="hidden leading-normal text-center md:block text-orange-50">
          Welcome to Luxdine's Beverages Page, where refreshment meets sophistication in every sip. Discover a 
          delightful array of beverages crafted to complement your dining experience. From revitalizing mocktails 
          bursting with fresh fruits and herbs to our curated selection of wines and spirits, each beverage at Luxdine 
          is meticulously prepared to enhance your meal. Whether you're seeking a vibrant mocktail to invigorate your senses 
          or a refined glass of wine to elevate your dining experience, our beverage menu offers something for every palate. 
          Join us at Luxdine to indulge in our distinctive beverages,
           designed to accompany your culinary journey with style and flair.          
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
