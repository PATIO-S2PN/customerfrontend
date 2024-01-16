import React, { useState } from 'react';

function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

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
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="p-8 bg-white rounded shadow-md w-96">
        <h2 className="mb-8 text-2xl font-bold text-gray-700">Reset Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="newPassword" className="block mb-2 text-sm text-gray-600">New Password</label>
            <input type="password" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-900" required />
          </div>
          <div className="mb-5">
            <label htmlFor="confirmPassword" className="block mb-2 text-sm text-gray-600">Confirm Password</label>
            <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-900" required />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
          </div>
          <button type="submit" className="w-full px-4 py-2 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-500">Reset</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
