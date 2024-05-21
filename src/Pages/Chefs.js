import React, { useState, useEffect } from 'react';
import axios from 'axios';
import chef from '../Assets/chef.png';

const Chefs = () => {
  //const [chefs, setChefs] = useState([]);

    const chefs = [
        {
            index: 0,
            name: 'John Doe',
            position: 'Head Chef',
            image: chef,
        },
        {
            index: 1,
            name: 'John Doe',
            position: 'Head Chef',
            image: chef,
        },
        {
            index: 2,
            name: 'John Doe',
            position: 'Head Chef',
            image: chef,
        },
        {
            index: 3,
            name: 'John Doe',
            position: 'Head Chef',
            image: chef,
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
        <div key={index} className={index === 0 || index === 2 ? "md:mt-20" : ""}>
          <div className='flex flex-col items-center justify-center border-4 border-orange-800 lg:h-[600px]'>
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
