import React from 'react'
import { useState } from 'react';
import About from './About';
import Home from './Home';
import Navbar from '../Components/Navbar';
import Categories from './Categories';


const Main = () => {
    const [isOpen,setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }
  return (
      <div className=''>
      <div className="">
        <div className="">
            <Navbar isOpen={isOpen}
                    toggleMenu={toggleMenu}
            />

            <section id="home" 
                     className="">
              <Home/>
            </section>
        </div>
        
        <section  id='about'
                  className="">
          <About/>
        </section>

        <section  id='categories'
                  className="">
          <Categories/>
        </section>

</div>
</div>
  )
}

export default Main
