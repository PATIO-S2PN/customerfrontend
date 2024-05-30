import React from 'react'
import chef from '../Assets/chef.jpg'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-around bg-[#101E21] h-screen'>
      <div className='flex flex-col justify-between w-full max-w-6xl p-4 md:flex-row md:space-x-4'>
        <div className='w-full md:w-[80vw] rounded-xl mb-4 md:mb-0 mr-10'
        data-aos='fade-down'
        data-aos-offset = '200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing = 'ease-in-out'>
          <img src={chef} alt='Chef' className='w-full h-auto'></img>
        </div>

        <div className='flex flex-col items-start justify-center w-full md:w-[80vw] ml-10'
        data-aos='fade-up'
        data-aos-offset = '200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing = 'ease-in-out'>
          <h1 className='mb-5 font-serif text-4xl font-bold text-orange-800 transition duration-500 transform hover:scale-110'>About Our Restaurant</h1>
          <p className='font-serif text-orange-100'>LuxeDine is a unique dining destination in the city center. We offer a variety of dishes crafted with fresh, locally-sourced ingredients. Our team is dedicated to providing excellent service in a contemporary setting. Join us for a memorable dining experience at LuxeDine.</p>
          <button className='px-4 py-2 mt-4 text-white bg-transparent border border-orange-800 rounded hover:bg-orange-400'
                            onClick={() => navigate('/contact')} 
                            >Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default About
