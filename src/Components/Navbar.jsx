import React, { useState } from 'react';
import closeSvg from "../assets/cross-svgrepo-com (1).svg"; // Add a close icon for the menu
import facebooksvg from "../assets/facebook-svgrepo-com.svg";
import linkedinsvg from "../assets/linkedin-svgrepo-com.svg";
import instasvg from "../assets/instagram-svgrepo-com.svg"
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const about = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <React.Fragment>
      <div className='absolute right-0    text-white  w-full'>
        <div className='flex justify-between items-center p-8'>
          <h1 className={`logo ${about.pathname === '/about' ? 'text-black' : 'text-white'} text-xl md:text-2xl lg:text-4xl font-bold`}>
            <Link to='/'>
              Regner <span className='text-[#ffc107]'>Digitals</span>
            </Link>
          </h1>
          <div className="right flex gap-4">
            {/* <button className={`'md:text-base ${about.pathname === '/about' ? 'bg-transparent' : 'bg-black'} lg:text-xl hidden md:block  border  p-3 rounded-full ${about.pathname === '/about' ? 'text-black' : 'text-white'}    hover:text-white ${about.pathname === '/about' ? 'hover:bg-black' : 'hover:bg-transparent'}   transition duration-300`}>
              <Link className=' md:flex gap-4 justify-center items-center' to='/portfolio'>
                Our PortFolio
                <svg fill="#ffffff" width="30px" height="30px" viewBox="-2.4 -2.4 28.80 28.80" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color" stroke="#ffffff" stroke-width="0.00024000000000000003">

                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                  <g id="SVGRepo_iconCarrier">

                    <path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" className={`${about.pathname === '/about' ? 'fill-black' : 'fill-white'}`} />
                  </g>

                </svg>
              </Link>
            </button> */}
            {/* dropdown  */}
            <div className="relative inline-block text-left">
              {/* <button
                onClick={toggleDropdown}
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-white bg-black  hover:bg-transparent transition-all duration-300   font-medium rounded-full border  text-lg p-3 text-center inline-flex items-center "
                type="button"
              >
                Services{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button> */}
              {/* Dropdown menu */}
              {/* {isOpen && (
                <div
                  id="dropdown"
                  className="absolute left-0 z-10 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )} */}
            </div>
            {/* dropdown end */}
            <button className={`'md:text-base ${about.pathname === '/about' ? 'bg-transparent' : 'bg-black'} lg:text-xl hidden md:block  border  p-3 rounded-full ${about.pathname === '/about' ? 'text-black' : 'text-white'}    hover:text-white ${about.pathname === '/about' ? 'hover:bg-black' : 'hover:bg-transparent'}   transition duration-300`}>
              <Link className=' md:flex gap-4 justify-center items-center' to='/contact'>
                Start a Project
                <svg fill="#ffffff" width="30px" height="30px" viewBox="-2.4 -2.4 28.80 28.80" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color" stroke="#ffffff" stroke-width="0.00024000000000000003">

                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                  <g id="SVGRepo_iconCarrier">

                    <path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" className={`${about.pathname === '/about' ? 'fill-black' : 'fill-white'}`} />

                  </g>

                </svg>
              </Link>
            </button>
            <svg width="50px" height="50px" className={`w-10 block cursor-pointer `} onClick={toggleMenu} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
              <g id="SVGRepo_iconCarrier"> <path d="M4 6H20M7 12H17M9 18H15" stroke={`${about.pathname === '/about' ? '#000' : '#ffffff'}`} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </g>
            </svg>
          </div>
        </div>

      </div>

      {/* Sliding Menu */}
      <div className={`fixed ${about.pathname === '/about' ? 'bg-black' : 'backdrop-blur-md'} h-full flex justify-center items-center  top-0 right-0 z-20 opacity-100 w-full   md:w-2/6   text-[#ffffff] shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <img src={closeSvg} className='w-8 bg-white rounded-full absolute top-8 right-8 cursor-pointer' onClick={toggleMenu} />
        <div className='p-8 flex flex-col '>
          <ul className='text-center flex flex-col gap-4'>
            <li className='font-bold text-2xl cursor-pointer hover:text-white'>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li className='font-bold text-2xl cursor-pointer hover:text-white'>
              <Link to='/about'>
                About Us
              </Link>
            </li>
            <li className='font-bold text-2xl cursor-pointer hover:text-white'>
              <Link to='/contact'>
                Contact US
              </Link>
            </li>
          </ul>
          <div className="icons my-6 flex justify-center items-center gap-6">
            <a target="_blank" className='hover:bg-white rounded-full border p-2' href="https://www.facebook.com/people/Regner-Digitals/61560692600806/">
              <img className="w-12" src={facebooksvg} alt="FaceBook" />
            </a>
            <a target="_blank" className='hover:bg-white rounded-full border p-2' href="https://www.instagram.com/regnerdigitalss/">
              <img className="w-12" src={instasvg} alt="Instagram" />
            </a>
            <a target="_blank" className='hover:bg-white rounded-full border p-2' href="https://www.linkedin.com/company/regnerdigitals">
              <img className="w-12" src={linkedinsvg} alt="Linkedin" />
            </a>
          </div>
          <div className="btns flex flex-wrap justify-center items-center gap-6 my-4">
            {/* <button className='w-full text-xl md:hidden font-bold border p-3 rounded-full  hover:bg-white hover:text-black transition duration-300'>
              Our Portfolio
            </button> */}
            <button className='w-full text-xl md:hidden  font-bold border p-3 rounded-full  hover:bg-white hover:text-black transition duration-300'>
              <Link to='/contact'>
                Start a Project
              </Link>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
};

export default Navbar;
