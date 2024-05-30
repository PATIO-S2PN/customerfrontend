import React, { useState, useEffect } from 'react';
import bgTwo from '../Assets/B2.jpg';
import bgThree from '../Assets/B3.jpg';
import bgFour from '../Assets/B5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import Animation from './Animation';


import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const slides = [
  { 
    image: bgTwo, 
    text: {
      heading: { text: 'Flavor Flavor Haven: Take-Away Bliss!'},
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
  // Repeat for other images
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  //**************************************** */

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed
  
    return () => clearTimeout(timer); // Clean up the timer
  }, []);
  //************************************************************* */

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const [isOpen,setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };



  return (
    <div>

    <div className="w-full h-full min-h-[100vh] bg-white sm:mx-w-xl">

      <div className="relative w-screen h-[90vh] overflow-hidden">
        {slides.map((slide, i) => (
          <div className={`absolute w-full h-full transition-all
            duration-1000 ease-in-out transform ${i === index ? '-translate-x-0' : i < index ? '-translate-x-full' : 'translate-x-full'}`}>
            <img
              key={i}
              src={slide.image}
              alt=""
              className="object-cover w-full h-full"
            />
            
            <div className="absolute text-white top-[350px] left-[120px]  max-w-[400px] md:max-w-[600px] ">
              <p style={{ fontFamily: slide.text.heading }} className="text-orange-800 font-roboto"></p>
              <p style={{ fontFamily: slide.text.paragraph }} 
                className="sm:text-center text-xl justify-center text-orange-100 font-roboto-Regular-400 md:text-4xl md:justify-center">
                {slide.text.paragraph.text}
              </p>
              <div className="flex md:justify-center mt-3">
                <button className="px-4 py-2 text-black border-2 border-white bg-[#FFCF87] 
                  h-10 w-48 font-bold font-serif rounded-full flex sm:justify-center">
                  <span className="mr-2">ORDER NOW</span>
                  <FontAwesomeIcon icon={faAngleDoubleRight} size="lg" />
                </button>
              </div>
            </div>            
          </div>
        ))}
      </div>
      </div>
    </div>
  );
 }