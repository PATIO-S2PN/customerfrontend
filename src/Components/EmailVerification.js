import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmailVerification = () => {
  const { token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState('Verifying your email...');

  useEffect(() => {
    axios.get(`http://localhost:8001/verify/${token}`)
      .then(() => {
        setVerificationStatus("Email verified successfully!");
        // Optionally, redirect the user or update the state to show a success message
      })
      .catch(error => {
        console.error('Error:', error);
        setVerificationStatus("Verification failed. Please try again or contact support.");
        // Show an error message
      });
  }, [token]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-lg font-semibold text-gray-900 mb-4">{verificationStatus}</h1>
        <h1>Hiii</h1>
        {/* Conditionally render additional messages or actions based on verificationStatus */}
      </div>
    </div>
  );
};

export default EmailVerification;
