import React from 'react'
import prawnCake from '../Assets/prawn-cake.jpg' 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as Icon from 'react-bootstrap-icons';
import ReactStars from "react-rating-stars-component";
import Chicken from '../Assets/fried-chicken.jpg'
import Sandwiches from '../Assets/sandwiches.jpg'
import Macaroni from '../Assets/macaroni.jpg'
import Bagels from '../Assets/bagels.jpg'

export default function MenuItems() {
  return (
    <div className='flex flex-wrap justify-around mt-5'>
      <div className='w-64 mb-4 shadow hover:shadow-lg h-96'>
        <div className='flex flex-col'>
            <img className='w-64 mb-2 transition-all duration-500 transform h-52 hover:scale-110' src={prawnCake} alt="Prawn Cake" />
            <label className='text-xl font-bold text-center'>Prawn Cake</label>
            <label className='text-center text-md'>LKR 1200.000</label>
            <div className='flex justify-center'>
                <ReactStars classNames="items-center" count={5} size={24} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
            <div className='flex justify-around'>
              <button
                  class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full w-52 bg-[#ddd7d6] h-10 hover:border-[#a35959] marker:rounded-full hover:bg-[#542822] hover:text-white border-2 border-gray-900 focus:outline-none">Add
                to cart
              </button>            
            </div>
        </div>
      </div>
         
      <div className='w-64 shadow hover:shadow-lg h-96'>
        <div className='flex flex-col'>
            <img className='w-64 mb-2 transition-all duration-500 transform h-52 hover:scale-110' src={Chicken} alt="Prawn Cake" />
            <label className='text-xl font-bold text-center'>Fried Chicken</label>
            <label className='text-center text-md'>LKR 1200.000</label>
            <div className='flex justify-center'>
                <ReactStars classNames="items-center" count={5} size={24} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
            <div className='flex justify-around'>
              <button
                  class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full w-52 bg-[#ddd7d6] h-10 hover:border-[#a35959] marker:rounded-full hover:bg-[#542822] hover:text-white border-2 border-gray-900 focus:outline-none">Add
                to cart
              </button>            
            </div>
        </div>
      </div> 

      <div className='w-64 shadow hover:shadow-lg h-96'>
        <div className='flex flex-col'>
            <img className='w-64 mb-2 transition-all duration-500 transform h-52 hover:scale-110' src={Sandwiches} alt="Prawn Cake" />
            <label className='text-xl font-bold text-center'>Sandwiches</label>
            <label className='text-center text-md'>LKR 1200.000</label>
            <div className='flex justify-center'>
                <ReactStars classNames="items-center" count={5} size={24} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
            <div className='flex justify-around'>
            <button
                  class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full w-52 bg-[#ddd7d6] h-10 hover:border-[#a35959] marker:rounded-full hover:bg-[#542822] hover:text-white border-2 border-gray-900 focus:outline-none">Add
                to cart
            </button>
            </div>
        </div>
      </div> 

      <div className='w-64 shadow hover:shadow-lg h-96'>
        <div className='flex flex-col'>
            <img className='w-64 mb-2 transition-all duration-500 transform h-52 hover:scale-110' src={Macaroni} alt="Prawn Cake" />
            <label className='text-xl font-bold text-center'>Macaroni</label>
            <label className='text-center text-md'>LKR 1200.000</label>
            <div className='flex justify-center'>
                <ReactStars classNames="items-center" count={5} size={24} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
            <div className='flex justify-around'>
              <button
                  class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full w-52 bg-[#ddd7d6] h-10 hover:border-[#a35959] marker:rounded-full hover:bg-[#542822] hover:text-white border-2 border-gray-900 focus:outline-none">Add
                to cart
              </button>
            </div>
        </div>
      </div> 

      <div className='w-64 shadow hover:shadow-lg h-96'>
        <div className='flex flex-col'>
            <img className='w-64 mb-2 transition-all duration-500 transform h-52 hover:scale-110' src={Bagels} alt="Prawn Cake" />
            <label className='text-xl font-bold text-center'>Potato Bagels</label>
            <label className='text-center text-md'>LKR 1200.000</label>
            <div className='flex justify-center'>
                <ReactStars classNames="items-center" count={5} size={24} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
            <div className='flex justify-around'>
              <button
                  class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full w-52 bg-[#ddd7d6] h-10 hover:border-[#a35959] marker:rounded-full hover:bg-[#542822] hover:text-white border-2 border-gray-900 focus:outline-none">Add
                to cart
              </button>            
            </div>
        </div>
      </div>  
</div>

  )
}
