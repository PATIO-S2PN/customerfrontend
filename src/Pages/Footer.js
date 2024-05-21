import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import Paymentcard from '../Assets/paymentcard.jpg';


const Footer = () => {
  return (
    <footer className="w-full bg-gray-100">
      <div className="flex justify-center mx-auto ">
        <div className="w-full border-t border-black"></div>
      </div>
      <div className="flex justify-between mx-auto ">
          <div className="w-full h-20 pt-5 text-center bg-yellow-400 ">        
            <h2 className="inline-block pl-2 text-3xl font-bold">Savor the extraordinary! Turning every bite into a masterpiece</h2>         
          </div> {/* Yellow color div */}
        </div>
        
        <div className="flex justify-between ">
            <div className="w-full bg-black h-90">
              <div className="flex items-start self-center justify-between w-full mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col items-center ml-4 mt-11">
                  <FaFacebookSquare size='3rem' color='white'/>
                  <FaSquareInstagram size='3rem' color='white' className='mt-4'/>
                  <FaSquareTwitter size='3rem' color='white' className='mt-4'/>
                  <FaFacebookMessenger size='3rem' color='white' className='mt-4'/>
                </div>

                <div className="flex flex-col mt-2.5">
                  <div className="text-4xl font-bold text-white">Contact</div>
                  <div className="h-px mt-3 border border-solid shrink-0 bg-amber-500 border-amber-500" />
                  <div className="text-2xl text-white mt-7">
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
                  <div className="text-2xl text-white mt-7">
                    My Profile<br /><br />
                    Checkout<br /><br />
                    My Order
                  </div>
                </div>

                <div className="flex flex-col mt-2.5">
                  <div className="text-4xl font-bold text-white">Information</div>
                  <div className="shrink-0 mt-2.5 h-px bg-amber-500 border border-amber-500 border-solid" />
                  <div className="self-center mt-6 text-2xl text-white">
                    Home<br /><br />
                    Menu<br /><br />
                    About us<br /><br />
                    Contact us<br /><br />
                  </div>
                </div>

                <div className="flex flex-col mt-2.5 mr-4">
                  <div className="text-4xl font-bold text-white">We Accept</div>
                  <div className="shrink-0 mt-2.5 h-px bg-amber-500 border border-amber-500 border-solid" />
                  <img src={Paymentcard} className="h-40 max-w-full pt-6" alt="paymentcard" />
                </div>

                

              </div>
            </div>
          </div>


    
  </footer>
  );
};

export default Footer;
