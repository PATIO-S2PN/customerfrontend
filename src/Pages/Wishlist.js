import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { shoppingBackendUrl, productBackendUrl} from '../config';
import defaultImage from '../Assets/burgers.webp'; 
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import { AddToCart } from './MenuItems'; 

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWishlistItems();
  }, []);

  const fetchWishlistItems = async () => {
    try {
      const token = localStorage.getItem('token');

      const response = await axios.get(`${shoppingBackendUrl}/wishlist`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      setWishlistItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      const token = localStorage.getItem('token');

      await axios.delete(`${shoppingBackendUrl}/wishlist/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      fetchWishlistItems();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <img src={logo} alt='logo' className='absolute z-10 h-[50px] w-[170px] top-10 left-10' onClick={() => navigate("/")} />

      <h1 className="mb-4 text-3xl font-bold">My Wishlist</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wishlistItems.map((item) => (
          <div key={item._id} className="p-4 transition duration-500 ease-in-out transform bg-white rounded-lg shadow-md hover:scale-105">
            <img
              src={item.images && item.images[0] ? `${productBackendUrl}/${item.images[0]}` : defaultImage}
              alt="Product Image"
              className="object-cover w-64 h-64 overflow-hidden rounded-lg aspect-square"
            />
            <h2 className="mt-2 text-lg font-bold">{item.name}</h2>
            <p className="text-gray-500">${item.price}</p>
            <div className="flex flex-col items-center mt-4">
            <AddToCart item={item} />
            <button onClick={() => removeFromWishlist(item._id)} 
                className="px-6 py-2 transition ease-in duration-200 uppercase rounded-lg w-56 bg-orange-600 h-10 hover:border-[#a35959] marker:rounded-full hover:bg-[#542822] hover:text-white border-2 focus:outline-none">
                Remove
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}