import React, { useState, useEffect } from 'react';
import bgTwo from '../Assets/B2.jpg';
import bgThree from '../Assets/B3.jpg';
import bgFour from '../Assets/B5.jpg';

const images = [bgTwo, bgFour, bgThree];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative w-screen h-[90vh] overflow-hidden">
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt=""
          className={`absolute w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${i === index ? '-translate-x-0' : 'translate-x-full'}`}
        />
      ))}
    </div>
  );
}
