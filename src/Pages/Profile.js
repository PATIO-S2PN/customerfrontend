import React, { useEffect, useState } from 'react';
import bg from '../Assets/profile.webp';
import profile from '../Assets/profile2.webp';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logonew.svg';
import foodOrder from '../Assets/foodOrder.webp';
import Swal from 'sweetalert2';
import { shoppingBackendUrl } from '../config';

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

function Profile() {
  const [activeTab, setActiveTab] = useState('app');
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);

  // Fetch order history
  useEffect(() => {
    const token = localStorage.getItem('token');
    async function fetchOrderHistory() {
      try {
        const response = await axios.get(`${shoppingBackendUrl}/orders`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data) {
          setOrders(response.data);
        } else {
          console.error('No order history found');
        }
      } catch (error) {
        console.error(`Error fetching order history: ${error}`);
      }
    }
    fetchOrderHistory();
  }, []);

  // Fetch user profile
  useEffect(() => {
    const token = localStorage.getItem('token');
    async function fetchUserData() {
      try {
        const response = await axios.get(`${shoppingBackendUrl}/profile`, {
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

  // Edit profile
  async function editProfile(updatedUser) {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${shoppingBackendUrl}/profile`, updatedUser, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data) {
        showToast('success', 'Saved Successfully!');
        setUser(response.data);
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  }

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSubmit = async (orderId) => {
    navigate(`/order-tracking/${orderId}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#101E21]">
      <img
        src={logo}
        alt="logo"
        className="absolute z-10 h-12 w-42 top-4 left-4 cursor-pointer"
        onClick={() => navigate('/')}
      />
      <div className="w-full">
        <img src={bg} className="object-cover w-full h-[15vh]" alt="Background" />
      </div>
      <div className="flex flex-col items-center w-full mt-4">
        <ul className="flex justify-center w-full bg-blue-500 h-12">
          <li className="flex-auto text-center">
            <a
              className={`flex items-center justify-center w-full py-1 text-lg font-serif cursor-pointer ${
                activeTab === 'app' ? 'text-black' : 'text-gray-700'
              }`}
              onClick={() => handleTabClick('app')}
            >
              PROFILE
            </a>
          </li>
          <li className="flex-auto text-center">
            <a
              className={`flex items-center justify-center w-full py-1 text-lg font-serif cursor-pointer ${
                activeTab === 'message' ? 'text-black' : 'text-gray-700'
              }`}
              onClick={() => handleTabClick('message')}
            >
              ORDER HISTORY
            </a>
          </li>
        </ul>
        <div className="w-full max-w-5xl mt-6">
          <div className={activeTab === 'app' ? 'block' : 'hidden'}>
            <div className="flex flex-col md:flex-row md:justify-between items-start bg-[#F7EBE8] p-4 rounded-lg shadow-lg">
              <div className="flex flex-col items-center md:w-1/2">
                <div className="flex flex-col items-center bg-[#D9D9D9] rounded-3xl p-6">
                  <img src={profile} className="h-40 w-40 mb-4" alt="profile" />
                  <p className="text-3xl font-serif">Good Afternoon,</p>
                  <p className="text-4xl font-serif font-bold">{user.firstName}</p>
                </div>
                <div className="flex flex-col items-center mt-4">
                  <p className="text-3xl font-serif text-[#991C1C]">GOOD FOOD, GOOD MOOD!</p>
                  <p className="mt-2 text-2xl italic font-serif">Welcome to a taste-filled experience!</p>
                </div>
              </div>
              <div className="flex flex-col md:w-1/2 mt-6 md:mt-0">
                <h2 className="text-4xl font-bold text-black mb-4">Account Information</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label className="text-lg font-serif text-gray-900">First Name</label>
                    <input
                      value={user.firstName || ''}
                      onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                      className="p-2.5 bg-[#D9D9D9] border border-gray-300 rounded-2xl focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-serif text-gray-900">Last Name</label>
                    <input
                      value={user.lastName || ''}
                      onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                      className="p-2.5 bg-[#D9D9D9] border border-gray-300 rounded-2xl focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-serif text-gray-900">Contact</label>
                    <input
                      value={user.phone || ''}
                      onChange={(e) => setUser({ ...user, phone: e.target.value })}
                      className="p-2.5 bg-[#D9D9D9] border border-gray-300 rounded-2xl focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-lg font-serif text-gray-900">Email</label>
                    <input
                      value={user.email || ''}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      className="p-2.5 bg-[#D9D9D9] border border-gray-300 rounded-2xl focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button
                    onClick={() => editProfile(user)}
                    className="self-start p-2 mt-4 bg-green-600 border border-black rounded-full text-white hover:bg-green-900"
                  >
                    SAVE CHANGES
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={activeTab === 'message' ? 'block' : 'hidden'}>
            <div className="flex flex-col items-center p-4">
              <p className="text-3xl text-orange-500 font-bold">Happy Dining!</p>
              <p className="text-2xl italic text-orange-800 font-bold">Explore your culinary journey with LuxeDine in your Order History.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-3 overflow-auto h-[530px]">
              {orders.map((order, index) => (
                <div key={index} className="flex flex-col p-3 bg-white border-2 border-orange-500 rounded-lg">
                  <img className="w-full h-64 object-cover" src={foodOrder} alt="food order" />
                  <div className="flex flex-col justify-between p-2 mt-4">
                    <span>Order ID: {order.orderId}</span>
                    <span>Ordered Date: {new Date(order.createdAt).toLocaleDateString()}</span>
                    <span>Status: {order.status}</span>
                    <span>Total: {order.amount}</span>
                    <button
                      onClick={() => handleSubmit(order._id)}
                      className="px-6 py-2 mt-2 transition ease-in duration-200 uppercase rounded-lg bg-orange-600 hover:bg-orange-800 text-white focus:outline-none"
                    >
                      Track my Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
