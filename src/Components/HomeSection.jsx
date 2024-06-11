import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bggg from "../assets/Vector1_2646.jpg"
import { Link } from 'react-router-dom';
import rightscg from "../assets/white-right.svg";


const HomeSection = () => {
  const bgStyle = {
    backgroundImage: `url(${bggg})`,
  };
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (

    <div style={bgStyle} className='bg-center bg-no-repeat py-32 px-12  lg:p-36   w-full '>
      <div className="right-text ml-4 md:ml-0 md:w-2/4" data-aos="fade-down-right" >
        <h1 className='text-white font-bold text-2xl md:text-4xl lg:text-5xl mb-4'>Regner <span className='text-[#ffc107]'>Digitals</span>  <br /><span>Serve Always Best</span></h1>
        <p className='text-gray-300 font-medium text-xl mb-12'>Dive into a seamless experience with our cutting-edge solutions, tailored to elevate your business in the digital era.</p>
        <h3 className='text-gray-300 mb-6 font-bold text-xl lg:text-2xl'>We are here to help you grow</h3>
        <button data-aos="fade-up-right" className='md:text-base lg:text-xl    font-bold hover:border p-3 rounded-full  bg-black hover:bg-transparent text-white  transition duration-300'>
          <Link className=' flex gap-4 justify-center items-center' to='/about'>
            About Us <img src={rightscg} className='w-8' />
          </Link>
        </button>
      </div>
    </div>

  );
}

export default HomeSection;
