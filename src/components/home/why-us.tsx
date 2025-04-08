import React from 'react';
import Link from 'next/link';
import { AiOutlineTeam } from 'react-icons/ai';
import { FaRegHandshake } from 'react-icons/fa';
import { MdOutlineSecurity } from 'react-icons/md';

const WhyUs = () => {
    return (
        <div className='flex gap-8 md:gap-16 bg-[#f2f2f2] items-center p-4 md:p-16 flex-col lg:flex-row'>
            <div className='flex w-full flex-col md:gap-8 gap-4 flex-1'>
                <h2 className='text-4xl font-bold text-[#211E6D]' data-aos="fade-up" data-aos-delay="300">
                    Why TTS?
                </h2>
                <div className='md:text-xl text-base' data-aos="fade-up" data-aos-delay="300">
                    At TechThrive Systems, we believe in delivering nothing but the best. That's why we've built a highly skilled, versatile, and dedicated team committed to going above and beyond to meet your unique needs. Whether you're looking for innovative IT solutions, seamless system integration, or expert technical support, we're here to ensure your business thrives.
                </div>
                <Link href="/about-us">
                    <div data-aos="fade-up" data-aos-delay="300" className='px-8 py-2 cursor-pointer w-fit font-medium bg-[#211E6D] hover:bg-sky-700 transition-all text-white rounded-lg shadow-lg'>
                        More About Us
                    </div>
                </Link>
            </div>
            <div className='flex flex-col gap-4 flex-1'>
                <div data-aos="fade-up" data-aos-delay="300" className='bg-white rounded-lg shadow-xl p-6 flex gap-4 items-center'>
                    <AiOutlineTeam className='text-5xl text-[#211E6D]' />
                    <div>
                        <h3 className='text-xl font-semibold text-[#211E6D]'>
                            Expert Team
                        </h3>
                        <div className='text-gray-700'>
                            Our focus on quality, combined with our passion for technology, allows us to deliver tailored solutions that drive results and exceed expectations.
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className='bg-white rounded-lg shadow-xl p-6 flex gap-4 items-center'>
                    <FaRegHandshake className='text-5xl text-[#211E6D]' />
                    <div>
                        <h3 className='text-xl font-semibold text-[#211E6D]'>
                            Committed Delivery
                        </h3>
                        <div className='text-gray-700'>
                            We take pride in our unwavering commitment to delivering high-quality solutions on time and within budget. Your success is our priority, and we work tirelessly to ensure that every project meets your expectations and drives tangible results.
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300" className='bg-white rounded-lg shadow-xl p-6 flex gap-4 items-center'>
                    <MdOutlineSecurity className='text-5xl text-[#211E6D]' />
                    <div>
                        <h3 className='text-xl font-semibold text-[#211E6D]'>
                            Proven Track Record
                        </h3>
                        <div className='text-gray-700'>
                            We have a proven track record of helping enterprises optimize their IT infrastructure, reducing downtime, improving application performance, etc. Our expertise in AIOps, digital transformation, Automations, and Service Management complements Dynatrace's cutting-edge observability platform.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;