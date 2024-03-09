import React from 'react'
import bg3 from '../Assets/burgerBg.jpg'
import MenuItems from './MenuItems'

export default function MenuOne() {
  
  return (
    <div className="w-screen h-screen bg-fixed" style={{ backgroundImage: `url(${bg3})` }}>
      <div className='z-10 h-screen px-4 pt-64 pb-10 overflow-auto'>
        <div className="px-5 py-5 rounded-lg bg-slate-800">
          <h1 className="mb-2 text-4xl font-bold text-center text-white">Burger Delights</h1>
          <label className="leading-normal text-center text-orange-50">
            Welcome to ‘Savory Delights’ - a culinary journey that brings together the finest offerings from land and sea. Our menu features an exquisite selection of dishes, each crafted with passion and precision. Indulge in our succulent **Prawn Cake**, a delightful blend of fresh prawns and aromatic spices, deep-fried to golden perfection. Savor the crispy, juicy goodness of our **Fried Chicken**, marinated in a secret blend of herbs and spices. And don’t miss our assortment of **Sandwiches**, each one a unique combination of fresh ingredients and flavors, nestled between slices of artisan bread. At ‘Savory Delights’, we believe in celebrating the joy of food. Join us and embark on a gastronomic adventure that will tantalize your taste buds and leave you craving for more.
          </label>
          
        </div>
          <MenuItems/>
      </div>
    </div>
  )
}
