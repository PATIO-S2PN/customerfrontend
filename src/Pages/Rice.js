import React from 'react';
import rice from '../Assets/ricebg.jpg';
import MenuItems from './MenuItems';
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import cart from '../Assets/cartIcon.webp';

export default function Rice() {
  const navigate = useNavigate();
  const category = 'Rice';


  return (
    <div className="relative w-screen h-screen bg-fixed bg-cover" style={{ backgroundImage: `url(${rice})` }}>
      <img src={logo} alt='logo' className='absolute z-20 h-[50px] w-[170px] top-10 left-10 cursor-pointer' onClick={() => navigate("/")} />

      <div className='relative z-10 w-full h-full px-6 pt-24 pb-10 overflow-auto lg:pt-64'>
        <div className="px-5 py-5 mx-auto mb-4 rounded-lg max-w-8xl bg-slate-800 bg-opacity-80">
          <h1 className="mb-4 text-3xl font-bold text-center text-white md:text-4xl">Rice Bowls</h1>
          <p className="hidden leading-normal text-center md:block text-orange-50">
          Rice bowls are a versatile and hearty dish, perfect for any meal of the day. At Luxdine, our rice bowls feature a delightful combination of fluffy, perfectly cooked rice topped with a 
          variety of fresh, flavorful ingredients. Whether you prefer savory meats, vibrant vegetables, or a mix of both, our rice bowls are crafted to offer a satisfying and balanced dining experience. Each bowl is a fusion of textures and tastes, designed to provide a nourishing and delicious meal that celebrates the richness of our culinary traditions. Come and enjoy a wholesome, comforting rice bowl at Luxdine, where every bite is a treat for your senses.          </p>
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
