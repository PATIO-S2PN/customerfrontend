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
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        let newIndex = prevIndex + direction;
        if (newIndex >= slides.length || newIndex < 0) {
          setDirection(-direction);
          newIndex = prevIndex - direction; // revert the increment to stay within bounds
        }
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="w-full h-full min-h-screen bg-white">
      <div className="relative w-screen h-[90vh] overflow-hidden">
        <div
          className="absolute flex w-full h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${index * 100}vw)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="w-[100vw] h-full flex-shrink-0 relative">
              <img
                src={slide.image}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-[20%] left-4 w-[90%] md:left-[120px] md:top-[350px] md:w-[600px] z-20">
          <p
            style={{ fontFamily: slides[index].text.paragraph.fontFamily }}
            className='text-left md:text-left md:text-[40px] italic font-roboto-regular text-orange-300 text-[20px] mb-4'
          >
            {slides[index].text.paragraph.text}
          </p>
          <button
            onClick={() => navigate('/categories')}
            className="px-4 py-2 text-black border-white border-2 bg-[#FFCF87]
            justify-center h-[40px] w-[200px] font-bold font-serif rounded-full"
          >
            <span className="mr-2">ORDER NOW</span>
            <FontAwesomeIcon icon={faAngleDoubleRight} size='lg' />
          </button>
        </div>
        <div className="fixed z-20 w-16 h-16 overflow-hidden rounded-full top-[85%] right-4 border-4 border-red-800">
          <img src={cart}
            onClick={() => navigate('/cartnew')}
            alt="Cart"
            className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
}
