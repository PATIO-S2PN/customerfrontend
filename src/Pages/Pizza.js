import React from 'react';
import pizza from '../Assets/pizzabg.webp';
import MenuItems from './MenuItems';
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import cart from '../Assets/cartIcon.webp';

export default function Pizza() {
  const navigate = useNavigate();
  const category = 'Pizza';

  return (
    <div className="relative w-screen h-screen bg-fixed bg-cover" style={{ backgroundImage: `url(${pizza})` }}>
      <img src={logo} alt='logo' className='absolute z-20 h-[50px] w-[170px] top-10 left-10 cursor-pointer' onClick={() => navigate("/")} />

      <div className='relative z-10 w-full h-full px-6 pt-24 pb-10 overflow-auto lg:pt-64'>
        <div className="px-5 py-5 mx-auto mb-4 rounded-lg max-w-8xl bg-slate-800 bg-opacity-80">
          <h1 className="mb-4 text-3xl font-bold text-center text-white md:text-4xl">Pizza</h1>
          <p className="hidden leading-normal text-center md:block text-orange-50">
          Welcome to Pixxzaza, where taste takes a plunge! Our menu is a deep-sea adventure, featuring succulent Prawn Periscope—a blend of fresh prawns and aromatic spices, deep-fried to golden perfection. Imagine the crispy, juicy goodness of our Torpedo Tenders, marinated in a secret herb-and-spice blend. And don’t miss our unique Seafarer’s Subs, each one a flavor voyage nestled between slices of artisan bread. Anchors aweigh, flavor explorers!          </p>
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
