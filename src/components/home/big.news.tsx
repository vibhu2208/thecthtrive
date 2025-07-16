import Link from 'next/link'
import React from 'react'

const BigNews = () => {
    return (
        <div className='flex flex-col gap-8 p-8 md:p-16 text-white' style={{backgroundImage: 'url("/images/bignews-fourth.png")', backgroundSize: "cover", objectFit: "cover", backgroundPosition: "center"}}>
            <div className='md:w-[60%] text-black w-full flex flex-col gap-10 md:p-8 ml-auto'>
                <h2 className='md:text-6xl text-4xl font-bold' data-aos="fade-up" data-aos-delay="300">Exciting News!</h2>
                <h2 className='md:text-5xl text-3xl font-medium' data-aos="fade-up" data-aos-delay="300">Introducing Our ServiceNow and BMC Implementation and Support Services</h2>
                <p className='md:text-lg text-base' data-aos="fade-up" data-aos-delay="300">We are excited to announce our comprehensive ServiceNow and BMC implementation and support services. Our expert team is dedicated to helping you streamline your business processes, improve efficiency, and achieve your digital transformation goals. From initial setup to ongoing support, we provide end-to-end solutions tailored to your unique needs. Discover how our ServiceNow and BMC services can drive your business forward.</p>
                <div className="flex gap-4">
                    <Link href={"/services/servicenow-implementation-and-support"}>
                        <div data-aos="fade-up" data-aos-delay="300" className='md:px-10 px-5 md:py-3 py-1 cursor-pointer w-fit font-medium bg-sky-700 transition-all text-white md:text-lg text-base rounded-lg shadow-lg'>
                            Explore ServiceNow Solutions
                        </div>
                    </Link>
                    <Link href={"/services/bmc-solutions"}>
                        <div data-aos="fade-up" data-aos-delay="350" className='md:px-10 px-5 md:py-3 py-1 cursor-pointer w-fit font-medium bg-[#1A1A64] transition-all text-white md:text-lg text-base rounded-lg shadow-lg'>
                            Explore BMC Solutions
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BigNews
