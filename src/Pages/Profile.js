import React, { useState } from 'react';
import bg from '../Assets/profile.jpg';
import profile from '../Assets/profile2.png';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('app');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
        <div>
            <img src={bg} className="object-cover w-full h-[15vh]" alt="Background" />
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
                        <div className={activeTab === 'app' ? " bg-[#F7EBE8] h-[80vh] w-screen flex flex-row opacity-100" : "hidden opacity-0"} id="app" role="tabpanel">
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
                                    <p className='font-serif text-2xl italic text-black'>taste-filled experience!</p>
                                </div>
                            </div>
                            
                            
                            <div className='flex flex-col justify-center m-10'>
                                <p className='font-serif text-4xl font-bold text-black'>Account Information</p>
                                <div className='flex flex-row justify-between w-[900px]'>
                                    <div class="mb-5">
                                        <label for="fname" class="block mb-2 text-lg font-serif text-gray-900 ">First Name</label>
                                        <input type="fname" id="fname" class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-2xl h-10 w-[350px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 "  required />
                                    </div>
                                    <div class="mb-5">
                                        <label for="lname" class="block mb-2 text-lg font-serif text-gray-900 ">Last Name</label>
                                        <input type="lname" id="lname" class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-2xl h-10 w-[350px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 "  required />
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between w-[900px]'>
                                    <div class="mb-5">
                                        <label for="address" class="block mb-2 text-lg font-serif text-gray-900 ">Address</label>
                                        <input type="address" id="address" class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-2xl h-10 w-[350px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 "  required />
                                    </div>
                                    <div class="mb-5">
                                        <label for="contact" class="block mb-2 text-lg font-serif text-gray-900 ">Contact</label>
                                        <input type="contact" id="contact" class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-2xl h-10 w-[350px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 "  required />
                                    </div>
                                </div>
                                <div className='flex flex-row justify-between w-[900px]'>
                                    <div class="mb-5">
                                        <label for="email" class="block mb-2 text-lg font-serif text-gray-900 ">Email</label>
                                        <input type="email" id="email" class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-2xl h-10 w-[450px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 "  required />
                                    </div>
                                    
                                </div>
                                <div className='flex flex-row justify-between w-[900px]'>
                                    <div class="mb-5">
                                        <label for="password" class="block mb-2 text-lg font-serif text-gray-900 ">Password</label>
                                        <input type="password" id="password" class="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-sm rounded-2xl h-10 w-[450px] focus:ring-blue-500 focus:border-blue-500 block p-2.5 "  required />
                                    </div>
                                    
                                </div>
                                <button className='h-10 font-serif w-[200px] bg-green-600 border border-black rounded-full text-white hover:bg-green-900'>SAVE CHANGES</button>
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