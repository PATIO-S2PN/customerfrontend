import React from 'react';
import { FaFacebookSquare, FaFacebookMessenger } from "react-icons/fa";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import Paymentcard from '../Assets/paymentcard.webp';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100">
      <div className="border-t border-black"></div>
      <div className="py-5 text-center bg-yellow-400">
        <h2 className="px-2 text-2xl font-bold sm:text-3xl hover:text-amber-950">
          Savor the extraordinary! Turning every bite into a masterpiece
        </h2>
      </div>
      <div className="py-10 text-white bg-black">
        <div className="container flex flex-wrap justify-around mx-auto">
          <div className="flex flex-col items-center mt-4 mb-4 sm:mt-0 sm:mb-0">
            <FaFacebookSquare size='3rem' className='mb-4 cursor-pointer hover:text-amber-500' />
            <FaSquareInstagram size='3rem' className='mb-4 cursor-pointer hover:text-amber-500' />
            <FaSquareTwitter size='3rem' className='mb-4 cursor-pointer hover:text-amber-500' />
            <FaFacebookMessenger size='3rem' className='cursor-pointer hover:text-amber-500'/>
          </div>
          <div className="flex flex-col mt-4 mb-4 sm:mt-0 sm:mb-0">
            <h3 className="text-2xl font-bold hover:text-amber-500">Company</h3>
            <div className="w-full h-px my-3 bg-amber-500" />
            <p className="text-lg text-left sm:text-left">
              LuxeDine Galle:<br />
              Wakwella Road,<br />
              Hapugala,<br />
              Galle.<br />
              Tel: 0123456789<br />
              Mail: LuxeDine.lk
            </p>
          </div>
          <div className="flex flex-col mt-4 mb-4 sm:mt-0 sm:mb-0">
            <h3 className="text-2xl font-bold hover:text-amber-500">Account Info</h3>
            <div className="w-full h-px my-3 bg-amber-500" />
            <p className="text-lg text-left sm:text-left">
              <Link to="/profile" className="block text-white font-roboto hover:text-red-500">My Profile</Link>
              <Link to="/profile" className="block text-white hover:text-red-500 font-roboto">My Order</Link>
            </p>
          </div>
          <div className="flex flex-col mt-4 mb-4 sm:mt-0 sm:mb-0">
            <h3 className="text-2xl font-bold hover:text-amber-500">Links</h3>
            <div className="w-full h-px my-3 bg-amber-500" />
            <p className="text-lg text-left sm:text-left">
              <Link to="/" className="block text-white font-roboto hover:text-red-500">Home</Link>
              <Link to="/categories" className="block text-white hover:text-red-500 font-roboto">Menu</Link>
              <Link to="/about" className="block text-white font-roboto hover:text-red-500">About Us</Link>
              <Link to="/contact" className="block text-white hover:text-red-500 font-roboto-regular">Contact Us</Link>
            </p>
            
          </div>
          <div className="flex flex-col mt-4 mb-4 sm:mt-0 sm:mb-0">
            <h3 className="text-2xl font-bold hover:text-amber-500">We Accept</h3>
            <div className="w-full h-px my-3 bg-amber-500" />
            <img src={Paymentcard} className="w-auto h-24 mx-auto mt-4" alt="paymentcard" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
