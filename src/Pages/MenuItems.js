import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
import { useNavigate } from 'react-router-dom';
import defaultImage from '../Assets/burgers.png'; 
import Swal from 'sweetalert2';

function showToast(status, message) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#fff7ed',
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  Toast.fire({
    icon: status,
    title: message
  });
}

const AddToCart = ({ item }) => {
  const [cartDetails, setCartDetails] = useState({
    product_id: item._id,
    qty: '1'
  });

  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login'); 
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCartDetails({ ...cartDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const token = localStorage.getItem('token');

      const response = await axios.post('http://34.224.26.99/shopping/cart', cartDetails, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        },
      });
      showToast('success', 'One Item is added to cart!');
      console.log(response.data); 
    } catch (error) {
      console.error(error); 
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className="px-6 py-2 transition ease-in duration-200 uppercase rounded-lg w-56 bg-orange-600 h-10 hover:border-[#a35959] marker:rounded-full hover:bg-[#542822] hover:text-white border-2 focus:outline-none"
    >
      Add to cart
    </button>
  );
};

export default function MenuItems() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://34.224.26.99/');
        setMenuItems(response.data.products);  

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    
    getProducts();
  }, []);

  return (
    <div className='grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-orange-50'>
      {menuItems.map((item, index) => (
        <div key={item._id} className='w-64 m-2 bg-white shadow hover:shadow-lg h-96'>
          <div className='flex flex-col'>
          <img 
            className='w-64 mb-2 transition-all duration-500 transform h-52 hover:scale-110' 
            src={item.images && item.images[0] ? `http://34.224.26.99/${item.images[0]}` : defaultImage}
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
              <AddToCart item={item} />          
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}