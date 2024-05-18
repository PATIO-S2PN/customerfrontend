import React from 'react'
import '../App.css'
import chicken from '../Assets/burgers.png'
import { Link } from 'react-router-dom';
import logo from '../Assets/logonew.svg';
import bg from '../Assets/menu.jpg'
import qlogo from '../Assets/qlogo.png'

const Categories = () => {
  return (
    <div className='flex-row felx'> 
        <div className='relative'>
            <img src={bg} alt='menu' className='w-screen h-[400px]' />

            <div className='absolute inset-0 flex items-center justify-around'
            data-aos='fade-down'
            data-aos-offset = '200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing = 'ease-in-out'>
           <div className='w-[300px] h-[150px] bg-slate-900 flex-col flex items-center justify-center rounded-2xl transform transition-transform hover:scale-110'>
                <h1 className='font-serif text-2xl font-bold text-orange-50'>Quality Food</h1>
            </div>



            <div className='w-[300px] h-[150px] bg-slate-900 flex-col flex items-center justify-center rounded-2xl transform transition-transform hover:scale-110'>
                <h1 className='font-serif text-2xl font-bold text-orange-50'>Original Recipies</h1>
            </div>
            
            <div className='w-[300px] h-[150px] bg-slate-900 flex-col flex items-center justify-center rounded-2xl transform transition-transform hover:scale-110'>
                <h1 className='font-serif text-2xl font-bold text-orange-50'>Quick Process</h1>
            </div>


            </div>
        </div>

        <div className="flex flex-col m-auto bg-orange-50 p-auto">          
            <div className="flex items-center py-12 overflow-x-scroll hide-scroll-bar">
                <div className="flex ml-10 flex-nowrap lg:ml-40 md:ml-20 ">
                <div className="inline-block px-3 ">
                    <div className="flex flex-col items-center justify-center w-64 h-64 max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out bg-white shadow-md rounded-xl hover:shadow-xl"
                        data-aos='fade-down'
                        data-aos-offset = '200'
                        data-aos-delay='50'
                        data-aos-duration='1000'
                        data-aos-easing = 'ease-in-out'>
                            <Link to="/menuone">
                                    <img src={chicken} alt="chicken" className="object-cover mb-4 w-36 h-36"/>
                            </Link>
                            <p className='font-serif text-xl font-bold text-center'>BURGERS</p>
                    </div>
                </div>
                <div className="inline-block px-3 ">
                    <div className="flex flex-col items-center justify-center w-64 h-64 max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out bg-white shadow-md rounded-xl hover:shadow-xl"
                        data-aos='fade-up'
                        data-aos-offset = '200'
                        data-aos-delay='50'
                        data-aos-duration='1000'
                        data-aos-easing = 'ease-in-out'>
                            <img src={chicken} alt="chicken" className="object-cover mb-4 w-36 h-36"/>
                            <p className='font-serif text-xl font-bold text-center'>SUBMARINES</p>
                    </div>
                </div>
                <div className="inline-block px-3 ">
                    <div className="flex flex-col items-center justify-center w-64 h-64 max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out bg-white shadow-md rounded-xl hover:shadow-xl"
                     data-aos='fade-down'
                     data-aos-offset = '200'
                     data-aos-delay='50'
                     data-aos-duration='1000'
                     data-aos-easing = 'ease-in-out'>
                            <img src={chicken} alt="chicken" className="object-cover mb-4 w-36 h-36"/>
                            <p className='font-serif text-xl font-bold text-center'>PIZZA</p>
                    </div>
                </div>
                <div className="inline-block px-3 ">
                    <div className="flex flex-col items-center justify-center w-64 h-64 max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out bg-white shadow-md rounded-xl hover:shadow-xl"
                     data-aos='fade-up'
                     data-aos-offset = '200'
                     data-aos-delay='50'
                     data-aos-duration='1000'
                     data-aos-easing = 'ease-in-out'>
                            <img src={chicken} alt="chicken" className="object-cover mb-4 w-36 h-36"/>
                            <p className='font-serif text-xl font-bold text-center'>RICE BOWLS</p>
                    </div>
                </div>
                <div className="inline-block px-3 ">
                    <div className="flex flex-col items-center justify-center w-64 h-64 max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out bg-white shadow-md rounded-xl hover:shadow-xl"
                     data-aos='fade-down'
                     data-aos-offset = '200'
                     data-aos-delay='50'
                     data-aos-duration='1000'
                     data-aos-easing = 'ease-in-out'>
                            <img src={chicken} alt="chicken" className="object-cover mb-4 w-36 h-36"/>
                            <p className='font-serif text-xl font-bold text-center'>KOTTU CORNER</p>
                    </div>
                </div>
                <div className="inline-block px-3 ">
                    <div className="flex flex-col items-center justify-center w-64 h-64 max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out bg-white shadow-md rounded-xl hover:shadow-xl"
                     data-aos='fade-up'
                     data-aos-offset = '200'
                     data-aos-delay='50'
                     data-aos-duration='1000'
                     data-aos-easing = 'ease-in-out'>
                            <img src={chicken} alt="chicken" className="object-cover mb-4 w-36 h-36"/>
                            <p className='font-serif text-xl font-bold text-center'>BEVERAGES</p>
                    </div>
                </div>
                <div className="inline-block px-3 ">
                    <div className="flex flex-col items-center justify-center w-64 h-64 max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out bg-white shadow-md rounded-xl hover:shadow-xl"
                     data-aos='fade-down'
                     data-aos-offset = '200'
                     data-aos-delay='50'
                     data-aos-duration='1000'
                     data-aos-easing = 'ease-in-out'>
                            <img src={chicken} alt="chicken" className="object-cover mb-4 w-36 h-36"/>
                            <p className='font-serif text-xl font-bold text-center'>BEVERAGES</p>
                    </div>
                </div>
                <div className="inline-block px-3 ">
                    <div className="flex flex-col items-center justify-center w-64 h-64 max-w-xs overflow-hidden transition-shadow duration-300 ease-in-out bg-white shadow-md rounded-xl hover:shadow-xl"
                     data-aos='fade-up'
                     data-aos-offset = '200'
                     data-aos-delay='50'
                     data-aos-duration='1000'
                     data-aos-easing = 'ease-in-out'>
                            <img src={chicken} alt="chicken" className="object-cover mb-4 w-36 h-36"/>
                            <p className='font-serif text-xl font-bold text-center'>BEVERAGES</p>
                    </div>
                </div>   
                </div>
            </div>
        </div>    
    </div>
        
  )
}

export default Categories
