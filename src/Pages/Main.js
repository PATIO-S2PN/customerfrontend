import React from 'react'
import { useState } from 'react';
import About from './About';
import Home from './Home';
import Navbar from '../Components/Navbar';
import Categories from './Categories';
import Specials from './Specials';
import Chefs from './Chefs';
import Gallery from './Gallery';
import Contact from './Contact';
import Animation from './Animation';
import { useEffect } from 'react';
import Footer from './Footer';

const Main = () => {
  const [isOpen,setIsOpen] = useState(false);
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const [isLoading, setIsLoading] = useState(true);
  //**************************************** */

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed
  
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  //************************************************************* */
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }
  return (
      <div className=''>
        {isLoading ? <Animation /> :(

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

        <section  id='contact'
                  className="">
          <Contact/>
        </section>

        <section  id='footer'
                  className="">
          <Footer/>
        </section>

</div>
)}
</div>
  )
}

export default Main
