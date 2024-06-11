import React, { useEffect, useState } from 'react'
import devsvg from "../assets/web-development-svgrepo.svg"
import blocksvg from "../assets/wallet-svgrepo-com.svg"
import wordsvg from "../assets/wordpress-svgrepo-com.svg"
import videosvg from "../assets/video-editing-svgrepo-com.svg"
import shopifysvg from "../assets/shopify-color-svgrepo-com.svg"
import Appsvg from "../assets/app-design-svgrepo-com.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import webdevelopmentimage from "../assets/webdevelopmentimage.jpg"
import wwordpressimage from "../assets/wordpress-website-development.png"
import BlockChainImage from "../assets/Blockchain-Developer-Hire_-A-Complete-Guide-1.webp"
import ShopifyImage from "../assets/shopify-development-agency.jpg"
import AppImage from "../assets/6410ebf8e483b5758186fbd8_ABM college mobile app dev main.jpg"
import VideoImage from "../assets/KLiC-Video-Editing-2023.jpg"
import { Link } from 'react-router-dom'

const Services = () => {
    const [openSkillId, setOpenSkillId] = useState(null);
    const [rightdetailskill, setrightdetailskill] = useState(null);
    console.log(rightdetailskill);
    const toggleSkill = (skill) => {
        if (openSkillId === skill.id) {
            setOpenSkillId(null);
            setrightdetailskill(null)
        } else {
            setOpenSkillId(skill.id);
            setrightdetailskill(skill)
        }
    };


    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    let Skills = [
        {
            id: 1,
            Skill: "Web Development",
            description: "At Regner Digitals, we specialize in creating dynamic, responsive, and visually appealing websites that drive engagement and growth. Our team of expert developers uses the latest technologies and best practices to deliver websites that not only look great but also perform exceptionally well.",
            icon: devsvg,
            points: ["Custom Design Solutions", "Dedicated support and maintenance to keep your site running smoothly.", "Optimized for all devices, ensuring a seamless user experience.", "SEO-Friendly", "Application Maintenance"],
            Image: webdevelopmentimage
        },
        {
            id: 2,
            Skill: "WordPress Designing & Development",
            description: "At Regner Digitals, we offer top-notch WordPress development services to help you create a powerful and flexible website. Our experienced team leverages the full potential of WordPress to build sites that are easy to manage and scalable to your business needs.",
            icon: blocksvg,
            points: ["Custom Themes", "Plugins Integration", "User-Friendly CMS", "Secure and Reliable"],
            Image: wwordpressimage
        },
        {
            id: 3,
            Skill: "BlockChain Development",
            description: "At Regner Digitals, we offer cutting-edge blockchain development solutions that transform businesses with secure, transparent, and efficient decentralized applications. Our skilled developers leverage blockchain technology to deliver innovative and robust solutions tailored to your needs.",
            icon: wordsvg,
            points: ["Custom Blockchain Solutions", "Enhanced Security", "Smart Contract Development", "End-to-End Support"],
            Image: BlockChainImage
        },
        {
            id: 4,
            Skill: "Shopify",
            icon: shopifysvg,
            description: "At Regner Digitals, we offer top-notch Shopify development services designed to help you build a powerful and profitable online store. Our skilled developers are adept at creating customized Shopify solutions that cater to your specific business needs.",
            points: ["Custom Store Design", "Seamless Integrations", "Optimized Performance", "24/7 Support"],
            Image: ShopifyImage
        },
        {
            id: 5,
            Skill: "App Development",
            description: "At Regner Digitals, we create innovative and user-friendly mobile applications that enhance user engagement and drive business growth. Our team of skilled developers ensures that each app is tailored to meet your specific needs and delivers a seamless experience on both iOS and Android platforms.",
            icon: Appsvg,
            points: ["Custom App Solutions", "Ensuring optimal performance on both iOS and Android devices.", "Intuitive interfaces that provide a superior user experience.", "Continuous Updates and Support"],
            Image: AppImage
        },
        {
            id: 6,
            Skill: "Video Editting",
            description: "At Regner Digitals, we offer top-notch video editing services to bring your vision to life. Our skilled editors transform raw footage into captivating videos that tell your story and engage your audience.",
            icon: videosvg,
            points: ["High-quality edits that enhance your video’s impact.", "Fast Turnaround", "Customized Edits", "Polished final products that stand out and captivate viewers."],
            Image: VideoImage
        }
    ];

    const [DetailSkill, setDetailSkill] = useState(Skills[0]);

    console.log(DetailSkill);

    return (
        <React.Fragment>
            <h1 className='bg-[#111827]  py-8  text-white font-bold text-4xl md:text-6xl text-center '>Our Services</h1>
            {/* Ok */}
            <div className='bg-[#111827]  overflow-hidden sm:block  md:flex justify-around items-center'>
                {/* left (Skill-exhibition) */}
                {DetailSkill && (
                    <div className="Skill-exhibition  lg:w-1/2 lg:block hidden relative md:p-8 rounded">
                        <div className="headings mb-12">
                            <h1 className="text-4xl font-bold mb-6 text-white" data-aos="fade-up-right">{DetailSkill.Skill}</h1>
                            <p className="text-2xl mb-4 text-gray-400" data-aos="fade-up-right">{DetailSkill.description}</p>
                        </div>
                        <div className="points flex justify-between gap-10 items-center">
                            <div className="ml-2">
                                <ul className='text-white text-xl font-bold flex flex-col gap-4 mb-12'>
                                    {DetailSkill.points.map((point, index) => (
                                        <li data-aos="fade-up-right" key={index} className='flex gap-5'>
                                            <div className='p-4 h-2 border border-black rounded-full'></div>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <button className="p-4 text-xl bg-purple-500 mr-4">
                                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/portfolio'>
                                        Explore More
                                    </Link>
                                </button>
                            </div>
                            <img className="h-42 w-60 rounded-2xl" src={DetailSkill.Image} alt="Side Picture" />
                        </div>
                    </div>
                )}
                {/* right (Skills) */}
                <div className="skills   flex flex-col gap-4 sm:w-full lg:w-2/5 mt-4">
                    {Skills.map((skill) => (
                        <div key={skill.id}>
                            <div
                                onClick={() => {
                                    toggleSkill(skill)
                                }}
                                className='cursor-pointer flex items-center gap-4 border-2 p-4'
                            >
                                <img data-aos="fade-up-left" src={skill.icon} className='w-20' alt={skill.Skill} />
                                <h1 className='text-2xl text-white font-medium' data-aos="fade-up-left">{skill.Skill}</h1>
                            </div>
                            {/* Show Skill-exhibition on small screens when skill is clicked */}
                            {openSkillId === skill.id && rightdetailskill && (
                                <div className="lg:hidden ">
                                    <div className="Skill-exhibition relative p-8 rounded">
                                        <div className="headings mb-12">
                                            <h1 className="text-4xl font-bold mb-6 text-white" data-aos="fade-up-right">{rightdetailskill.Skill}</h1>
                                            <p className="text-2xl mb-4 text-gray-400" data-aos="fade-up-right">{rightdetailskill.description}</p>
                                        </div>
                                        <div className="points flex justify-between gap-10 items-center ">
                                            <div className="sm:ml-0 md:ml-2 ">
                                                <ul className='text-white text-xl font-bold flex flex-col gap-4 mb-12'>
                                                    {rightdetailskill.points.map((point, index) => (
                                                        <li data-aos="fade-up-right" key={index} className='flex gap-5'>
                                                            <div className='p-4  h-2 border border-black rounded-full'></div>
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <button className="p-4 text-xl bg-purple-500 mr-4">
                                                    <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} to='/contact'>
                                                        Explore More
                                                    </Link>
                                                </button>
                                            </div>
                                            <img className="h-32 w-40 " src={rightdetailskill.Image} alt="Side Picture" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment >

    )
}

export default Services
