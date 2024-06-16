import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
import { useNavigate } from 'react-router-dom';
import defaultImage from '../Assets/burgers.png';
import Swal from 'sweetalert2';
import { productBackendUrl, shoppingBackendUrl } from '../config';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function showToast(status, message) {
  Swal.fire({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#fff7ed',
    icon: status,
    title: message
  });
}

export const AddToCart = ({ item }) => {
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

      await axios.post(`${shoppingBackendUrl}/cart`, cartDetails, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      showToast('success', 'One item is added to cart!');
    } catch (error) {
      console.error(error);
      showToast('error', 'Failed to add item to cart');
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className="px-6 py-2 transition ease-in duration-200 uppercase rounded-lg w-56 bg-orange-600 h-10 hover:bg-orange-800 hover:text-white border-2 focus:outline-none"
    >
      Add to cart
    </button>
  );
};

const AddToWishlist = ({ item }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleAddToWishlist = async () => {
    try {
      const token = localStorage.getItem('token');

      await axios.post(`${shoppingBackendUrl}/wishlist`, { product_id: item._id }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      showToast('success', 'Item added to wishlist!');
    } catch (error) {
      console.error(error);
      showToast('error', 'Failed to add item to wishlist');
    }
  };

  return (
    <FavoriteBorderIcon className='hover:cursor-pointer' onClick={handleAddToWishlist} />
  );
};

export default function MenuItems() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`${productBackendUrl}/`);
        setMenuItems(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className='grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6 bg-orange-50'>
      {menuItems.map((item) => (
        <div key={item._id} className='w-full bg-white shadow hover:shadow-lg rounded-lg overflow-hidden'>
          <img
            className='w-full h-52 object-cover transition-transform duration-500 transform hover:scale-110'
            src={item.images && item.images[0] ? `${productBackendUrl}/${item.images[0]}` : defaultImage}
            alt={item.name}
          />
          <div className='p-4'>
            <h3 className='text-xl font-bold text-center'>{item.name}</h3>
            <p className='text-center text-md'>LKR {item.price}.000</p>
            <div className='flex justify-between items-center mt-2'>
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
              <AddToWishlist item={item} />
            </div>
            <div className='flex justify-center mt-4'>
              <AddToCart item={item} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
