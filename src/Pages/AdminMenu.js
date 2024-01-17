import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import logo from '../Assets/logonew.svg';

import { ChevronDownIcon, ChevronUpIcon, HomeIcon, CogIcon, ShoppingBagIcon} from '@heroicons/react/solid';

const SidebarItem = ({ label, children, Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between px-4 py-2 rounded-md cursor-pointer hover:bg-orange-200" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between ">
            <div className='flex flex-row gap-2'>
            <Icon className="w-5 h-5" />
            <span>{label}</span>
            
            </div>
            {isOpen ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
        </div>
      </div>
      {isOpen && <div className="pl-4">{children}</div>}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 h-screen p-3 m-2 rounded-lg bg-orange-50">
      <img src={logo} alt="logo" className=""/>
      <div className="mb-2 border-t-2 border-black"></div>

      <SidebarItem label="Home" Icon={HomeIcon} >
        <div className="flex flex-col">
            <label href="/admin-dashboaord"
               className='ml-10 text-sm rounded-sm '
            >APPS</label>
            
        </div>
            
            
      </SidebarItem>
      <SidebarItem label="Ecommerce" Icon={ShoppingBagIcon}>
      <div className="flex flex-col">
            <label href="/admin-dashboaord"
               className='justify-center ml-10 text-sm rounded-sm '
            >Admin
                <div className='flex flex-col gap-2'>
                    <a href='/admin-dashboard' className='ml-10 rounded-sm text-[15px]'>Dashboard</a>
                    <a href='/admin-menu' className='ml-10 rounded-sm text-[15px] '>Items</a>
                    <a href='/customers' className='ml-10 rounded-sm text-[15px] '>Customers</a>
                    <a href='/orders' className='ml-10 rounded-sm text-[15px] '>Orders</a>
                </div>
            </label>
            <label href="/admin-dashboaord"
               className='ml-10 text-sm rounded-sm '
            >Customer
            <div className='flex flex-col gap-2'>
                    <a href='/home' className='ml-10 rounded-sm text-[15px]'>Home Page</a>
                    <a href='/menu' className='ml-10 rounded-sm text-[15px] '>Menu</a>
                    <a href='/cart' className='ml-10 rounded-sm text-[15px] '>Cart</a>
                    <a href='/order-tracking' className='ml-10 rounded-sm text-[15px] '>Order Tracking</a>
                    <a href='/checkout' className='ml-10 rounded-sm text-[15px] '>Checkout</a>
                </div>
            </label>
        </div>
            
      </SidebarItem>
      
      <SidebarItem label="Settings" Icon={CogIcon}>
        
      </SidebarItem>
    </div>
  );
};

export default Sidebar;
