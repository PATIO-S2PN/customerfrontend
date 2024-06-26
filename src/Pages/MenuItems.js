import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
import { useNavigate } from 'react-router-dom';
import defaultImage from '../Assets/burgers.webp';
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
      className="w-56 h-10 px-6 py-2 uppercase transition duration-200 ease-in bg-orange-600 border-2 rounded-lg hover:bg-orange-800 hover:text-white focus:outline-none"
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

export default function MenuItems({category}) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const url = category ? `${productBackendUrl}/category/${category}` : `${productBackendUrl}`;
        console.log(`Requesting URL: ${url}`); // Log the URL being requested

        const response = await axios.get(url);
        console.log('Response Status:', response.status); // Log response status
        console.log('Response Data:', response.data); // Log response data
        
        setMenuItems(response.data);
        //console.log('Menu Items:', menuItems);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [category]);

  return (
    <div className='grid justify-center grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-orange-50'>
     {menuItems && menuItems.length > 0 ? (
      menuItems.map((item) => (
        <div key={item._id} className='w-full overflow-hidden bg-white rounded-lg shadow hover:shadow-lg'>
          <img
            className='object-cover w-full transition-transform duration-500 transform h-52 hover:scale-110'
            src={item.images && item.images[0] ? `${productBackendUrl}/${item.images[0]}` : defaultImage}
            alt={item.name}
          />
          <div className='p-4'>
            <h3 className='text-xl font-bold text-center'>{item.name}</h3>
            <p className='text-center text-md'>LKR {item.price}.000</p>
            <div className='flex items-center justify-between mt-2'>
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
      ))
      ): (
        <p>No items found.</p>

    )}
    </div>  
  );
}
