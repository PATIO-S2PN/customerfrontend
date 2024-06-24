import React, { useState, useEffect } from 'react';
import About from './About';
import Home from './Home';
import Navbar from '../Components/Navbar';
import Categories from './Categories';
import Specials from './Specials';
import Chefs from './Chefs';
import Gallery from './Gallery';
import Contact from './Contact';
import Animation from './Animation';
import Footer from './Footer';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [navbarColor, setNavbarColor] = useState('transparent');
  const [navbarPosition, setNavbarPosition] = useState('top-2');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'categories', 'specials', 'chefs', 'gallery', 'contact'];
      let currentSection = 'home';
      
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        const { top, bottom } = sectionElement.getBoundingClientRect();
        
        if (top <= 50 && bottom >= 50) {
          currentSection = section;
        }
      });
      
      if (currentSection === 'home') {
        setNavbarColor('transparent');
        setNavbarPosition('top-2');
      } else {
        setNavbarColor('#101E21'); 
        setNavbarPosition('top-0');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  
    return () => clearTimeout(timer); 
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='' style={{ overflowY: 'scroll' }}>
      {isLoading ? <Animation /> : (
        <div className="">
          <div className="">
            <Navbar backgroundColor={navbarColor} positionClass={navbarPosition} isOpen={isOpen} toggleMenu={toggleMenu} />
            <section id="home" className="">
              <Home/>
            </section>
          </div>
          <section id='about' className="">
            <About/>
          </section>
          <section id='categories' className="">
            <Categories/>
          </section>
          <section id='specials' className="">
            <Specials/>
          </section>
          <section id='chefs' className="">
            <Chefs/>
          </section>
          <section id='gallery' className="">
            <Gallery/>
          </section>
          <section id='contact' className="">
            <Contact/>
          </section>
          <section id='footer' className="">
            <Footer/>
          </section>
        </div>
      )}
    </div>
  );
}

export default Main;
