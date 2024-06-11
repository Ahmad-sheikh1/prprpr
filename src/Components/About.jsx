import React, { useEffect, useState } from 'react'
import ticksvg from "../assets/complete-ok-accept-good-tick-svgrepo-com.svg"
import AhmadProfile from "../assets/WhatsApp Image 2024-04-21 at 12.49.19_fdc51916.jpg"
import aleanprofile from "../assets/401858505_2006246806415147_302813496738440042_n.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import bannerimage from "../assets/surface-Pfmow4b9GAY-unsplash.jpg"
import inampic from "../assets/inampic.jpg"
import saqibpic from "../assets/saqibpic.jpg"
import khalipic from "../assets/khalipic.jpeg"
import alihassan from "../assets/alihassan.jpg";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredalean, setIsHoveredalean] = useState(false);

    const imageStyleAlean = {
        filter: isHoveredalean ? 'blur(4px)' : 'none',
        transition: 'filter 0.3s'
    };

    const profileNameStyleAlean = {
        opacity: isHoveredalean ? 1 : 0,
        marginBottom: isHoveredalean ? '20px' : '-20px',
        transition: 'opacity 0.3s, margin-bottom 0.3s',
        color: 'white' // Ensures the text is clearly visible
    };
    const profileNameStyle = {
        opacity: isHovered ? 1 : 0,
        marginBottom: isHovered ? '20px' : '-20px',
        transition: 'opacity 0.3s, margin-bottom 0.3s',
        color: 'white' // Ensures the text is clearly visible
    };

    const imageStyle = {
        filter: isHovered ? 'blur(4px)' : 'none',
        transition: 'filter 0.3s'
    };

    let Employees = [
        {
            Name: "Ahmad Ali Sheikh",
            Logo: AhmadProfile,
            Description: "Expert in  Express , React , Node , Angular , MySQl ",
            Position: "CEO & Full Stack Developer"
        },
        {
            Name: "Muhammad Elliyean",
            Logo: aleanprofile,
            Description: "Expert in WordPress Designing and Development ",
            Position: "ChairMan & WordPress Developer"
        },
        {
            Name: "Inam Khaliq",
            Logo: inampic,
            Description: "Expert in NODE , Express , React , MongoDB , Javascript  ",
            Position: "MERN Stack Developer"
        },
        {
            Name: "Saqib Ayaz",
            Logo: saqibpic,
            Description: "Expert in AWS, Ethereum , Solana , Solidity , Rust ,UniSwap , Aave , ChainLink , Meta Mask SHA-256",
            Position: "BlockChain Developer"
        },
        {
            Name: "Talha Shabbir",
            Logo: khalipic,
            Description: "Expert in Flutter and React Native",
            Position: "Android/IOS Developer"
        },
        {
            Name: "Ali Hassan",
            Logo: alihassan,
            Description: "Expert in Shopify",
            Position: "Shopify Expert"
        },
    ];


    return (
        <React.Fragment>
            <div className='overflow-hidden'>
                {/* Section 1 */}
                <div className='p-6 pt-[100px] overflow-hidden leading-[2rem] w-full  bg-white sm:block text-center  md:text-start  md:flex justify-around items-center'>
                    <div className="img  sm:w-full  md:w-2/4 flex justify-center items-center">
                        <img data-aos="fade-up-right" className=' md:w-3/4   rounded-xl' src={bannerimage} alt="Brand Logo" />
                    </div>
                    <div className="content md:w-2/4 flex flex-col  justify-center items-center md:items-start">
                        <h3 data-aos="fade-up-left" className='text-lg tracking-[0.2em]'>Top Rated Plus Software Company</h3>
                        <h1 data-aos="fade-up-left" className='text-3xl md:text-4xl font-bold mb-4'>We Make Brands <br />Stand Out.</h1>
                        <p data-aos="fade-up-left" className='text-center md:text-start sm:w-full md:w-3/4 text-xl font-thin mb-6'>From start-ups to enterprises, Regner Digitals has helped businesses of all sizes turn their ideas into reality. With a focus on innovation, quality, and customer service, we're the software development partner you can trust to bring your project to life and help you reach your goals.</p>
                        <ul className='flex flex-col gap-2'>
                            <li data-aos="fade-up-left" className='flex gap-4  text-lg md:text-xl'><img className='w-8 ' src={ticksvg} alt="verified" />Developed products that generates $1M+ in annual revenue</li>
                            <li data-aos="fade-up-left" className='flex gap-4 text-lg md:text-xl'><img className='w-8 ' src={ticksvg} alt="verified" />A proven track record of delivering high-quality software solutions for over a decade.</li>
                            <li data-aos="fade-up-left" className='flex gap-4 text-lg md:text-xl'><img className='w-8 ' src={ticksvg} alt="verified" />Every aspect of your brand is meticulously crafted to ensure it leaves a lasting impression and stands out from the competition.</li>
                            <li data-aos="fade-up-left" className='flex gap-4 text-lg md:text-xl'><img className='w-8 ' src={ticksvg} alt="verified" />Expertise in developing custom software solutions for multi-national clients</li>
                        </ul>
                        <button data-aos="fade-up-right" className='p-4  mt-8 w-32 border-black border rounded-full hover:bg-black hover:text-white transition ease-in-out duration-300'>
                            <Link to='/contact'>
                                Contact Us
                            </Link>
                        </button>
                    </div>
                </div>

                {/* Section 2 */}
                <div className='bg-black border-y-8 border-gray-400  p-8 sm:block  md:flex w-full sm:text-center  md:text-start justify-around items-center'>
                    <div
                        className="img-container relative w-full md:w-2/4 flex justify-center"
                        data-aos="fade-up-right"

                    >
                        <img
                            className='profile-image rounded-xl w-3/5 lg:w-2/6'
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            src={AhmadProfile}
                            alt="Sir. Ahmad Ali Sheikh Profile"
                            style={imageStyle}
                        />
                        <div
                            className="font-bold text-2xl profile-name absolute bottom-0 left-1/2 transform -translate-x-1/2"
                            style={profileNameStyle}
                        >
                            Ahmad Ali <br /> <span className='text-[#ffc107]'>CEO</span>
                        </div>
                    </div>
                    <div className="content w-full text-center md:text-start md:w-2/4">
                        <h3 data-aos="fade-up-left" className='text-white font-bold text-base lg:text-lg tracking-[0.2em] mt-4 md:mt-0'>Top Rated Plus Software Company</h3>
                        <h1 data-aos="fade-up-left" className='text-2xl  md:text-3xl lg:text-6xl  mb-4 font-bold text-[#ffc107]'>Innovate. Create. Deliver. Repeat.</h1>
                        <p data-aos="fade-up-left" className='text-white mb-6'>With <span className='text-[#ffc107]'>Ahmad Ali Sheikh</span> a young boy as CEO, the vision of the company is to become the most trusted and respected provider of innovative software solutions and technology that helps businesses to achieve their full potential, with a goal to lead the Industry and bring the latest, most advanced, and industry-changing technology for the betterment of their customers.</p>
                        <p data-aos="fade-up-left" className='text-white '>As CEO, he is fully committed to driving progress and growth in the industry by fostering a culture of innovation and excellence within his company. He is constantly pushing the boundaries of what is possible and inspiring his team to think outside the box. Under his leadership, Appsians will continue to be a leading provider of software solutions that help businesses to scale and achieve success in the digital age.</p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className='bg-white  p-12 sm:block  md:flex w-full text-center   justify-around items-center'>
                    <div className="content w-full text-center md:text-start mb-4 md:mb-0 md:w-2/4">
                        <h3 data-aos="fade-up-right" className='text-black font-bold text-base lg:text-lg tracking-[0.2em]'>Top Rated Plus Software Company</h3>
                        <h1 data-aos="fade-up-right" className='text-2xl  md:text-3xl lg:text-6xl  mb-4 font-bold text-[#ffc107]'>Innovate. Manage ,Valueable ,  Repeat.</h1>
                        <p data-aos="fade-up-right" className='text-black mb-6'>Meet <span className='text-[#ffc107] font-bold text-xl'>M.Eiliyeen</span> the dynamic young leader at the helm of Regner Digitals. With a visionary approach and a passion for innovation, Elliyean is driving the company towards new heights of success in the digital realm.</p>
                        <p data-aos="fade-up-right" className='text-black '>As ChairMan, His strategic thinking, coupled with a relentless dedication to excellence, inspires the team to deliver cutting-edge solutions that exceed client expectations. Under his guidance, Regner Digitals is poised to revolutionize the digital landscape, one project at a time.</p>
                    </div>
                    <div
                        className="img-container relative w-full md:w-2/4 flex justify-center"
                        data-aos="fade-up-left"
                    >
                        <img
                            className='profile-image rounded-xl w-3/5 lg:w-2/6'
                            onMouseEnter={() => setIsHoveredalean(true)}
                            onMouseLeave={() => setIsHoveredalean(false)}
                            src={aleanprofile}
                            alt="Sir. Alean Sheikh Profile"
                            style={imageStyleAlean}
                        />
                        <div
                            className="font-bold text-2xl profile-name absolute bottom-0 left-1/2 transform -translate-x-1/2"
                            style={profileNameStyleAlean}
                        >
                            M.Eiliyeen <br />
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div className='bg-[#2c3441] p-8'>
                    <div className='maincontent flex flex-col justify-center items-center p-4 '>
                        <h1 data-aos="fade-up" className='text-[#ffc107] text-center text-4xl md:text-6xl font-bold mb-4'>Our Executive Team</h1>
                        <p data-aos="fade-up" className='w-full md:w-2/4 mb-4 text-center text-xl text-white'>We are a team of passionate developers, designers, and writers. We are committed to creating a better world by providing the best solutions for our clients.</p>
                    </div>
                    <div className='block md:flex justify-around flex-wrap w-full gap-8'>
                        {
                            Employees.map((Employee) => {
                                return (
                                    <>
                                        <div data-aos="fade-down" className="w-full mb-3 md:mb-0 md:w-2/5 md:h-[30vh] mx-auto   bg-gray-800 text-white p-6 rounded-lg shadow-md">
                                            <div className="flex items-center gap-4 p-4">
                                                <img
                                                    className="w-16 h-16 rounded-full"
                                                    src={Employee.Logo}
                                                    alt="Profile"
                                                />
                                                <div>
                                                    <h2 className="text-2xl font-bold">{Employee.Name}</h2>
                                                    <p className="text-base font-bold">{Employee.Position}</p>
                                                </div>
                                            </div>
                                            <p className="mt-0   text-lg md:text-xl">
                                                {Employee.Description}
                                            </p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default About
