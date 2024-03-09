import React from 'react'
import '../App.css'
import chicken from '../Assets/burgers.png'
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
        <div class="flex flex-col bg-orange-50 m-auto p-auto">   
            <div class="flex overflow-x-scroll items-center hide-scroll-bar py-12">
                <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
                <div class="inline-block px-3 ">
                    <div class="w-64 h-64 max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-center items-center">
                            <Link to="/menuone">
                                    <img src={chicken} alt="chicken" class="w-36 h-36 object-cover mb-4"/>
                            </Link>
                            <p className='font-serif text-xl font-bold text-center'>BURGERS</p>
                    </div>
                </div>
                <div class="inline-block px-3 ">
                    <div class="w-64 h-64 max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-center items-center">
                            <img src={chicken} alt="chicken" class="w-36 h-36 object-cover mb-4"/>
                            <p className='font-serif text-xl font-bold text-center'>SUBMARINES</p>
                    </div>
                </div>
                <div class="inline-block px-3 ">
                    <div class="w-64 h-64 max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-center items-center">
                            <img src={chicken} alt="chicken" class="w-36 h-36 object-cover mb-4"/>
                            <p className='font-serif text-xl font-bold text-center'>PIZZA</p>
                    </div>
                </div>
                <div class="inline-block px-3 ">
                    <div class="w-64 h-64 max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-center items-center">
                            <img src={chicken} alt="chicken" class="w-36 h-36 object-cover mb-4"/>
                            <p className='font-serif text-xl font-bold text-center'>RICE BOWLS</p>
                    </div>
                </div>
                <div class="inline-block px-3 ">
                    <div class="w-64 h-64 max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-center items-center">
                            <img src={chicken} alt="chicken" class="w-36 h-36 object-cover mb-4"/>
                            <p className='font-serif text-xl font-bold text-center'>KOTTU CORNER</p>
                    </div>
                </div>
                <div class="inline-block px-3 ">
                    <div class="w-64 h-64 max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-center items-center">
                            <img src={chicken} alt="chicken" class="w-36 h-36 object-cover mb-4"/>
                            <p className='font-serif text-xl font-bold text-center'>BEVERAGES</p>
                    </div>
                </div>
                <div class="inline-block px-3 ">
                    <div class="w-64 h-64 max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-center items-center">
                            <img src={chicken} alt="chicken" class="w-36 h-36 object-cover mb-4"/>
                            <p className='font-serif text-xl font-bold text-center'>BEVERAGES</p>
                    </div>
                </div>
                <div class="inline-block px-3 ">
                    <div class="w-64 h-64 max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-center items-center">
                            <img src={chicken} alt="chicken" class="w-36 h-36 object-cover mb-4"/>
                            <p className='font-serif text-xl font-bold text-center'>BEVERAGES</p>
                    </div>
                </div>   
                </div>
            </div>
        </div>    
  )
}

export default Categories
