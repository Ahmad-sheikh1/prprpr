import React, { useEffect } from 'react';
import bgimage from "../assets/pawel-czerwinski-IXgSpDrxsgM-unsplash.jpg";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const PolicyPrivacy = () => {

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
                    <h1 className='text-5xl mb-4 font-bold text-inherit' data-aos="fade-up-right">Privacy Policy</h1>
                    <ul data-aos="fade-up-right" className='flex gap-6 text-xl'>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li className=' flex items-center  '>
                            {/* <Link className='' to='/contact'> */}
                            <div className='h-2 border w-2 rounded-full bg-white mr-2'></div>Privacy Policy
                            {/* </Link> */}
                        </li>
                    </ul>
                </div>
            </div>
            {/* content */}
            <div className="content py-8 text-white  bg-[#0f0f0f]  ">
                <div className='w-4/5 mx-auto text-start'>
                    <h1 className='text-2xl mb-2 font-bold'>Effective Date: May 2024</h1>
                    <h2 className='text-lg mb-2'><span className='text-[#e8b006] text-xl font-bold'>Regner Digitals</span>  operates the website regnerdigitals.tech (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.</h2>
                    <div className="1">
                        <h1 className='text-2xl font-bold mb-2'>1. Information Collection and Use</h1>
                        <p className='text-xl mb-2'>We collect the following types of information to provide and improve our services:</p>
                        <ul className='list-disc'>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Personal Information:</span> When you use our services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name, email address, phone number, and location ("Personal Information").</li>
                        </ul>
                    </div>
                    <div className="2">
                        <h1 className='text-2xl font-bold mb-2'>2. Information Collection Method</h1>
                        <p className='text-xl mb-2'>We collect this information through secure forms available on our website. We ensure that all data collected is transmitted securely using the latest encryption technologies</p>
                    </div>
                    <div className="3">
                        <h1 className='text-2xl font-bold mb-2'>3. Use of Information</h1>
                        <p className='text-xl mb-2'>We use the collected information for the following purposes:</p>
                        <ul className='list-disc mb-2'>
                            <li className='text-lg '>To provide and maintain our services.</li>
                            <li className='text-lg '>To communicate with you, including responding to your requests or inquiries.</li>
                        </ul>
                    </div>
                    <div className="4">
                        <h1 className='text-2xl font-bold mb-2'>4. Information Sharing and Disclosure</h1>
                        <p className='text-xl mb-2'>We do not share your Personal Information with third parties except as described in this Privacy Policy. We may disclose your Personal Information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</p>
                    </div>
                    <div className="5">
                        <h1 className='text-2xl font-bold mb-2'>5. Data Security</h1>
                        <p className='text-xl mb-2'>The security of your Personal Information is important to us. We employ the latest technology to ensure that your data is encrypted and securely stored. However, remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
                    </div>
                    <div className="6">
                        <h1 className='text-2xl font-bold mb-2'>6. Cookies and Tracking Technologies</h1>
                        <p className='text-xl mb-2'>Our website does not use cookies or any other tracking technologies to collect information about your visit or usage patterns.</p>
                    </div>
                    <div className="7">
                        <h1 className='text-2xl font-bold mb-2'>7. Changes to This Privacy Policy</h1>
                        <p className='text-xl mb-2'>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and sending you an email notification. You are advised to review this Privacy Policy periodically for any changes.</p>
                    </div>
                    <div className="8">
                        <h1 className='text-2xl font-bold mb-2'>8. Contact Us</h1>
                        <p className='text-xl mb-2'>If you have any questions about this Privacy Policy, please contact us:</p>
                        <ul className='list-disc mb-4'>
                            <li className='text-lg'><span className='text-xl font-bold'>Email:</span>  contact@regnerdigitals.tech</li>
                            <li className='text-lg'><span className='text-xl font-bold'>Phone:</span> 0316-2806588</li>
                        </ul>
                    </div>
                    <p className='text-xl font-bold text-center'>Please review this policy to ensure it fits your specific requirements and compliance needs. If you need any further adjustments or additions, feel free to ask.</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PolicyPrivacy
