import React from 'react';
import sub from '../Assets/subbg.webp';
import MenuItems from './MenuItems';
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import cart from '../Assets/cartIcon.webp';

export default function Submarines() {
  const navigate = useNavigate();
  const category = 'Submarines';


  return (
    <div className="relative w-screen h-screen bg-fixed bg-cover" style={{ backgroundImage: `url(${sub})` }}>
      <img src={logo} alt='logo' className='absolute z-20 h-[50px] w-[170px] top-10 left-10 cursor-pointer' onClick={() => navigate("/")} />

      <div className='relative z-10 w-full h-full px-6 pt-24 pb-10 overflow-auto lg:pt-64'>
        <div className="px-5 py-5 mx-auto mb-4 rounded-lg max-w-8xl bg-slate-800 bg-opacity-80">
          <h1 className="mb-4 text-3xl font-bold text-center text-white md:text-4xl">Submarine Savories</h1>
          <p className="hidden leading-normal text-center md:block text-orange-50">
          Welcome aboard ‘Submarine Savories’, where taste meets the tides! Our menu takes you on a deep-sea voyage, exploring the finest offerings from land and sea. Indulge in our succulent Prawn Periscope, savor the crispy goodness of our Torpedo Tenders, and choose your course among our unique Seafarer’s Subs. Anchors aweigh, flavor explorers!
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
