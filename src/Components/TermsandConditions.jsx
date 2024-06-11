import React, { useEffect } from 'react'
import bgimage from "../assets/pawel-czerwinski-IXgSpDrxsgM-unsplash.jpg";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TermsandConditions = () => {

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
                    <h1 className='text-5xl mb-4 font-bold text-inherit' data-aos="fade-up-right">Terms and Conditions</h1>
                    <ul data-aos="fade-up-right" className='flex gap-6 text-xl'>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li className=' flex items-center  '>
                            {/* <Link className='' to='/contact'> */}
                            <div className='h-2 border w-2 rounded-full bg-white mr-2'></div>Terms and Conditions
                            {/* </Link> */}
                        </li>
                    </ul>
                </div>
            </div>
            {/* content */}

            <div className="content bg-black text-white py-8">
                <div className='w-4/5 mx-auto'>
                    <div className="1 mb-8 ">
                        <h1 className='text-2xl font-bold mb-3'>1. Introduction</h1>
                        <p className='text-xl mb-2'>Welcome to <span className='text-[#e8b006] font-bold'>Regner Digitals.</span> These Terms and Conditions ("Terms") govern your use of our services. By engaging our services, you agree to comply with and be bound by these Terms.</p>
                    </div>
                    <div className="2 mb-8">
                        <h1 className='text-2xl font-bold mb-2'>2. Company Information</h1>
                        <ul className='list-disc'>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Company Name:</span> <span className='text-[#e8b006] font-bold'>Regner Digitals.</span></li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Address:</span> Aqeel Plaze 1st Floor, Tehsil Chowl, Shorkot</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Contact:</span> <span className='text-[#214ac6] font-bold'>office@regnerdigitals.tech </span>, <span>03162806588</span></li>
                        </ul>
                    </div>
                    <div className="3 mb-8">
                        <h1 className='text-2xl font-bold mb-2'>3. Services Description</h1>
                        <ul className='list-disc'>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Web Development:</span> Our team of expert developers uses the latest technologies and best practices to deliver websites that not only look great but also perform exceptionally well.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Blockchain Development:</span> We offer cutting-edge blockchain development solutions that transform businesses with secure, transparent, and efficient decentralized applications.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>WordPress Development: </span> We provide top-notch WordPress development services to help you create a powerful and flexible website.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>App Development:</span> We create innovative and user-friendly mobile applications that enhance user engagement and drive business growth.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Shopify Development:</span> We offer top-notch Shopify development services designed to help you build a powerful and profitable online store.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Video Editing:</span> We offer top-notch video editing services to bring your vision to life</li>
                        </ul>
                    </div>
                    <div className="4 mb-8">
                        <h1 className='text-2xl font-bold mb-2'>4. Payment Terms</h1>
                        <ul className='list-disc'>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Payment Methods:</span> Payments can be made via bank transfer or online payment.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Payment Schedule:</span> Payments are milestone-based or per hour as agreed upon in the project proposal.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Refund Policy: </span> Refunds are considered on a case-by-case basis depending on the stage of project completion and reason for termination.</li>
                        </ul>
                    </div>
                    <div className="5 mb-8">
                        <h1 className='text-2xl font-bold mb-2'>5. Project Terms</h1>
                        <ul className='list-disc'>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Timeline:</span> We commit to finishing projects by the client’s deadline, depending on the specific requirements and scope of the project.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Revisions Policy:</span> Our services include a reasonable number of revisions. Excessive revisions beyond the agreed scope may incur additional charges.</li>
                        </ul>
                    </div>
                    <div className="6 mb-8">
                        <h1 className='text-2xl font-bold mb-2'>6. Confidentiality and Privacy</h1>
                        <ul className='list-disc'>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Data Protection:</span> Client data is securely stored and not shared with any third party without explicit consent.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Confidentiality Agreement:</span> We uphold strict confidentiality regarding all client information and project details.</li>
                        </ul>
                    </div>
                    <div className="7 mb-8">
                        <h1 className='text-2xl font-bold mb-2'>7. Intellectual Property</h1>
                        <ul className='list-disc'>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Ownership:</span> Upon full payment, the client gains ownership of the final deliverables. Regner Digitals retains the right to showcase completed projects in our portfolio unless otherwise agreed.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Usage Rights:</span> Clients are granted rights to use the deliverables as agreed in the project scope.</li>
                        </ul>
                    </div>
                    <div className="8 mb-8">
                        <h1 className='text-2xl font-bold mb-2'>8.  Liability and Warranty</h1>
                        <ul className='list-disc'>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Limitation of Liability:</span> Regner Digitals is not liable for any indirect, incidental, or consequential damages arising from the use of our services.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Warranty:</span> We warrant that our services will be performed with reasonable skill and care. Any defects or issues will be addressed as per the agreed terms.</li>
                        </ul>
                    </div>
                    <div className="9 mb-8">
                        <h1 className='text-2xl font-bold mb-2'>9. Dispute Resolution</h1>
                        <ul className='list-disc'>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Procedure:</span> Any disputes arising from or relating to these Terms shall be resolved through negotiation in good faith. If unresolved, disputes will be subject to the jurisdiction of the courts located in Shorkot.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Governing Law:</span> These Terms are governed by the laws of Pakistan.</li>
                        </ul>
                    </div>
                    <div className="10 mb-8">
                        <h1 className='text-2xl font-bold mb-2'>10. Termination</h1>
                        <ul className='list-disc'>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Conditions:</span>  Either party may terminate the contract if the other party fails to remain in contact, engages in misbehavior, or conducts unusual talks. Termination must be communicated in writing.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Effects:</span>  Upon termination, the client is liable to pay for all work completed up to the date of termination.</li>
                        </ul>
                    </div>
                    <div className="11 mb-8">
                        <h1 className='text-2xl font-bold mb-2'>11. Miscellaneous</h1>
                        <ul className='list-disc'>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Amendments:</span> Regner Digitals reserves the right to amend these Terms at any time. Clients will be notified of significant changes.</li>
                            <li className='text-lg mb-2'><span className='text-2xl font-bold'>Entire Agreement:</span> These Terms constitute the entire agreement between Regner Digitals and the client regarding our services.</li>
                        </ul>
                    </div>
                    <p className='text-xl font-bold text-center mb-8'>By engaging with Regner Digitals, you acknowledge that you have read, understood, and agree to these Terms and Conditions.</p>
                    <p className='text-xl font-bold text-center mb-8'>For any questions or further information, please contact us at <span className='text-[#214ac6] font-bold'>office@regnerdigitals.tech </span> or 03162806588.</p>
                    <p className='text-xl font-bold text-center border-4 p-4 '>Please review these terms and ensure they meet your specific needs and legal requirements. It's also advisable to consult with a legal professional to ensure compliance with local laws and regulations.</p>
                </div>
            </div>

        </React.Fragment>
    )
}

export default TermsandConditions
