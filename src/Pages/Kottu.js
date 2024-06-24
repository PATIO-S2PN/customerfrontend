import React from 'react';
import sub from '../Assets/kottubg.jpg';
import MenuItems from './MenuItems';
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import cart from '../Assets/cartIcon.webp';

export default function Kottu() {
  const navigate = useNavigate();
  const category = 'Kottu';


  return (
    <div className="relative w-screen h-screen bg-fixed bg-cover" style={{ backgroundImage: `url(${sub})` }}>
      <img src={logo} alt='logo' className='absolute z-20 h-[50px] w-[170px] top-10 left-10 cursor-pointer' onClick={() => navigate("/")} />

      <div className='relative z-10 w-full h-full px-6 pt-24 pb-10 overflow-auto lg:pt-64'>
        <div className="px-5 py-5 mx-auto mb-4 rounded-lg max-w-8xl bg-slate-800 bg-opacity-80">
          <h1 className="mb-4 text-3xl font-bold text-center text-white md:text-4xl">Kottu Corner</h1>
          <p className="hidden leading-normal text-center md:block text-orange-50">
          Welcome to Luxdine's Kottu Page, where tradition meets innovation in every sizzle and stir. Our kottu is a beloved Sri Lankan 
          street food reimagined with a touch of culinary finesse. Savor the rhythmic chopping of vegetables, tender meats, and fragrant 
          spices blended with shredded roti, creating a harmonious medley of flavors and textures. Each plate of kottu at Luxdine is crafted 
          with passion and expertise, ensuring a delightful culinary journey through the heart of Sri Lankan cuisine. Whether you're a first-time
           explorer of Sri Lankan flavors or a seasoned connoisseur, our kottu promises an authentic taste experience that's both comforting and 
           unforgettable. Join us at Luxdine to savor the essence of Sri Lanka's culinary heritage through our 
          signature kottu, where every bite tells a story of tradition and innovation.          </p>
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
