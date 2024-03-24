import React from 'react'
import { useState } from 'react';
import About from './About';
import Home from './Home';
import Navbar from '../Components/Navbar';
import Categories from './Categories';
import Specials from './Specials';
import Chefs from './Chefs';
import Gallery from './Gallery';


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

        <section  id='specials'
                  className="">
          <Specials/>
        </section>

        <section  id='chefs'
                  className="">
          <Chefs/>
        </section>

        <section  id='gallery'
                  className="">
          <Gallery/>
        </section>

</div>
</div>
  )
}

export default Main
