import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import register from '../Assets/regis.jpeg';
import { FcGoogle } from "react-icons/fc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Register() {

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
      const response = await axios.post('http://localhost:8001/signup', { email, password, firstName, lastName, phone });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp();
  };

  return (
    
    <div className='flex flex-col items-start w-full h-screen md:flex-row'>
     
      <div className='relative w-full md:w-1/2 h-half md:h-full'>
        <img src={register} alt='login' className='object-cover w-full h-full' />
      </div>
      
      <div className='w-full md:w-1/2 h-half md:h-full bg-[#101E21] flex flex-col p-custom'>
        
        <div className='justify-center'>
            <h1 className='font-serif text-3xl text-[#FFFFFF] text-center mb-10 mt-20'>Create Account</h1>
        </div>
        <div className='flex justify-center mb-4 space-x-5'>
        <a href="#" className="cursor-pointer">
                    <FcGoogle size={30} />
            </a> 
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
        
        <input type='text' className='mb-8 text-sm font-serif p-2.5 text-white bg-slate-800 rounded-lg h-10 border-b-2 border-[#FADBCF] focus:outline-none'  value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name*' required/>
        <input type='text' className='mb-8 text-sm font-serif p-2.5 text-white bg-slate-800 rounded-lg h-10 border-b-2 border-[#FADBCF] focus:outline-none'  value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name*' required/>

        <input type='text' className='mb-8 text-sm font-serif p-2.5 text-white bg-slate-800 rounded-lg h-10 border-b-2 border-[#FADBCF] focus:outline-none'  value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email*' required/>
        <input type='text' className='mb-8 text-sm font-serif p-2.5 text-white bg-slate-800 rounded-lg h-10 border-b-2 border-[#FADBCF] focus:outline-none'  value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone*' required/>

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

        <div className='flex justify-center '>
            <button onClick={handleSubmit} className=' text-white bg-[#A34031] rounded-lg h-10 w-60 justify-center mb-6 text-xl '>Register</button>   
        </div> 
        
        <div className='flex'>
            <p className='text-[#E3D0D0] font-serif'>Already have an account?</p>
            <a href='#' className='text-[#1889F2] font-serif text-sm ml-2'>Log in</a>
        </div>    
        
    </div>
  </div>
  )
}

export default Register;