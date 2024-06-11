import React from 'react';
import rightscg from "../assets/right.svg";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import facebooksvg from "../assets/facebook-svgrepo-com.svg";
import linkedinsvg from "../assets/linkedin-svgrepo-com.svg";
import instasvg from "../assets/instagram-svgrepo-com.svg"
import whastappsvg from "../assets/whatsapp-svgrepo-com.svg";
import uparrow from "../assets/circle-white-aroow-up.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
  const [text] = useTypewriter({
    words: [
      'Web Developer',
      'Shopify Expert',
      'WordPress Specialist',
      'App Developer',
      'Blockchain Developer',
      'Video Editor'
    ],
    loop: 0,
    typeSpeed: 150,
    deleteSpeed: 100,
    delaySpeed: 1000,
  });

  return (
    <footer className="text-center  bg-black ">
      <div className='flex p-8 justify-around'>
        <h1 className="text-lg md:text-3xl text-white w-2/4 font-bold">
          Are you looking for{' '}
          <span className='text-[#ffc107]'>{text}</span>
          <span className='text-ye'>
            <Cursor />
          </span>
        </h1>
        <button className='text-base md:text-xl max-h-14 text-black hover:scale-105   border p-3 rounded-full flex justify-center gap-4 items-center bg-white  transition duration-300'>
          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='flex justify-center gap-4' to='/contact'>
            Contact US
            <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
              <path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" style={{ fill: '#000' }}>
              </path>
            </svg>

          </Link>
        </button>
      </div>
      {/* Down  */}
      <div className="md:flex justify-around  bg-[#0f0f0f] w-full text-white">
        <div className="left flex md:w-2/4   py-14 flex-col justify-center items-center text-center">
          <h3 className='text-white font-bold text-xl tracking-[0.2em]'>READY TO DO THIS</h3>
          <h1 className='text-6xl mb-8 font-bold'>Let's get to work</h1>
          <button className='text-xl    border p-3 rounded-full bg-white text-black hover:scale-105 transition duration-300'>
            <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='flex gap-4 justify-center items-center' to='/portfolio'>
              Our Portfolio
              <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
                <path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" style={{ fill: '#000' }}>
                </path>
              </svg>
            </Link>
          </button>
        </div>
        {/* right */}
        <div className="right w-screen md:w-2/4 py-14 text-start  flex justify-around gap-4">
          <div className="one">
            <h1 className='font-bold text-2xl  md:text-3xl mb-4'>Qick Links</h1>
            <ul className='text-[#b0aeb7]  md:text-lg'>
              {/* <li className='hover:text-white cursor-pointer'>GDPR</li> */}
              <li className='hover:text-white cursor-pointer'>
                <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/terms-and-conditions'>
                  Terms and Conditions
                </Link>
              </li>
              <li className='hover:text-white cursor-pointer'>
                <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/privacypolicy'>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="two ">
            <h1 className='font-bold text-2xl md:text-3xl mb-4'>Say Hello</h1>
            <ul className='text-[#b0aeb7]   md:text-lg'>
              <li className='hover:text-white cursor-pointer'>contact@regnerdigitals.tech</li>
              <li className='hover:text-white cursor-pointer'>hr@regnerdigitals.tech</li>
              <li className=' mt-2 flex gap-4 cursor-pointer'>
                <a target="_blank" href="https://www.facebook.com/people/Regner-Digitals/61560692600806/">
                  <img className="w-8" src={facebooksvg} alt="Facebook" />
                </a>
                <a target="_blank" href="https://www.instagram.com/regnerdigitalss/">
                  <img className="w-8" src={instasvg} alt="Instagram" />
                </a>

                <a target="_blank" href="https://www.linkedin.com/company/regnerdigitals">
                  <img className="w-8" src={linkedinsvg} alt="Linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Last */}
      <div className='bg-black flex justify-between p-6 items-center'>
        <h1 className='text-white text-base md:text-xl font-semibold'>© 2024. All rights reserved by Regner <span className='text-[#ffc107]'>Digitals</span>.</h1>
        <div className="buttons flex gap-4">
          <img className='w-12 md:w-16 cursor-pointer' src={whastappsvg} />
          <img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='w-8 md:w-12 mr-6 md:mr-0 cursor-pointer ' src={uparrow} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
