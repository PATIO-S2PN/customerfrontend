import React from 'react';
import chef from '../Assets/chef.webp';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const About = () => {
  const navigate = useNavigate();

  return (
    <div 
      className='flex items-center justify-center min-h-screen p-8' 
      style={{ backgroundColor: '#101E21' }}
    >
      <div 
        className='flex flex-col md:flex-row w-full max-w-6xl rounded-xl shadow-lg overflow-hidden' 
        style={{ backgroundColor: '#1B2A30', animation: 'fade-in 1s ease-in-out' }}
      >
        <div 
          className='w-full md:w-1/2' 
          data-aos='fade-right' 
          data-aos-duration='1000'
        >
          <img 
            src={chef} 
            alt='Chef' 
            className='w-full h-full object-cover rounded-xl' 
          />
        </div>
        
        <div 
          className='flex flex-col justify-center p-8 md:w-1/2' 
          data-aos='fade-left' 
          data-aos-duration='1000'
        >
          <h1 
            className='mb-4 font-serif text-4xl font-bold transition duration-500 transform hover:scale-105' 
            style={{ color: '#FFCF87' }}
          >
            About Our Restaurant
          </h1>
          <p 
            className='mb-6 font-serif leading-relaxed' 
            style={{ color: 'white' }}
          >
            LuxeDine is a unique dining destination in the city center. We offer a variety of dishes crafted with fresh, locally-sourced ingredients. Our team is dedicated to providing excellent service in a contemporary setting. Join us for a memorable dining experience at LuxeDine.
          </p>
          <button
            className='self-start px-6 py-2 rounded transition duration-300'
            style={{ 
              color: 'black', 
              backgroundColor: '#FFCF87', 
              border: '1px solid #FF7043', 
              hover: { backgroundColor: '#FF5722' } 
            }}
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
