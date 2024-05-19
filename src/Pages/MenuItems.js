import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
import defaultImage from '../Assets/burgers.png'; // Adjust the import path as necessary

export default function MenuItems() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://18.234.113.85/');
        setMenuItems(response.data.products);

        

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    
    getProducts();
  }, []);

  // Base URL of your backend server
  // const baseUrl = "http://localhost:8002/images/";

  return (
    <div className='grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-orange-50'>
      {menuItems.map((item, index) => (
        <div key={item._id} className='w-64 m-2 bg-white shadow hover:shadow-lg h-96'>
          <div className='flex flex-col'>
          <img 
            className='w-64 mb-2 transition-all duration-500 transform h-52 hover:scale-110' 
            // src={item.images && item.images[0] ? `${baseUrl}${item.images[0].replace(/\\/g, '/')}` : defaultImage}
            src={item.images && item.images[0] ? `http://18.234.113.85/${item.images[0]}` : defaultImage}

            alt={item.name} 
          />

            <label className='text-xl font-bold text-center'>{item.name}</label>
            <label className='text-center text-md'>LKR {item.price}.000</label>
            <div className='flex justify-center'>
              <ReactStars 
                classNames="items-center" 
                count={5} 
                size={24} 
                color="gray" 
                a11y={true} 
                edit={true} 
                isHalf={true} 
                activeColor="#ffd700" 
                value={item.rating || 0}
              />
            </div>
            <div className='flex justify-around'>
              <button
                className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full w-52 bg-[#ddd7d6] h-10 hover:border-[#a35959] marker:rounded-full hover:bg-[#542822] hover:text-white border-2 border-gray-900 focus:outline-none"
              >
                Add to cart
              </button>            
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}