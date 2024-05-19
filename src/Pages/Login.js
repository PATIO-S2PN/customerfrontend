import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import loginI from '../Assets/Login.jpg';
//import { FcGoogle } from "react-icons/fc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logonew.svg';
import Swal from 'sweetalert2';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import Animation from './Animation';
import { login } from '../Slices/userSlice';
import { useDispatch } from 'react-redux';

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
  const [email, setEmail] = useState(''); // Initialize email and password
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleLoginClick = async () => {
    try {
      const response = await axios.post('http://localhost:8001/login', {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        // Login was successful
        showToast('success', 'Login Successful!');
        navigate('/');
        console.log(response.data.Email);
        // token
        const token = response.data.token;

        console.log('Token:', token);

        localStorage.setItem('token', token);
        
      } else {

      }
    } catch (error) {
      showToast('error', 'Login Failed!');

      // Handle network or other errors

      console.error('Login error:', error);
      setLoginMessage('Login error: ' + error.message);

    }
  }
  
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  const loginclick = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
  });

  return (
    <div className='flex flex-col items-start w-full h-screen md:flex-row'>
      <div className='relative w-full md:w-1/2 h-half md:h-full'>
        <img src={loginI} alt='login' className='z-0 object-cover w-full h-full' />
        <img src={logo} alt='logo' className='absolute z-10 h-[50px] w-[170px] top-10 left-10' onClick={() => navigate("/")} />
        
      </div>
      
      <div className='w-full md:w-1/2 h-half md:h-full bg-[#101E21] flex flex-col p-custom'>
        <div className='justify-center'>
            <h1 className='font-serif text-3xl text-[#FFFFFF] text-center mb-10 mt-20'>User Login</h1>
        </div>

        <div className='flex justify-center mb-4 space-x-5'>
          {/*
            <a href="#" className="cursor-pointer">
                    <FcGoogle size={30} onClick={() => loginclick()}/>
            </a> 
            */}
            
            <a href="#" className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 h-7 w-7"
                 fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>           
            <a href="#" className="cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" className="text-blue-600 h-7 w-7"
                 fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>             
        </div>

        <div className="flex items-center mb-4 space-x-4 text-white">
            <hr className="flex-grow border-white"/>
            <span className='font-serif'>or</span>
            <hr className="flex-grow border-white"/>
        </div>
        
        <input type='text' 
               className='mb-8 text-sm font-serif p-2.5 text-white bg-slate-800 rounded-lg h-10 border-b-2 border-[#FADBCF] focus:outline-none'  
               placeholder='Email*' required
               onChange={(e) => setEmail(e.target.value)}/>        
        
        <div className='relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            className='mb-3 text-sm font-serif p-2.5 text-white bg-slate-800 rounded-lg h-10 border-b-2 w-full border-[#FADBCF] focus:outline-none'
            placeholder='Password*'
            required
            onChange={(e) => setPassword(e.target.value)}       

          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="absolute text-white cursor-pointer top-3 right-3"
            onClick={handleToggle}
          />
        </div>

        <div className='flex items-center justify-between space-x-3 space-y-0 mb-7'>
            <div className='flex items-center space-x-2'>
                <input type="checkbox" className="w-4 h-4 text-blue-600 border border-black form-checkbox" />
                <p className='text-[#E3D0D0] font-serif text-sm'>Remember me</p>
            </div>
            <a href='#' className='text-[#1889F2] font-serif text-sm mb-12'>Forgot Password?</a>   
        </div>

        <div className='flex justify-center mb-5'>
        <button onClick={handleLoginClick} class="relative h-10 w-60 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br 
        from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white
         dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span class="relative flex items-center justify-center w-full h-full px-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Login
            </span>
            </button>
        </div>
             
        <div className='flex items-center space-x-2'>
            <p className='text-[#E3D0D0] font-serif'>Don't have an account yet?</p>
            <a href='/register' className='text-[#1889F2] font-serif ml-2'>Create Account</a>
        </div>
 
    </div>
  </div>
  )
}

export default Login;
