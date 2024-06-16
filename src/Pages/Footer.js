import React from 'react';
import { FaFacebookSquare, FaFacebookMessenger } from "react-icons/fa";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import Paymentcard from '../Assets/paymentcard.webp';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100">
      <div className="border-t border-black"></div>
      <div className="bg-yellow-400 py-5 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold px-2">
          Savor the extraordinary! Turning every bite into a masterpiece
        </h2>
      </div>
      <div className="bg-black text-white py-10">
        <div className="container mx-auto flex flex-wrap justify-around">
          <div className="flex flex-col items-center mt-4 sm:mt-0 mb-4 sm:mb-0">
            <FaFacebookSquare size='3rem' className='mb-4' />
            <FaSquareInstagram size='3rem' className='mb-4' />
            <FaSquareTwitter size='3rem' className='mb-4' />
            <FaFacebookMessenger size='3rem' />
          </div>
          <div className="flex flex-col mt-4 sm:mt-0 mb-4 sm:mb-0">
            <h3 className="text-2xl font-bold">Company</h3>
            <div className="h-px my-3 bg-amber-500 w-full" />
            <p className="text-lg text-left sm:text-left">
              LuxeDine Galle:<br />
              Wakwella Road,<br />
              Hapugala,<br />
              Galle.<br />
              Tel: 0123456789<br />
              Mail: LuxeDine.lk
            </p>
          </div>
          <div className="flex flex-col mt-4 sm:mt-0 mb-4 sm:mb-0">
            <h3 className="text-2xl font-bold">Account Info</h3>
            <div className="h-px my-3 bg-amber-500 w-full" />
            <p className="text-lg text-left sm:text-left">
              My Profile<br />
              Checkout<br />
              My Order
            </p>
          </div>
          <div className="flex flex-col mt-4 sm:mt-0 mb-4 sm:mb-0">
            <h3 className="text-2xl font-bold">Links</h3>
            <div className="h-px my-3 bg-amber-500 w-full" />
            <p className="text-lg text-left sm:text-left">
              Home<br />
              Menu<br />
              About us<br />
              Contact us
            </p>
          </div>
          <div className="flex flex-col mt-4 sm:mt-0 mb-4 sm:mb-0">
            <h3 className="text-2xl font-bold">We Accept</h3>
            <div className="h-px my-3 bg-amber-500 w-full" />
            <img src={Paymentcard} className="h-24 w-auto mt-4 mx-auto" alt="paymentcard" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
