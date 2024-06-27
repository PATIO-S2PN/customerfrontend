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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
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
      <div className='absolute inset-0 w-full md:relative md:w-1/2 h-1/2 md:h-full'>
        <img src={register} alt='login' className='object-cover w-full h-full' />
        <img src={logo} alt='logo' className='absolute z-10 h-[50px] w-[170px] top-10 left-10 cursor-pointer' onClick={() => navigate("/")} />
      </div>

      <div className='w-full h-1/2 md:w-1/2 md:h-full bg-[#101E21] flex flex-col p-6 z-20'>
        <div className='flex justify-center'>
          <h1 className='font-serif text-3xl text-[#FFFFFF] text-center mb-10'>Create Account</h1>
        </div>

        <input type='text' className='mb-8 text-sm font-serif p-2.5 text-white bg-slate-800 rounded-lg h-10 border-b-2 border-[#FADBCF] focus:outline-none' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email*' required />
        <input type='text' className='mb-8 text-sm font-serif p-2.5 text-white bg-slate-800 rounded-lg h-10 border-b-2 border-[#FADBCF] focus:outline-none' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone*' required />

        <div className='relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            className='mb-2 text-sm font-serif p-2.5 text-white bg-slate-800 rounded-lg h-10 border-b-2 w-full border-[#FADBCF] focus:outline-none'
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

        <a href='#' className='text-[#1889F2] font-serif text-sm mb-12'>Forgot Password?</a>

        <div className='flex justify-center mb-5'>
          <button onClick={handleSubmit} className="relative h-10 w-60 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-lg text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span className="relative flex items-center justify-center w-full h-full px-5 transition-all duration-75 ease-in bg-white rounded-md dark:bg-gray-900 group-hover:bg-opacity-0 font-roboto">
              Register
            </span>
          </button>
        </div>

        {/* <div className="flex items-center mb-4 space-x-4 text-white">
          <hr className="flex-grow border-white" />
          <span className='font-serif'>or</span>
          <hr className="flex-grow border-white" />
        </div>

        <div className='flex justify-center mb-5'>
          <GoogleLogin
            clientId="667873004149-krdiqflalp29bomhrh292q0sos32l2ag.apps.googleusercontent.com" // replace with your client ID
            buttonText="Signin with Google"
            onSuccess={(response) => console.log('success', response)}
            onFailure={(response) => console.log('failure', response)}
            cookiePolicy={'single_host_origin'}
            className="relative h-10 w-60 inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-lg text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-black focus:ring-pink-200 dark:focus:ring-pink-800"
          />
        </div> */}

        <div className='flex justify-center'>
          <p className='text-[#E3D0D0] font-serif'>Already have an account?</p>
          <a href='/login' className='text-[#1889F2] font-serif text-sm ml-2'>Log in</a>
        </div>
      </div>
    </div>
  )
}

export default Register;
