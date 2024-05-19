import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import register from '../Assets/regis.jpeg';
//import { FcGoogle } from "react-icons/fc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import logo from '../Assets/logonew.svg';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import Swal from 'sweetalert2';

// login alert
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

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  // Function to toggle password visibility
  const handleToggle = () => {
    setShowPassword(!showPassword);
  };

  // Function to sign up
  const signUp = async () => {
    try {
      const response = await axios.post('http://localhost:8001/signup', { email, password, firstName, lastName, phone });
      console.log(response.data);

      // after successfull login, user is already logged in
      const loginResponse = await axios.post('http://localhost:8001/login', { email, password });
      console.log(loginResponse.data);
      console.log("login successful");
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle form submission(register button)
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp();
  //  handleLoginClick();
    navigate('/');
  };

  // Google sign in
  const signinClick = useGoogleLogin({
      onSuccess: async (codeResponse) => {
        console.log(codeResponse);
        if (codeResponse && codeResponse.profileObj) {
          const { email, givenName: firstName, familyName: lastName } = codeResponse.profileObj;
          // Assuming you have a phone number, otherwise you'll need to handle this
          const phone = codeResponse.profileObj.phoneNumber || '';

          try {
            const response = await axios.post('http://localhost:8001/signup', { email, password, firstName, lastName, phone });
            console.log(response);
          } catch (error) {
            console.error(error);
          }
        }
      },
    }); 

    // Function to handle login
    /*const handleLoginClick = async () => {
      //navigate('/');
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
   // tocken***************************************************
           const tocken = response.data.verifyToken;
   
           localStorage.setItem('token', tocken);
   
           // ***********************************************
         } else {
   
         }
       } catch (error) {
         showToast('error', 'Login Failed!');
   
         // Handle network or other errors
   
         console.error('Login error:', error);
         setLoginMessage('Login error: ' + error.message);
   
       }
     }*/
     

  return (
    
    <div className='flex flex-col items-start w-full h-screen md:flex-row'>
     
      <div className='relative w-full md:w-1/2 h-half md:h-full'>
      <img src={register} alt='login' className='object-cover w-full h-screen' />
      <img src={logo} alt='logo' className='absolute z-10 h-[50px] w-[170px] top-10 left-10' onClick={() => navigate("/")} />

      </div>
      
      <div className='w-full md:w-1/2 h-half md:h-screen bg-[#101E21] flex flex-col p-custom'>
        
        <div className='justify-center'>
            <h1 className='font-serif text-3xl text-[#FFFFFF] text-center mb-10 '>Create Account</h1>
        </div>
        <div className='flex justify-center mb-4 space-x-5'>
        <a href="#" className="cursor-pointer">
          {/*
                    <FcGoogle size={30} onClick={() => signinClick()}/>
                    
                    */}
                    
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
        
        <div className='flex justify-center mb-5'>
            <button onClick={handleSubmit} class="relative h-10 w-60 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
            <span class="relative flex items-center justify-center w-full h-full px-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Register
            </span>
            </button>
        </div>
        
        
        <div className='flex'>
            <p className='text-[#E3D0D0] font-serif'>Already have an account?</p>
            <a href='/login' className='text-[#1889F2] font-serif text-sm ml-2'>Log in</a>
        </div>    
        
    </div>
  </div>
  )
}

export default Register;