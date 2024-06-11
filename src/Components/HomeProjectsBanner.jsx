import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomeProjectsBanner = () => {

    return (
        <React.Fragment>
            <div className="parent bo   rder-4 bg-[#111827] p-4 flex justify-center items-center flex-col ">
                <h1 data-aos="fade-up-right" className='text-2xl md:text-4xl text-center text-white font-bold my-6'>Want to View Our Projects ? </h1>
                <button className=' my-4  border rounded-full p-3  text-xl bg-white text-black  hover:scale-105 transition duration-300'>
                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='flex justify-center gap-4' to='/portfolio'>
                        Our Projects
                        <svg fill="#000000" width="30px" height="30px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
                            <path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" style={{ fill: '#000' }}>
                            </path>
                        </svg>

                    </Link>
                </button>
            </div>
        </React.Fragment>
    )
}

export default HomeProjectsBanner
