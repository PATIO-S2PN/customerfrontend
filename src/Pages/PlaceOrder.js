import React, { useEffect, useState } from 'react';
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import { customerBackendUrl, shoppingBackendUrl } from '../config';

function showToast(status, message) {
  Swal.fire({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#fff7ed',
    icon: status,
    title: message,
  });
}

const PlaceOrder = () => {
  const serviceCharge = 10;
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  const subtotal = products.reduce((total, item) => total + item.product.price * item.unit, 0);

  const placeOrder = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${shoppingBackendUrl}/order`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      showToast('success', 'Order placed successfully!');
      navigate('/');
      return response.data;
    } catch (error) {
      console.error(`Error placing order: ${error}`);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${shoppingBackendUrl}/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
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

  useEffect(() => {
    const token = localStorage.getItem('token');

    async function fetchUserData() {
      try {
        const response = await axios.get(`${customerBackendUrl}/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data) {
          setUser(response.data);
        } else {
          console.error('No user data found');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUserData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#101E21] py-10 relative">
      <img
        src={logo}
        alt="logo"
        className="absolute z-10 h-[50px] w-[170px] top-10 left-10 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="w-full max-w-5xl px-4 md:px-10 pt-14 flex flex-col items-center">
        <div className="flex flex-col md:flex-row w-full justify-center gap-8 mb-10">
          <div className="w-full md:w-1/2 bg-slate-800 p-6 rounded-lg shadow-lg">
            <h1 className="text-xl text-orange-200 font-bold mb-4">BILLING DETAILS</h1>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-orange-50">First Name</label>
                <input
                  value={user.firstName || ''}
                  onChange={e => setUser({ ...user, firstName: e.target.value })}
                  className="w-full h-10 pl-2 bg-transparent border-2 border-orange-200 rounded-lg text-orange-50 focus:border-orange-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-orange-50">Last Name</label>
                <input
                  value={user.lastName || ''}
                  onChange={e => setUser({ ...user, lastName: e.target.value })}
                  className="w-full h-10 pl-2 bg-transparent border-2 border-orange-200 rounded-lg text-orange-50 focus:border-orange-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-orange-50">Telephone</label>
                <input
                  value={user.phone || ''}
                  onChange={e => setUser({ ...user, phone: e.target.value })}
                  className="w-full h-10 pl-2 bg-transparent border-2 border-orange-200 rounded-lg text-orange-50 focus:border-orange-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-orange-50">Email Address</label>
                <input
                  value={user.email || ''}
                  onChange={e => setUser({ ...user, email: e.target.value })}
                  className="w-full h-10 pl-2 bg-transparent border-2 border-orange-200 rounded-lg text-orange-50 focus:border-orange-500"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-slate-800 p-6 rounded-lg shadow-lg">
            <h1 className="text-xl text-orange-200 font-bold mb-4">YOUR ORDER</h1>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-orange-50 font-bold mb-2">
                <span>PRODUCT</span>
                <span>SUB TOTAL</span>
              </div>
              {products.map((item) => (
                <div key={item._id} className="flex justify-between text-orange-50">
                  <span>{item.product.name} x {item.unit}</span>
                  <span className="text-orange-500">${(item.product.price * item.unit).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between text-orange-50 mt-4">
                <span>Sub Total</span>
                <span className="text-orange-500">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-orange-50">
                <span>Service Charge</span>
                <span className="text-orange-500">${serviceCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-orange-50 font-bold mt-4">
                <span>Total</span>
                <span className="text-orange-500">${(subtotal + serviceCharge).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            placeOrder();
            navigate('/');
          }}
          className="px-8 py-3 mt-6 text-xl font-bold text-white bg-orange-600 rounded-lg hover:bg-orange-700"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default PlaceOrder;
