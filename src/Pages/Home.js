import React, { useState, useEffect } from 'react';
import bgTwo from '../Assets/B2.jpg';
import bgThree from '../Assets/B3.jpg';
import bgFour from '../Assets/B5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import cart from '../Assets/cartIcon.jpeg';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

AOS.init();
const slides = [
  { 
    image: bgTwo, 
    text: {
      paragraph: { text: 'Flavor Haven: Take-Away Bliss\nIndulge in a symphony of flavors,\nnow available for take-away.', fontFamily: 'Roboto'},
    },
  },
  { 
    image: bgThree, 
    text: {
      paragraph: { text: 'Begin your culinary journey\n at Flavor Haven with our \ncarefully curated take-away menu. ', fontFamily: 'Roboto' },
    },
  },
  { 
    image: bgFour, 
    text: {
      paragraph: { text: 'Say goodbye to compromise \nand hello to a dining experience\nthat fits your pace.', fontFamily: 'Roboto' },
    },
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  
    return () => clearTimeout(timer); 
  }, []);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const [isOpen,setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };



  return (
    <div>

    <div className="w-full h-full min-h-[100vh] bg-white">

      <div className="relative w-screen h-[90vh] overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i} 
            className={`absolute w-full h-full transition-all
            duration-1000 ease-in-out transform ${i === index ? '-translate-x-0' : i < index ? '-translate-x-full' : 'translate-x-full'}`}>
            <img
              key={i}
              src={slide.image}
              alt=""
              className="object-cover w-full h-full"
            />
            
            <div className="absolute text-white top-[350px] left-[120px] w-[400px] md:w-[600px]">
            <p style={{ fontFamily: slide.text.paragraph, fontSize: '35px' }} 
               className='justify-center md:text-[40px] md:justify-center italic font-roboto-regular text-orange-300'>
               {slide.text.paragraph.text}
            </p>
              <button 
                onClick={() => navigate('/categories')} 
                className="px-4 flex py-2 mt-4 text-black border-white border-2 items-center bg-[#FFCF87] 
                justify-center h-[40px] w-[200px] font-bold font-serif rounded-full">
                <span className="mr-2">ORDER NOW</span>
                <FontAwesomeIcon icon={faAngleDoubleRight} size='lg' />            
              </button>
            </div>
            
            
          </div>
        ))}
        <div className="fixed z-20 w-16 h-16 overflow-hidden rounded-full top-[85%] right-4 border-4 border-red-800">
          <img src={cart} 
               onClick={() => navigate('/cartnew')} 
               alt="Cart" 
               className="object-cover w-full h-full" />
        </div>
      </div>
      </div>
    </div>
  );
 }