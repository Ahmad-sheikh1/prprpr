import React, { useEffect } from 'react';
import webscg from "../assets/browser-coding-svgrepo-com.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import shopsvg from "../assets/shopify-svgrepo-com.svg"
import blocksvg from "../assets/blockchain-svgrepo-com.svg"
import appsvg from "../assets/mobile-alt-svgrepo-com.svg"
import wordpsvg from "../assets/wordpress-svgrepo-com (2).svg"
import videosvg from "../assets/video-svgrepo-com.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const services = [
        {
            id: 1,
            name: "Web Development",
            icon: webscg,
            description: "At Regner Digitals, we specialize in creating dynamic, responsive, and visually appealing websites that drive engagement and growth. Our team of expert developers uses the latest technologies and best practices to deliver websites that not only look great but also perform exceptionally well."
        },
        {
            id: 2,
            name: "BlockChain Development",
            icon: blocksvg,
            description: "At Regner Digitals, we offer cutting-edge blockchain development solutions that transform businesses with secure, transparent, and efficient decentralized applications. Our skilled developers leverage blockchain technology to deliver innovative and robust solutions tailored to your needs."
        },
        {
            id: 3,
            name: "App Development",
            icon: appsvg,
            description: "At Regner Digitals, we create innovative and user-friendly mobile applications that enhance user engagement and drive business growth. Our team of skilled developers ensures that each app is tailored to meet your specific needs and delivers a seamless experience on both iOS and Android platforms."
        },
        {
            id: 4,
            name: "Wordpress",
            icon: wordpsvg,
            description: "At Regner Digitals, we offer top-notch WordPress development services to help you create a powerful and flexible website. Our experienced team leverages the full potential of WordPress to build sites that are easy to manage and scalable to your business needs."
        },
        {
            id: 5,
            name: "Shopify",
            icon: shopsvg,
            description: "At Regner Digitals, we offer top-notch Shopify development services designed to help you build a powerful and profitable online store. Our skilled developers are adept at creating customized Shopify solutions that cater to your specific business needs."
        },
        {
            id: 6,
            name: "Video Editting",
            icon: videosvg,
            description: "At Regner Digitals, we offer top-notch video editing services to bring your vision to life. Our skilled editors transform raw footage into captivating videos that tell your story and engage your audience."
        },
    ];

    return (
        <React.Fragment>
            <div className='flex px-8 bg-black overflow-hidden p-12 flex-col gap-4 justify-center items-center'>
                <div className="headings flex flex-col text-center md:w-2/4 justify-center items-center mb-8">
                    <h1 className='font-bold text-4xl mb-4 text-white' data-aos="fade-up-right">Why Choose US</h1>
                    <p className='font-thin w-screen md:text-xl p-2 text-white' data-aos="fade-up-right">Our software development company is dedicated to providing innovative solutions that help businesses of all sizes thrive. From custom web and mobile app development WordPress , Shopify , Video Editting , to BlockChain we have the expertise and resources to turn your vision into a reality.</p>
                </div>
                <div className='w-full lg:px-8 text-center '>
                    <Slider {...settings}>
                        {services.map((skill) => (
                            <div key={skill.id} className='hover:bg-white transition ease-in-out hover:scale-105  duration-500  hover:text-black  cursor-pointer max-w-sm p-3 md:p-6 bg-[#1F2937] text-white rounded-lg shadow-lg md:mx-2'>
                                <div className="flex justify-center items-center">
                                    <img src={skill.icon} className='w-40' alt={skill.name} />
                                </div>
                                <h2 data-aos="fade-up-right" className="mt-6 text-xl md:text-2xl font-bold">{skill.name}</h2>
                                <p className="mt-4 text-sm md:text-base">{skill.description}</p>
                                <Link to='/contact' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block mt-6 text-lg font-bold  hover:text-gray-300">
                                    LET'S START
                                    <svg className="inline-block ml-2 w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.293-10.707a1 1 0 00-1.414 1.414L11.586 10H7a1 1 0 000 2h4.586l-1.707 1.707a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414l-3-3z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </React.Fragment>
    );
}

export default WhyChooseUs;
