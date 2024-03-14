import React from 'react'
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const navigate = useNavigate();


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
                                className="w-64 h-8 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72"                            
                            />
                        </div>
                        <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            Last Name
                            </label>
                            <input
                                className="w-64 h-8 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72"                            
                            />
                        </div>
                    </div>
                    <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            card Number
                            </label>
                            <input
                                className="w-64 h-8 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72"                            
                            />
                        </div>
                    <div className='flex flex-row flex-wrap justify-between gap-2'>
                    <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            card Number
                            </label>
                            <input
                                className="w-64 h-8 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72"                            
                            />
                        </div>
                        <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            CVV
                            </label>
                            <input
                                className="w-64 h-8 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72"                            
                            />
                        </div>
                        </div>
                    <div className='flex flex-row flex-wrap justify-between gap-2'>
                    <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            Telephone
                            </label>
                            <input
                                className="w-64 h-8 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72"                            
                            />
                        </div>
                        <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            Post Code
                            </label>
                            <input
                                className="w-64 h-8 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72"                            
                            />
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap justify-between gap-2'>
                    <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            Apartment
                            </label>
                            <input
                                className="w-64 h-8 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72"                            
                            />
                        </div>
                        <div className='flex flex-col w-auto gap-1'>
                            <label className="text-[12px] sm:text-lg font-roboto-regular-400 text-orange-50">
                            Email Address
                            </label>
                            <input
                                className="w-64 h-8 bg-transparent border-2 border-orange-200 rounded-lg md:h-10 focus:border-orange-500 md:w-72"                            
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

                        <div className='flex mx-10 mb-2 gap-72 md:justify-between flex-row-wrap'>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-50">
                                PRODUCT
                            </label>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-500">
                                price
                            </label>
                        </div>
                        <div className='flex mx-10 mb-10 gap-72 md:justify-between flex-row-wrap'>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-50">
                                PRODUCT
                            </label>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-500">
                                price
                            </label>
                        </div>

                        <div className='flex mx-10 mb-2 gap-72 md:justify-between flex-row-wrap'>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-50">
                                Sub Total
                            </label>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-500">
                                price
                            </label>
                        </div>
                        <div className='flex mx-10 mb-2 gap-72 md:justify-between flex-row-wrap'>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-50">
                                Tracking
                            </label>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-500">
                                price
                            </label>
                        </div>
                        <div className='flex mx-10 mb-10 gap-72 md:justify-between flex-row-wrap'>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-50">
                                Total
                            </label>
                            <label className="text-[12px] sm:text-xl font-roboto-regular-400 text-orange-500">
                                price
                            </label>
                        </div>    
                    </div>
                    <buttton className='flex items-center justify-center w-64 h-12 ml-32 text-xl font-bold bg-orange-400 mt-3hover:bg-orange-900 font-roboto rounded-2xl'>Place Order</buttton>
            </div>
        </div>
        
        
      
    </div>
  )
}

export default PlaceOrder

