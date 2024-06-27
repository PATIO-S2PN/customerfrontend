import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import register from '../Assets/regis.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import { customerBackendUrl } from '../config';
import { GoogleLogin } from '@react-oauth/google';

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const signUp = async () => {
    try {
      const response = await axios.post(`${customerBackendUrl}/signup`, { email, password, phone });
      console.log(response.data);

      const loginResponse = await axios.post(`${customerBackendUrl}/login`, { email, password });
      console.log(loginResponse.data);
      console.log("login successful");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp();
    navigate('/login');
  };

  return (
    <div className='flex flex-col w-full h-screen md:flex-row'>
      <div className='relative w-full h-1/2 md:w-1/2 md:h-full hidden md:block'>
        <img src={register} alt='login' className='object-cover w-full h-full' />
        <img src={logo} alt='logo' className='absolute z-10 h-[50px] w-[170px] top-5 left-5 cursor-pointer' onClick={() => navigate("/")} />
      </div>

      <div className='flex flex-col justify-center w-full h-full md:w-1/2 bg-[#101E21] p-8'>
        <div className='flex justify-center mb-10'>
          <h1 className='font-serif text-3xl text-[#FFFFFF]'>Create Account</h1>
        </div>

        <form className='space-y-4' onSubmit={handleSubmit}>
          <input 
            type='email' 
            className='w-full px-4 py-2 text-sm text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Email*' 
            required 
          />
          <input 
            type='text' 
            className='w-full px-4 py-2 text-sm text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400' 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder='Phone*' 
            required 
          />

          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='w-full px-4 py-2 text-sm text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'
              placeholder='Password*'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute text-white cursor-pointer top-3 right-3"
              onClick={handleToggle}
            />
          </div>

          <a href='#' className='block text-right text-sm text-orange-400'>Forgot Password?</a>

          <div className='flex justify-center'>
            <button 
              type='submit' 
              className="w-full px-4 py-2 text-lg text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg hover:from-pink-600 hover:to-orange-500 focus:outline-none focus:ring-4 focus:ring-pink-300"
            >
              Register
            </button>
          </div>
        </form>

        <div className='flex justify-center mt-4'>
          <p className='text-[#E3D0D0]'>Already have an account?</p>
          <button onClick = {() => navigate('/login')}
           className='ml-2 text-orange-400'>Log in</button>
        </div>
      </div>
    </div>
  )
}

export default Register;
