import React, { useEffect, useState } from 'react'
import emailsvg from "../assets/email-svgrepo-com.svg";
import telesvg from "../assets/telephone-svgrepo-com.svg"
import locatsvg from "../assets/location-svgrepo-com.svg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import bgimage from "../assets/pawel-czerwinski-IXgSpDrxsgM-unsplash.jpg"
import { useForm } from 'react-hook-form';


const ContactUs = () => {

    const { register, handleSubmit } = useForm();
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptionCountry, setSelectedOptionCountry] = useState('');

    const FormData = (data) => {
        console.log(data, { service: selectedOption });
    }

    const handleChangecountry = (event) => {
        setSelectedOptionCountry(event.target.value);
    };

    console.log(selectedOption);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const bgStyle = {
        backgroundImage: `url(${bgimage})`,
    };

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <React.Fragment>
            <div style={bgStyle} className='flex justify-center items-center min-h-[60vh]  bg-no-repeat bg-cover bg-inherit' >
                <div className="heading   w-3/4 text-white">
                    <h1 className='text-5xl mb-4 font-bold text-inherit' data-aos="fade-up-right">Contact Us</h1>
                    <ul data-aos="fade-up-right" className='flex gap-6 text-xl'>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li className=' flex items-center  '>
                            {/* <Link className='' to='/contact'> */}
                            <div className='h-2 border w-2 rounded-full bg-white mr-2'></div>Contact Us
                            {/* </Link> */}
                        </li>
                    </ul>
                </div>
            </div>
            {/* Cards */}
            <div className="card p-4 md:flex sm:block justify-center items-center  bg-black min-h-[40vh]">
                <div className="w-full md:w-1/3 px-4 my-2">
                    <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg flex items-center hover:bg-black transition duration-300">
                        <div className="icon text-3xl text-gray-300 mr-8">
                            <img data-aos="fade-up-right" src={telesvg} className="w-16" alt="Call Icon" />
                        </div>
                        <div className="content">
                            <h3 data-aos="fade-up-right" className="title text-4xl font-semibold text-white mb-2 transition duration-300">Call us today</h3>
                            <p className="text-gray-400 text-xl">
                                {/* <a data-aos="fade-up-right" href="tel:+923144399644" className="block hover:text-white transition duration-300">PS: +92 314 4399 644</a> */}
                                <a data-aos="fade-up-right" href="" className="block hover:text-white transition duration-300">Office: +92 316-2806588</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-4 my-2">
                    <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg flex items-center hover:bg-black transition duration-300">
                        <div className="icon text-3xl text-gray-300 mr-8">
                            <img data-aos="fade-up-right" src={emailsvg} className="w-16" alt="Email Icon" />
                        </div>
                        <div className="content">
                            <h3 data-aos="fade-up-right" className="title text-4xl font-semibold text-white mb-2 transition duration-300">Our Emails</h3>
                            <p className="text-gray-400 text-xl">
                                <a data-aos="fade-up-right" href="" className="block hover:text-white transition duration-300">office@regnerdigitals.tech</a>
                                <a data-aos="fade-up-right" href="" className="block hover:text-white transition duration-300">contact@regnerdigitals.tech</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-4 my-2">
                    <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg flex items-center hover:bg-black transition duration-300">
                        <div className="icon text-3xl text-gray-300 mr-8">
                            <img data-aos="fade-up-right" src={locatsvg} className="w-16" alt="Call Icon" />
                        </div>
                        <div className="content">
                            <h3 data-aos="fade-up-right" className="title text-4xl font-semibold text-white mb-2 transition duration-300">Our Address</h3>
                            <p className="text-gray-400 text-xl">
                                <a data-aos="fade-up-right" href="" className="block hover:text-white transition duration-300">Faislabad,Punjab | Pakistan</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Form */}
            <div className="bg-[#0f0f0f]  text-white min-h-screen flex items-center justify-center py-10">
                <div className="container mx-auto px-4 md:px-8 lg:px-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Map Section */}
                        <div data-aos="fade-up-right">
                            <h2 className="text-4xl font-bold mb-4">Where we are</h2>
                            <div className="overflow-hidden  rounded-lg shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d137704.7648566811!2d73.0893009!3d31.4503662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1656430400123!5m2!1sen!2s"
                                    width="100%"
                                    height="400"
                                    allowfullscreen=""
                                    loading="lazy"
                                    className="border-0"
                                    title="Google Map">
                                </iframe>

                            </div>
                        </div>
                        {/* Contact Form Section */}
                        <div data-aos="fade-up-right">
                            <h2 className="text-4xl font-bold mb-4">Send us a message</h2>
                            <form onSubmit={handleSubmit(FormData)} className="bg-[#1F2937] p-6 rounded-lg shadow-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        {...register('Name', { required: true })}
                                        type="text"
                                        placeholder="Name"
                                        className="bg-gray-800 text-gray-400 border border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        {...register('Email', { required: true })}
                                        type="email"
                                        placeholder="Email"
                                        className="bg-gray-800 text-gray-400 border border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <input
                                        {...register('Phone Number', { required: true })}
                                        type="number"
                                        placeholder="Phone"
                                        className="bg-gray-800 text-gray-400 border border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <input
                                        {...register('Budget', { required: true })}
                                        placeholder="Budget"
                                        className="bg-gray-800 text-gray-400 border border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <select
                                        id="service-select"
                                        value={selectedOption}
                                        onChange={handleChange}
                                        className="block w-full p-3 bg-gray-800 text-gray-400 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="" disabled>
                                            Select a service
                                        </option>
                                        <option >Web Development</option>
                                        <option >App Development</option>
                                        <option >BlockChain Development</option>
                                        <option >WordPress </option>
                                        <option >Shopify</option>
                                        <option >Video Editting</option>
                                    </select>
                                    {/* country */}
                                    <input
                                        type="text"
                                        placeholder='Your Country'
                                        {...register('Country', { required: true })}
                                        className="bg-gray-800 text-gray-400 border border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        {...register('Message', { required: true })}
                                        placeholder="Message"
                                        className="bg-gray-800 text-gray-400 border border-gray-700 p-3 rounded-lg w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default ContactUs
