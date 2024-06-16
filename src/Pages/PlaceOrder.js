import React from 'react'
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { customerBackendUrl, shoppingBackendUrl } from '../config';

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

const PlaceOrder = () => {
  const servicecharge = 10;
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]); 
  const [cartItems, setCartItems] = useState([]); 
  
  //calculate the total
  const subtotal = products.reduce((total, item) => {
    return total + (item.product.price * item.unit);
  }, 0);
  
  //place order
  const placeOrder = async () => {
    try {
      const token = localStorage.getItem('token'); 
  
      const response = await axios.post(`${shoppingBackendUrl}/order`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      showToast('success', 'Order placed successfully!');
      console.log("Order placed successfully");
      return response.data;
    } catch (error) {
      console.error(`Error placing order: ${error}`);
    }
  };
  
  //get cart items
  useEffect(() => {
    const token = localStorage.getItem('token'); 
    axios.get(`${shoppingBackendUrl}/cart`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data);
    
      if (Array.isArray(response.data.items)) {
        setProducts(response.data.items);
      } else {
        setProducts([]);
      }
    })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []); 

  //get profile details
  useEffect(() => {
    const token = localStorage.getItem('token'); 

    //get profile data
    async function fetchUserData() {
      try {
        const response = await axios.get(`${customerBackendUrl}/profile`, {
          headers: {

            Authorization: `Bearer ${token}` 
          }
        });
  
        if (response.data) {
          setUser(response.data);
        } else {
          console.error('No user data found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    }
  
    fetchUserData();
  }, []);
  
  return (
    <div className='flex items-center flex-col justify-around bg-[#101E21] h-screen'>
        <img src={logo} alt='logo' className='absolute z-10 h-[50px] w-[170px] top-10 left-10' onClick={() => navigate("/")} />
        <div className='flex flex-row flex-wrap justify-center gap-16'>
            <div className='flex flex-col justify-center gap-2'>
                    <h1 className='text-xl text-orange-200 font-roboto-regular-400'>BILLING DETAILS</h1>
                    <div className="w-full border-t border-gray-400"></div>

                    <div className='flex flex-row flex-wrap justify-between gap-4'>
                        <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            First Name
                            </label>
                            <input
                                value={user && user.firstName ? user.firstName : ''}
                                onChange={e => setUser({...user, firstName: e.target.value})}
                                className="w-64 h-8 pl-2 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72 text-orange-50"                            
                            />
                        </div>
                        <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            Last Name
                            </label>
                            <input
                                value={user && user.lastName ? user.lastName : ''}
                                onChange={e => setUser({...user, lastName: e.target.value})}
                                className="w-64 h-8 pl-2 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72 text-orange-50"                            
                            />
                        </div>
                    </div>
                    {/* <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                              Address</label>
                            <input
                                value={user && user.address ? user.address : ''}
                                onChange={e => setUser({...user, address: e.target.value})}
                                className="w-64 h-8 pl-2 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72 text-orange-50"                            
                            />
                    </div> */}
                    <div className='flex flex-row flex-wrap justify-between gap-2'>
                    {/* <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            Card Number
                            </label>
                            <input
                               // onChange={e => setUser({...user, address: e.target.value})}
                                className="w-64 h-8 pl-2 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72 text-orange-50"                            
                            />
                    </div>
                        <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            CVV
                            </label>
                            <input
                                // onChange={e => setUser({...user, address: e.target.value})}
                                className="w-64 h-8 pl-2 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72 text-orange-50"                            
                            />
                        </div> */}
                    </div>
                    <div className='flex flex-row flex-wrap justify-between gap-2'>
                    <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            Telephone
                            </label>
                            <input
                                value={user && user.phone ? user.phone : ''}
                                onChange={e => setUser({...user, phone: e.target.value})}
                                className="w-64 h-8 pl-2 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72 text-orange-50"                            
                            />
                        </div>
                        {/* <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            Post Code
                            </label>
                            <input
                                className="w-64 h-8 pl-2 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72 text-orange-50"                            
                            />
                        </div> */}
                    </div>
                    <div className='flex flex-row flex-wrap justify-between gap-2'>
                    {/* <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            Apartment
                            </label>
                            <input
                                className="w-64 h-8 pl-2 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72 text-orange-50 "                            
                            />
                    </div> */}
                        <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            Email Address
                            </label>
                            <input
                                value={user && user.email ? user.email : ''}
                                onChange={e => setUser({...user, email: e.target.value})}
                                className="w-64 h-8 pl-2 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72 text-orange-50"                            
                            />
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col justify-center gap-2 '>
                    <h1 className='text-xl text-orange-200 font-roboto-regular-400'>YOUR ORDER</h1>
                    <div className="w-full border-t border-gray-400"></div>

                    <div className='flex flex-col justify-center bg-slate-700 rounded-xl'>
                        <div className='flex mx-10 mt-10 mb-5 gap-72 md:justify-between flex-row-wrap'>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-50 font-bold">
                                PRODUCT
                            </label>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-50 font-bold">
                                SUB TOTAL
                            </label>
                        </div>

                        {
                            products.map((item) => (
                                <div key={item._id} className='flex mx-10 mb-2 gap-72 md:justify-between flex-row-wrap'>
                                <label className="text-sm sm:text-sm font-roboto-regular-400 text-orange-50">
                                    {item.product.name} x {item.unit}
                                </label>
                                <label className="text-sm text-orange-500 sm:text-sm font-roboto-regular-400">
                                    ${item.product.price*item.unit}
                                </label>
                                </div>
                            ))
                        }

                        <div className='flex mx-10 mb-2 gap-72 md:justify-between flex-row-wrap'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                               Sub Total
                            </label>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-500">
                            ${subtotal.toFixed(2)}
                            </label>
                        </div>
                        <div className='flex mx-10 mb-2 gap-72 md:justify-between flex-row-wrap'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                                Service Charge
                            </label>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-500">
                                $10.00
                            </label>
                        </div>
                        <div className='flex mx-10 mb-10 gap-72 md:justify-between flex-row-wrap'>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-50">
                                Total
                            </label>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-500">
                            ${(subtotal+servicecharge).toFixed(2)}
                            </label>
                        </div>    
                    </div>
                    <button 
                        onClick = {() => {
                            placeOrder();                            
                            navigate('/');
                        }}
                        
                        className='flex items-center justify-center w-64 h-12 ml-32 text-xl font-bold bg-orange-400 mt-3hover:bg-orange-900 font-roboto rounded-2xl'>
                        Place Order</button>
            </div>
        </div>     
    </div>
  )
}

export default PlaceOrder

