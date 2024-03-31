import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import Paymentcard from '../Assets/paymentcard.jpg';


const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full">
      <div className=" mx-auto flex  justify-center">
        <div className="w-full border-t border-black"></div>
      </div>
      <div className=" mx-auto flex justify-between  ">
          <div className="w-full h-20 bg-yellow-400 text-center pt-5 ">        
            <h className="font-bold text-3xl inline-block pl-2">Savor the extraordinary! Turning every bite into a masterpiece</h>         
          </div> {/* Yellow color div */}
        </div>
        
        <div className=" flex justify-between">
            <div className="bg-black h-90 w-full">
              <div className="flex justify-between items-start self-center mt-11 w-full  max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center mt-11 ml-4">
                  <FaFacebookSquare size='3rem' color='white'/>
                  <FaSquareInstagram size='3rem' color='white' className='mt-4'/>
                  <FaSquareTwitter size='3rem' color='white' className='mt-4'/>
                  <FaFacebookMessenger size='3rem' color='white' className='mt-4'/>
                </div>

                <div className="flex flex-col mt-2.5">
                  <div className="text-4xl font-bold text-white">Contact</div>
                  <div className="shrink-0 mt-3 h-px bg-amber-500 border border-amber-500 border-solid" />
                  <div className="mt-7  text-white text-2xl">
                    LuxeDine Galle:<br />
                    Wakwella Road,<br />
                    Hapugala,<br />
                    Galle.<br />
                    Tel: 0123456789<br />
                    Mail: LuxeDine.lk<br />
                  </div>
                </div>

                <div className="flex flex-col mt-2.5">
                  <div className="text-4xl font-bold text-white">Extras</div>
                  <div className="shrink-0 mt-2.5 h-px bg-amber-500 border border-amber-500 border-solid" />
                  <div className="mt-7 text-white text-2xl">
                    My Profile<br /><br />
                    Checkout<br /><br />
                    My Order
                  </div>
                </div>

                <div className="flex flex-col mt-2.5">
                  <div className="text-4xl font-bold text-white">Information</div>
                  <div className="shrink-0 mt-2.5 h-px bg-amber-500 border border-amber-500 border-solid" />
                  <div className="self-center mt-6 text-white text-2xl">
                    Home<br /><br />
                    Menu<br /><br />
                    About us<br /><br />
                    Contact us<br /><br />
                  </div>
                </div>

                <div className="flex flex-col mt-2.5 mr-4">
                  <div className="text-4xl font-bold text-white">We Accept</div>
                  <div className="shrink-0 mt-2.5 h-px bg-amber-500 border border-amber-500 border-solid" />
                  <img src={Paymentcard} className="max-w-full h-40 pt-6" alt="paymentcard" />
                </div>

                

              </div>
            </div>
          </div>


    
  </footer>
  );
};

export default Footer;
