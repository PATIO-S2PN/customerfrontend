import React from 'react'
import prawnCake from '../Assets/prawn-cake.jpg' 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as Icon from 'react-bootstrap-icons';
import ReactStars from "react-rating-stars-component";
import Chicken from '../Assets/fried-chicken.jpg'


export default function MenuItems() {
  return (
    <div className='flex mt-5 justify-around flex-wrap'>
      <div className='shadow hover:shadow-lg w-64 h-96 mb-4'>
        <div className='flex flex-col'>
            <img className='h-52 w-64 transform transition-all duration-500 hover:scale-110 mb-2' src={prawnCake} alt="Prawn Cake" />
            <label className='text-xl font-bold text-center'>Prawn Cake</label>
            <label className='text-md text-center'>LKR 1200.000</label>
            <div className='justify-center flex'>
                <ReactStars classNames="items-center" count={5} size={24} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
            <div className='flex justify-around'>
                <Button className='shadow w-52 h-10 bg-[#542822] text-xl text-bold text-white rounded-lg'>Add to Cart</Button>
            </div>
        </div>
      </div>
         
      <div className='shadow hover:shadow-lg w-64 h-96'>
        <div className='flex flex-col'>
            <img className='h-52 w-64 transform transition-all duration-500 hover:scale-110 mb-2' src={Chicken} alt="Prawn Cake" />
            <label className='text-xl font-bold text-center'>Fried Chicken</label>
            <label className='text-md text-center'>LKR 1200.000</label>
            <div className='justify-center flex'>
                <ReactStars classNames="items-center" count={5} size={24} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
            <div className='flex justify-around'>
                <Button className='shadow w-52 h-10 bg-[#542822] text-xl text-bold text-white rounded-lg'>Add to Cart</Button>
            </div>
        </div>
      </div> 

      <div className='shadow hover:shadow-lg w-64 h-96'>
        <div className='flex flex-col'>
            <img className='h-52 w-64 transform transition-all duration-500 hover:scale-110 mb-2 rounded-full' src={prawnCake} alt="Prawn Cake" />
            <label className='text-xl font-bold text-center'>Club Sandwich</label>
            <label className='text-md text-center'>LKR 1200.000</label>
            <div className='justify-center flex'>
                <ReactStars classNames="items-center" count={5} size={24} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
            <div className='flex justify-around'>
                <Button className='shadow w-52 h-10 bg-[#542822] text-xl text-bold text-white rounded-lg'>Add to Cart</Button>
            </div>
        </div>
      </div> 

      <div className='shadow hover:shadow-lg w-64 h-96'>
        <div className='flex flex-col'>
            <img className='h-52 w-64 transform transition-all duration-500 hover:scale-110 mb-2' src={prawnCake} alt="Prawn Cake" />
            <label className='text-xl font-bold text-center'>Prawn Cake</label>
            <label className='text-md text-center'>LKR 1200.000</label>
            <div className='justify-center flex'>
                <ReactStars classNames="items-center" count={5} size={24} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
            <div className='flex justify-around'>
                <Button className='shadow w-52 h-10 bg-[#542822] text-xl text-bold text-white rounded-lg'>Add to Cart</Button>
            </div>
        </div>
      </div> 

      <div className='shadow hover:shadow-lg w-64 h-96'>
        <div className='flex flex-col'>
            <img className='h-52 w-64 transform transition-all duration-500 hover:scale-110 mb-2' src={prawnCake} alt="Prawn Cake" />
            <label className='text-xl font-bold text-center'>Prawn Cake</label>
            <label className='text-md text-center'>LKR 1200.000</label>
            <div className='justify-center flex'>
                <ReactStars classNames="items-center" count={5} size={24} color="gray" a11y={true} edit={true} isHalf="true" activeColor="#ffd700"/>
            </div>
            <div className='flex justify-around'>
                <Button className='shadow w-52 h-10 bg-[#542822] text-xl text-bold text-white rounded-lg'>Add to Cart</Button>
            </div>
        </div>
      </div>  
</div>

  )
}
