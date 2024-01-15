import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import "./home.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 600,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom', 

});

const Home = () => {
  return(
    <>
    <Navbar />
    <div className='home'>
      <div className='softwareIntro'>
        <div className='wordIntro' data-aos="fade-down">
          <h1>blueHike</h1>
          <h2>
          my name is bluehike, a passionate Software developer and a photographer.
          </h2>
          <h3></h3>
          </div>
        <div className='dpIntro'>
          <img src='simo.jpg' />
        </div>
      </div>
      <div className='projectIntro'></div>
      <div className='photoIntro'>
        <div className='bg-image'></div>
        <div className='bg-text' data-aos="fade-down">Hello world. welcome to my worlds</div>
      </div>
    </div>
      
        <Footer />
    </>
  
  )
}

export default Home