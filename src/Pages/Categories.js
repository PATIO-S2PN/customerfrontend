import React from 'react';
import '../App.css';
import chicken from '../Assets/burgers.webp';
import { Link } from 'react-router-dom';
import bg from '../Assets/menu.webp';
import sub from '../Assets/sub.webp';
import pizza from '../Assets/pizza.webp';
import rice from '../Assets/rice1.webp';
import kottu from '../Assets/kottu.webp';
import juice from '../Assets/juice.webp';
import desserts from '../Assets/desserts.webp';

const Categories = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='relative'>
        <img src={bg} alt='menu' className='w-full h-64 sm:h-80 md:h-96 object-cover' />

        <div className='absolute inset-0 flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-0 p-4'
          data-aos='fade-down'
          data-aos-offset='200'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'>
          <div className='w-64 h-32 bg-slate-900 flex flex-col items-center justify-center rounded-2xl transform transition-transform hover:scale-110'>
            <h1 className='font-serif text-xl md:text-2xl font-bold text-orange-50'>Quality Food</h1>
          </div>

          <div className='w-64 h-32 bg-slate-900 flex flex-col items-center justify-center rounded-2xl transform transition-transform hover:scale-110'>
            <h1 className='font-serif text-xl md:text-2xl font-bold text-orange-50'>Original Recipes</h1>
          </div>

          <div className='w-64 h-32 bg-slate-900 flex flex-col items-center justify-center rounded-2xl transform transition-transform hover:scale-110'>
            <h1 className='font-serif text-xl md:text-2xl font-bold text-orange-50'>Quick Process</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-orange-50 py-20 px-4 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-2xl transform transition-shadow hover:shadow-xl flex flex-col items-center justify-center p-4 h-64"
            data-aos='fade-down'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'>
            <Link to="/menuone">
              <img src={chicken} alt="chicken" className="object-contain h-40 mb-4 rounded-2xl" />
            </Link>
            <p className='font-serif text-lg font-bold text-center'>BURGERS</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl transform transition-shadow hover:shadow-xl flex flex-col items-center justify-center p-4 h-64"
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'>
            <img src={sub} alt="sub" className="object-contain h-40 mb-4 rounded-2xl" />
            <p className='font-serif text-lg font-bold text-center'>SUBMARINES</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl transform transition-shadow hover:shadow-xl flex flex-col items-center justify-center p-4 h-64"
            data-aos='fade-down'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'>
            <img src={pizza} alt="pizza" className="object-contain h-40 mb-4 rounded-2xl" />
            <p className='font-serif text-lg font-bold text-center'>PIZZA</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl transform transition-shadow hover:shadow-xl flex flex-col items-center justify-center p-4 h-64"
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'>
            <img src={rice} alt="rice" className="object-contain h-40 mb-4 rounded-2xl" />
            <p className='font-serif text-lg font-bold text-center'>RICE BOWLS</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl transform transition-shadow hover:shadow-xl flex flex-col items-center justify-center p-4 h-64"
            data-aos='fade-down'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'>
            <img src={kottu} alt="kottu" className="object-contain h-40 mb-4 rounded-2xl" />
            <p className='font-serif text-lg font-bold text-center'>KOTTU CORNER</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl transform transition-shadow hover:shadow-xl flex flex-col items-center justify-center p-4 h-64"
            data-aos='fade-up'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'>
            <img src={juice} alt="juice" className="object-contain h-40 mb-4 rounded-2xl" />
            <p className='font-serif text-lg font-bold text-center'>BEVERAGES</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl transform transition-shadow hover:shadow-xl flex flex-col items-center justify-center p-4 h-64"
            data-aos='fade-down'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'>
            <img src={desserts} alt="desserts" className="object-contain h-40 mb-4 rounded-2xl" />
            <p className='font-serif text-lg font-bold text-center'>DESSERTS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories;
