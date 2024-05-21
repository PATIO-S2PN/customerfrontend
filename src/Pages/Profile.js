import React, { useEffect, useState } from 'react';
import bg from '../Assets/profile.jpg';
import profile from '../Assets/profile2.png';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../Assets/logonew.svg';

function Profile() {
    const [activeTab, setActiveTab] = useState('app');
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
      const token = localStorage.getItem('token'); 

      //get profile data
      async function fetchUserData() {
        try {
          const response = await axios.get('http://18.234.113.85/customer/profile', {
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

    //edit profile
    async function editProfile(updatedUser) {
      try {
        const token = localStorage.getItem('token'); // Get the token from local storage
    
        const response = await axios.put('http://18.234.113.85/customer/profile', updatedUser, {
          headers: {
            Authorization: `Bearer ${token}` // Assuming the token is a Bearer token
          }
        });
    
        if (response.data) {
          console.log('Profile updated successfully');
          setUser(response.data); // Update the user state with the response data
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

  return (
    <div>
        <img src={logo} alt='logo' className='absolute z-10 h-[50px] w-[170px] top-10 left-10' onClick={() => navigate("/")} />

        <div>
            <img src={bg} className="object-cover w-screen h-[15vh]" alt="Background" />
        </div>
        
        <div>
        <div className="justify-center">
            <div className="">
                    <div className="relative justify-center">
                    <ul
                        className="relative flex flex-wrap items-center justify-center w-screen list-none bg-blue-500 h-[5vh]"
                        data-tabs="tabs"
                        role="list"
                    >
                        <li className="z-30 flex-auto text-center ">
                        <a
                            className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 font-serif text-lg text-black transition-all ease-in-out border-0 cursor-pointer"
                            onClick={() => handleTabClick('app')}
                            active={activeTab === 'app' ? 'true' : 'false'}
                            role="tab"
                            aria-selected={activeTab === 'app'}
                            aria-controls="app"
                        >
                            <span className="ml-1">PROFILE</span>
                        </a>
                        </li>
                        <li className="z-30 flex-auto text-center">
                        <a
                            className="z-30 flex items-center justify-center w-full px-0 py-1 mb-0 font-serif text-lg text-black transition-all ease-in-out border-0 cursor-pointer"
                            onClick={() => handleTabClick('message')}
                            active={activeTab === 'message' ? 'true' : 'false'}
                            role="tab"
                            aria-selected={activeTab === 'message'}
                            aria-controls="message"
                        >
                            <span className="ml-1">ORDER HISTORY</span>
                        </a>
                        </li>
                        
                    </ul>
                    <div data-tab-content="" className="">
                        <div className={activeTab === 'app' ? " bg-[#F7EBE8] h-auto md:h-[80vh] w-screen flex flex-row flex-wrap opacity-100" : "hidden opacity-0"} id="app" role="tabpanel">
                            <div>
                                <div className='flex flex-col items-center justify-center h-[450px] rounded-3xl w-[400px] bg-[#D9D9D9] m-10 '>
                                    <img src={profile} className='h-[200px] w-[200px] mb-5'/>
                                    <p className='font-serif text-3xl'>Good Afternoon,</p>
                                    <p className='font-serif text-4xl font-bold'>S. Sankha</p>
                                </div>
                                <div className='flex flex-col items-center w-[400px] justify-center ml-10 mt-5 rounded-3xl'>
                                    <p className='font-serif text-3xl  text-[#991C1C]'>GOOD FOOD,</p>
                                    <p className='font-serif text-3xl text-[#991C1C]'>GOOD MOOD!</p>
                                    <p className='mt-3 font-serif text-2xl italic text-black'>Welcome to a </p>
                                    <p className='mb-5 font-serif text-2xl italic text-black'>taste-filled experience!</p>
                                </div>
                            </div>
                            
                            
                            <div className='flex flex-col flex-wrap justify-center m-10'>
                                <p className='font-serif text-4xl font-bold text-black'>Account Information</p>
                                <div className='flex md:flex-row flex-wrap justify-between md:w-[900px]'>
                                    <div className="mb-5">
                                        <label 
                                            htmlFor="fname" 
                                            className="block mb-2 font-serif text-lg text-gray-900 ">First Name
                                        </label>
                                        <input 
                                            value={user && user.firstName ? user.firstName : ''}
                                            onChange={e => setUser({...user, firstName: e.target.value})}
                                            type="fname" 
                                            id="fname" 
                                            className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-2xl h-10 w-[350px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 "  required />
                                    </div>
                                    <div className="mb-5">
                                        <label 
                                            htmlFor="lname" 
                                            className="block mb-2 font-serif text-lg text-gray-900 ">Last Name
                                        </label>
                                        <input 
                                            value={user && user.lastName ? user.lastName : ''}
                                            onChange={e => setUser({...user, lastName: e.target.value})}
                                            type="lname" 
                                            id="lname" 
                                            className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-2xl h-10 w-[350px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 "  required />
                                    </div>
                                </div>
                                <div className='flex flex-row flex-wrap justify-between md:w-[900px] w-[300px]'>
                                    <div className="mb-5">
                                        <label 
                                            htmlFor="address" 
                                            className="block mb-2 font-serif text-lg text-gray-900 ">Address
                                        </label>
                                        <input 
                                            value={user && user.address ? user.address : ''}
                                            onChange={e => setUser({...user, address: e.target.value})}
                                            type="address" 
                                            id="address" 
                                            className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-2xl h-10 w-[350px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 "  required />
                                    </div>
                                    <div className="mb-5">
                                        <label 
                                            htmlFor="contact" 
                                            className="block mb-2 font-serif text-lg text-gray-900 ">Contact
                                        </label>
                                        <input 
                                            value={user && user.phone ? user.phone : ''}
                                            onChange={e => setUser({...user, phone: e.target.value})}
                                            type="contact"
                                            id="contact" 
                                            className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-2xl h-10 w-[350px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 "  required />
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between w-[900px]'>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="email" 
                                            className="block mb-2 font-serif text-lg text-gray-900 ">Email
                                        </label>
                                        <input 
                                            value={user && user.email ? user.email : ''}
                                            onChange={e => setUser({...user, email: e.target.value})}
                                            type="email" 
                                            id="email"
                                            className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-2xl h-10 w-[450px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 "  required />
                                    </div>
                                    
                                </div>
                                <div className='flex flex-row justify-between w-[900px]'>
                                    <div className="mb-5">
                                        <label 
                                          htmlFor="password" 
                                          className="block mb-2 font-serif text-lg text-gray-900 ">Password
                                        </label>
                                        <input 
                                          value={user && user.password ? user.password : ''}
                                          onChange={e => setUser({...user, password: e.target.value})}
                                          type="password" 
                                          id="password" 
                                          className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-2xl h-10 w-[450px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 "  required />
                                    </div>
                                    
                                </div>
                                <button 
                                    onClick={() => editProfile(user)}
                                        className='h-10 font-serif w-[200px] bg-green-600 border border-black rounded-full text-white hover:bg-green-900'>SAVE CHANGES</button>
                            </div>
                        </div>
                        <div className={activeTab === 'message' ? "block bg-orange-200 opacity-100" : "hidden opacity-0"} id="message" role="tabpanel">
                        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit text-blue-gray-500">
                            The reading of all good books is like a conversation with the finest
                            minds of past centuries.
                        </p>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>
                
    </div>
    </div>
  )
}

export default Profile