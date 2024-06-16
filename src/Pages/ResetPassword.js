import React, { useState, useEffect } from 'react';
import resetbg from '../Assets/resetbg.webp';
import logo from '../Assets/logonew.svg';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (newPassword && confirmPassword) {
      if (newPassword !== confirmPassword) {
        setError('Passwords do not match.');
      } else {
        setError('');
      }
    }
  }, [newPassword, confirmPassword]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
      // Add your reset password logic here
      alert('Password reset successful!');
    }
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-center bg-cover bg-opacity-80' style={{backgroundImage:`url(${resetbg})`}}>
      <div className='flex flex-col items-center justify-center bg-opacity-80 shadow bg-[#D9D4D0] rounded-2xl hover:shadow-3xl'>
        <img className='w-[250px] h-[80px] ' src={logo} alt='logo'></img>
        <div className='flex flex-col items-center justify-center px-10 py-2 bg-transparent border shadow w-[500px] rounded-b-2xl hover:shadow-lg'>
            <label className='font-serif text-2xl text-black transform hover:scale-x-[-1] text-bold duration-500 mb-3'>Reset Password</label>
            <form onSubmit={handleSubmit} className='w-[400px]'>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" 
                           name="new-password" 
                           id="newPassword" 
                           value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
                           className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                                      border-0 border-b-2 ${error ? 'border-blue-800' : 'border-gray-800'} appearance-none  
                                      focus:outline-none focus:ring-0 focus:border-blue-800 peer`} placeholder=" " required />
                    <label for="newPassword" 
                           className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-900 duration-300 
                                  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                                  rtl:peer-focus:left-auto peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 
                                  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">New Password</label>
                </div>
                
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" 
                           name="confirm-password" 
                           id="confirmPassword" 
                           value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                           className={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent 
                                      border-0 border-b-2 ${error ? 'border-blue-800' : 'border-gray-800'} appearance-none 
                                      focus:outline-none focus:ring-0 focus:border-blue-800 peer`} placeholder=" " required />
                    {error && <p className="mt-1 text-xs text-red-800">{error}</p>}
                    <label for="confirmPassword" 
                           className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-900 duration-300 
                                  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 
                                  rtl:peer-focus:left-auto peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 
                                  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                </div>
                <button type="submit" className="w-full px-4 py-2 mb-5 text-white bg-orange-800 rounded-md text-md hover:bg-orange-100 hover:text-black">Reset</button>
            </form>
        </div>
      </div>
    </div>
  );
}
