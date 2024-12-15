import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn, FaMapMarkerAlt, FaPhoneVolume } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <footer className='bg-[#020a27] text-gray-300 py-8'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='uppercase text-lg font-semibold text-white'>About Company</h3>
                        <p>
                            Techthrivesystem is dedicated to providing high-quality IT solutions and services to help businesses achieve their goals. Our expertise spans across various domains, ensuring that we deliver tailored solutions to meet unique business needs.
                        </p>
                        <h3 className='uppercase text-md font-semibold text-white'>Follow Us</h3>
                        <div className='flex gap-2'>
                            <a href="https://www.linkedin.com/company/techthrive-system/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className='bg-[#0f588c] p-2 rounded-full'>
                                <FaLinkedinIn className='text-white' />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='uppercase text-lg font-semibold text-white'>Our Services</h3>
                        <Link href={"/services/servicenow-implementation-and-support"} className='hover:underline'>
                            ServiceNow Implementation and Support
                        </Link>
                        <Link href={"/services/dynatrace-performance-monitoring"} className='hover:underline'>
                            Dynatrace Performance Monitoring
                        </Link>
                        <Link href={"/services/devops-consulting"} className='hover:underline'>
                            DevOps Consulting
                        </Link>
                        <Link href={"/services/opentext-solutions"} className='hover:underline'>
                            OpenText Solutions
                        </Link>
                        <Link href={"/services/chatbot-development"} className='hover:underline'>
                            ChatBot Development
                        </Link>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='uppercase text-lg font-semibold text-white'>Contact Us</h3>
                        <div className='flex gap-8'>
                            <div className='flex flex-col gap-2 w-2/3'>
                                <h4 className='font-semibold'>UAE (Freeland Dubai)</h4>
                                <p className='flex items-center gap-2'>
                                    <FaPhoneVolume /> +971582464210, +971582459658
                                </p>
                                <p className='flex items-center gap-2'>
                                    <MdEmail className='text-base' /> info@ttsys.in
                                </p>
                                <p className='flex items-center gap-2'>
                                    <FaMapMarkerAlt className='text-2xl'/> PO Box Number 452318, Premises Number 001 - 51450 IFZA Business Park, Building A1, United Arab Emirates
                                </p>
                            </div>
                            <div className='flex flex-col gap-2 w-1/3'>
                                <h4 className='font-semibold'>India (NCR)</h4>
                                <p className='flex items-center gap-2'>
                                    <FaPhoneVolume /> +911169266164 +919266158800
                                </p>
                                <p className='flex items-center gap-2'>
                                    <MdEmail /> info@ttsys.in
                                </p>
                                <p className='flex items-center gap-2'>
                                    <FaMapMarkerAlt /> Gaur City Centre, Noida Extension - 201301
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-4 text-center'>
                    <p className='text-sm'>
                        &copy; {new Date().getFullYear()} Techthrivesystem. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
