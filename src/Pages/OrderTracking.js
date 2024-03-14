import React from 'react'
import background from '../Assets/OrderTracking.jpg'
import './OrderTracking.css'
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';

const OrderTracking = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${background})` }}>
        <img src={logo} alt='logo' className='absolute z-10 h-[50px] w-[170px] top-10 left-10' onClick={() => navigate("/")} />

        <div className='flex flex-col px-10 py-5 bg-opacity-85 items-center justify-start w-auto rounded-xl bg-[#121312] text-orange-50'>
            <h1 className='ml-0 font-roboto'>Order Tracking</h1>
            <div className="w-full border-t border-gray-400"></div>

            <label className='font-roboto font-xl'>Order ID: </label>
            <div className="w-full border-t border-gray-400"></div>
            <div className='flex flex-col flex-wrap justify-between gap-4 gap-x-72 md:flex-row'>
                <div className='flex flex-col my-3'>
                    <label className='text-sm font-roboto-Regular-300'>Estimated Time</label>
                    <label className='text-sm font-roboto-Regular-300'>11.20a.m.</label>
                    <label className='text-sm font-roboto-Regular-300'>Date</label>
                </div>
                <div className='flex flex-col my-3'>
                    <label className='text-sm font-roboto-Regular-300'>Status</label>
                    <label className='text-sm font-roboto-Regular-300'>In Preperation</label>
                </div>
                <div className='flex flex-col my-3'>
                    <label className='text-sm font-roboto-Regular-300'>Tracking</label>
                    <label className='text-sm font-roboto-Regular-300'>#nffjvhdd7853tj</label>
                </div>
                
            </div>
            <div className="w-full border-t border-gray-400"></div>

            <div className='flex flex-col md:flex-row'>
                

                <ol class="flex items-center w-full flex-col md:flex-row mt-5 mb-5">
                    <li class="flex flex-col md:flex-row w-full items-center text-black vertical-border after:content-[''] after:w-64 after:h-1 after:border-b after:border-orange-300 after:border-4 after:inline-block ">
                        <span class="flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full lg:h-12 lg:w-12 dark:bg-orange-300 shrink-0">
                            <svg class="w-3.5 h-3.5 text-black lg:w-4 lg:h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                        </span>
                    </li>
                    <li class="flex w-full flex-col md:flex-row items-center vertical-border after:content-[''] after:w-64 after:h-1 after:border-b after:border-orange-50 after:border-4 after:inline-block ">
                        <span class="flex items-center justify-center w-10 h-10 bg-orange-50 rounded-full lg:h-12 lg:w-12  shrink-0">
                            <svg class="w-4 h-4 text-black lg:w-5 lg:h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                            </svg>
                        </span>
                    </li>
                    
                    <li class="flex  items-center w-full">
                        <span class="flex items-center justify-center w-10 h-10 bg-orange-50 rounded-full lg:h-12 lg:w-12 shrink-0">
                            <svg class="w-4 h-4 text-black lg:w-5 lg:h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                            </svg>
                        </span>
                    </li>
                </ol>

            </div>

            <div className="w-full border-t border-gray-400"></div>
            <button className='w-48 h-10 my-5 font-bold text-black bg-orange-400 rounded-xl font-roboto hover:bg-orange-800'>
                Back to Orders
            </button>
        </div>
    </div>
  )
}

export default OrderTracking
