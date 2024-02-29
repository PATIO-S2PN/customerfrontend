import React, { useState, useEffect } from 'react';
import bgTwo from '../Assets/B2.jpg';
import bgThree from '../Assets/B3.jpg';
import bgFour from '../Assets/B5.jpg';
import { Nav } from 'react-bootstrap';
import Navbar from '../Components/Navbar';
import About from './About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const slides = [
  { 
    image: bgTwo, 
    text: {
      line1: { text: 'Line 1 for image 1', fontFamily: 'Roboto' },
      line2: { text: 'Line 2 for image 1', fontFamily: 'Roboto' },
      line3: { text: 'Line 3 for image 1', fontFamily: 'Roboto' },
    },
  },
  { 
    image: bgThree, 
    text: {
      line1: { text: 'Line 1 for image 1', fontFamily: 'Roboto' },
      line2: { text: 'Line 2 for image 1', fontFamily: 'Roboto' },
      line3: { text: 'Line 3 for image 1', fontFamily: 'Roboto' },
    },
  },
  { 
    image: bgFour, 
    text: {
      line1: { text: 'Line 1 for image 1', fontFamily: 'Roboto' },
      line2: { text: 'Line 2 for image 1', fontFamily: 'Roboto' },
      line3: { text: 'Line 3 for image 1', fontFamily: 'Roboto' },
    },
  },
  // Repeat for other images
];

export default function Home() {
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
    <div className="w-full h-full min-h-[100vh] bg-white">
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
                <div className="absolute text-white top-60 left-40">
                  <p style={{ fontFamily: slide.text.line1.fontFamily }}>{slide.text.line1.text}</p>
                  <p style={{ fontFamily: slide.text.line2.fontFamily }}>{slide.text.line2.text}</p>
                  <p style={{ fontFamily: slide.text.line3.fontFamily }}>{slide.text.line3.text}</p>
                  <button className="px-4 flex py-2 mt-4 text-black border-white border-2 items-center bg-[#FFCF87] 
                    justify-center h-[40px] w-[200px] font-bold font-serif rounded-full">
                    <span className="mr-2">ORDER NOW</span>
                    <FontAwesomeIcon icon={faAngleDoubleRight} size='lg' />            
                  </button>
                </div>
              </div>
          ))}
        </div>

    </div>
  );
}