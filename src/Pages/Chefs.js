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
    <div className="grid items-center justify-center h-screen gap-10 m-10 sm:grid-cols-2 lg:grid-cols-4">
      {chefs.map((chef, index) => (
        <div key={index} className={index === 0 || index === 2 ? "md:mt-20" : ""}
        data-aos='fade-down'
        data-aos-offset = '200'
        data-aos-delay='50'
        data-aos-duration='1000'
        data-aos-easing = 'ease-in-out'>
          <div className='flex flex-col items-center justify-center shadow bg-gray-200 lg:h-[600px] rounded-lg hover:shadow-xl hover:scale-110 transition-all duration-500 transform'>
            <img src={chef.image} 
                 alt={chef.name} 
                 className='h-[500px]'/>
            <h3 className='mb-1 text-3xl font-bold font-roboto-Regular-400'>{chef.name}</h3>
            <p className='mb-1 text-lg font-roboto-Regular-400'>{chef.position}</p>
            <p className="text-sm">{chef.description}</p>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Chefs;
