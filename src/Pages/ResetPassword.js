import React from 'react'
import resetbg from '../Assets/resetbg.jpg'
import logo from '../Assets/logonew.svg'

export default function ResetPassword() {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-center bg-cover bg-opacity-80' style={{backgroundImage:`url(${resetbg})`}}>
      <div className='flex flex-col items-center justify-center bg-opacity-80 shadow bg-[#D9D4D0] rounded-2xl hover:shadow-3xl'>
        <img className='w-[250px] h-[80px] ' src={logo}></img>
        <div className='flex flex-col items-center justify-center px-10 py-2 bg-transparent border shadow rounded-b-2xl hover:shadow-lg'>
            <h1 className='font-serif text-3xl text-black transform hover:scale-x-[-1] text-bold duration-500'>Reset Password</h1>
            <h2 className='text-xl text-gray-600'>Enter your email to reset your password</h2>
        </div>
        
      </div>
    </div>
  )
}
