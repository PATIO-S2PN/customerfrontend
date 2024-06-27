import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import loginI from '../Assets/Login.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logonew.svg';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { customerBackendUrl } from '../config';

function showToast(status, message) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#fff7ed',
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  Toast.fire({
    icon: status,
    title: message
  });
}

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleLoginClick();
    }
  }

  const handleLoginClick = async () => {
    try {
      const response = await axios.post(`${customerBackendUrl}/login`, {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        showToast('success', 'Login Successful!');
        navigate('/');
        const token = response.data.token;
        localStorage.setItem('token', token);
      }
    } catch (error) {
      showToast('error', 'Login Failed!');
      console.error('Login error:', error);
    }
  }
  
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col items-start w-full h-screen md:flex-row'>
      <div className='relative w-full md:w-1/2 h-half md:h-full hidden md:block'>
        <img src={loginI} alt='login' className='z-0 object-cover w-full h-full' />
        <img src={logo} alt='logo' className='absolute z-10 h-[50px] w-[170px] top-10 left-10 cursor-pointer' onClick={() => navigate("/")} />
      </div>
      
      <div className='flex flex-col justify-center w-full h-full md:w-1/2 bg-[#101E21] p-8'>
        <div className='flex justify-center mb-10'>
          <h1 className='font-serif text-3xl text-[#FFFFFF]'>User Login</h1>
        </div>

        <form className='space-y-4'>
          <input 
            type='email' 
            className='w-full px-4 py-2 text-sm text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Email*' 
            required 
            onKeyPress={handleKeyPress}
          />
        
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='w-full px-4 py-2 text-sm text-white bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'
              placeholder='Password*'
              required
              onKeyPress={handleKeyPress}
              onChange={(e) => setPassword(e.target.value)}       
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="absolute text-white cursor-pointer top-3 right-3"
              onClick={handleToggle}
            />
          </div>

          <div className='flex items-center justify-between mb-7'>
            <div className='flex items-center space-x-2'>
              <input type="checkbox" className="w-4 h-4 text-blue-600 border border-black form-checkbox" />
              <p className='text-[#E3D0D0] font-serif text-sm'>Remember me</p>
            </div>
            <a href='#' className='text-[#1889F2] font-serif text-sm'>Forgot Password?</a>   
          </div>

          <div className='flex justify-center'>
            <button 
              type='button' 
              onClick={handleLoginClick} 
              className="w-full px-4 py-2 text-lg text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg hover:from-pink-600 hover:to-orange-500 focus:outline-none focus:ring-4 focus:ring-pink-300"
            >
              Login
            </button>
          </div>
        </form>
             
        <div className='flex justify-center mt-4'>
          <p className='text-[#E3D0D0]'>Don't have an account yet?</p>
          <button onClick = {() => navigate('/register')} 
            className='ml-2 text-orange-400'>Create Account</button>
        </div>
      </div>
    </div>
  )
}

export default Login;
