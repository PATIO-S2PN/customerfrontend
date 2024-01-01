import React from 'react'
import bg1 from '../Assets/bg1.jpg'
import MenuItems from './MenuItems'

export default function MenuOne() {
  return (
    <div className='flex flex-col items-between'>
      <div class="relative h-screen">
            <img src={bg1} alt="bg1" class="absolute inset-0 w-full h-auto z-0"/>
            <div class="w-full h-16 bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 class="text-4xl text-center text-black font-bold">Menu</h1>
            </div>
      </div>
      <div className='mt-5'>
            <MenuItems/>
      </div>


    </div>
  )
}

