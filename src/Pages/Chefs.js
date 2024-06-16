import React, { useState, useEffect } from 'react';
import axios from 'axios';
import chef from '../Assets/chef.png';
import chef3 from '../Assets/chef3.png';
import chef4 from '../Assets/chef4.png';
import chef5 from '../Assets/chef5.png';

const Chefs = () => {
  //const [chefs, setChefs] = useState([]);

    const chefs = [
        {
            index: 0,
            name: 'Ann Doe',
            position: 'Head Chef',
            image: chef,
        },
        {
            index: 1,
            name: 'Jack Doe',
            position: 'Head Chef',
            image: chef4,
        },
        {
            index: 2,
            name: 'John Doe',
            position: 'Chef',
            image: chef3,
        },
        {
            index: 3,
            name: 'John Doe',
            position: 'Chef',
            image: chef5,
        },
        
    ];
  
  /*useEffect(() => {
    axios.get('http://localhost:8001/chefs')
      .then(response => {
        setChefs(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);*/

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Chefs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {chefs.map((chef, index) => (
          <div key={index}
            className={`flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${index === 0 || index === 2 ? "md:mt-20" : ""}`}
            data-aos='fade-down'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            style={{ height: '500px' }}>
            <img src={chef.image} alt={chef.name} className='h-64 w-64 object-cover rounded-full mb-4 transition-transform duration-500 hover:scale-110' />
            <h3 className='text-2xl font-bold text-gray-700 mb-2'>{chef.name}</h3>
            <p className='text-lg text-gray-500 mb-1'>{chef.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chefs;
