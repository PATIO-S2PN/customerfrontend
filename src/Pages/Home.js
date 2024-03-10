import React, { useState, useEffect } from 'react';
import bgTwo from '../Assets/B2.jpg';
import bgThree from '../Assets/B3.jpg';
import bgFour from '../Assets/B5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const slides = [
  { 
    image: bgTwo, 
    text: {
      heading: { text: 'Flavor Flavor Haven: Take-Away Bliss!', fontFamily: 'Roboto'},
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
            
            <div className="absolute text-white top-[350px] left-[120px] ">
              <p style={{fontFamily: slide.text.heading, fontSize:"50px"}}></p>
              <p style={{ fontFamily: slide.text.paragraph.fontFamily, textAlign: 'left', whiteSpace: 'pre-line' 
                ,color: "#ffedd5", fontSize:"50px",fontStyle:"Italic"}}>{slide.text.paragraph.text}</p>
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