import React from 'react';
import sub from '../Assets/dessetsbg.jpg';
import MenuItems from './MenuItems';
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import cart from '../Assets/cartIcon.webp';

export default function Desserts() {
  const navigate = useNavigate();
  const category = 'Desserts';


  return (
    <div className="relative w-screen h-screen bg-fixed bg-cover" style={{ backgroundImage: `url(${sub})` }}>
      <img src={logo} alt='logo' className='absolute z-20 h-[50px] w-[170px] top-10 left-10 cursor-pointer' onClick={() => navigate("/")} />

      <div className='relative z-10 w-full h-full px-6 pt-24 pb-10 overflow-auto lg:pt-64'>
        <div className="px-5 py-5 mx-auto mb-4 rounded-lg max-w-8xl bg-slate-800 bg-opacity-80">
          <h1 className="mb-4 text-3xl font-bold text-center text-white md:text-4xl">Desserts</h1>
          <p className="hidden leading-normal text-center md:block text-orange-50">
          Welcome to Luxdine's Desserts Page, where indulgence meets artistry. Our dessert menu is a symphony of sweet delights crafted to 
          satisfy every craving and elevate your dining experience. From decadent cakes adorned with seasonal fruits to creamy tiramisu 
          delicately layered with espresso-infused mascarpone, each dessert at Luxdine is a masterpiece in its own right. Dive into our 
          assortment of handcrafted pastries, where every bite unveils a symphony of flavors, textures, and a touch of culinary magic. 
          Whether you're celebrating a special occasion or simply treating yourself, Luxdine's desserts promise a delightful conclusion to 
          your meal, leaving you craving for more. Discover the perfect ending to your dining 
          journey with Luxdine's exquisite desserts, where each bite is a moment of pure indulgence.          </p>
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
