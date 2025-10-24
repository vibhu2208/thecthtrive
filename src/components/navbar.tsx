'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { IoMenuSharp } from 'react-icons/io5'

const services = {
    "SERVICENOW IMPLEMENTATION AND SUPPORT": [
        "Comprehensive ServiceNow Solutions",
        "IT Service Management Optimization",
        "Workflow Automation"
    ],
    "DYNATRACE PERFORMANCE MONITORING": [
        "Robust Performance Monitoring Solutions",
        "Actionable Insights",
        "User Experience Management",
        "Comprehensive Application Monitoring"
        ],
    "DEVOPS CONSULTING": [
        "Streamlining Development and Operations",
        "Automation in DevOps",
        "Cultural Transformation",
        "Performance Metrics and Monitoring"
    ],
    "BMC SOLUTIONS": [
        "Netreo Network Management",
        "Netreo Server Management",
        "Helix Operations Management",
        "TrueSight Orchestrator",
        "TrueSight Server Automation",
        "Helix AIOps",
        "Helix Discovery",
       
    ],
    "CHATBOT DEVELOPMENT": [
        "Intelligent Chatbots for Engagement",
        "Customizable Solutions",
        "Integration with Existing Channels"
    ],
    "AUTOMATION SERVICES": [
        "Leveraging Automation Technologies",
        "Process Optimization",
        "Scalability and Flexibility",
        "Integration with Existing Systems"
    ],
    "WEB AND APP DESIGNING": [
        "Aesthetic and User-Friendly Designs",
        "Responsive Web Design",
        "SEO-Friendly Solutions"
    ]
}

const Navbar = () => {
    const pathname = usePathname();
    const [menuStatus, setMenuStatus] = useState(false);
    const [showWhatWeDo, setShowWhatWeDO] = useState(false);

    useEffect(() => {
        setShowWhatWeDO(false);
    }, [pathname])

    const handleClick = (item: string = "") => {
        setShowWhatWeDO(false);
        if (item === "showWhatWeDo" && !showWhatWeDo) {
            setShowWhatWeDO(true);
        }
    }
    return (
        <header className='sticky top-0 z-[10001] bg-white border-b-[1px] border-gray-300 shadow max-h-[100vh] flex flex-col'>
            <nav className='flex justify-between items-center py-4 px-4 max-w-6xl w-full mx-auto'>
                <div onClick={() => { handleClick(); }} className='text-black'>
                    <Link href="/" className='text-2xl font-bold'>
                        <Image src={"/logo.webp"} width={120} height={40} alt='logo' />
                    </Link>
                </div>
                <div className='md:hidden block text-4xl text-gray-800' onClick={() => setMenuStatus((pre) => (!pre))}>
                    <IoMenuSharp />
                </div>
                <div className='md:flex gap-6 hidden'>
                    <div onClick={() => { handleClick(); }} className={`px-3 py-1 cursor-pointer font-semibold text-black ${pathname === "/" ? "text-blue-600" : ""}`}>
                        <Link href={"/"} className='text-nowrap'>
                            Home
                        </Link>
                    </div>
                    <div onClick={() => { handleClick(); }} className={`px-3 py-1 cursor-pointer font-semibold text-black ${pathname === "/about-us" ? "text-blue-600" : ""}`}>
                        <Link href={"/about-us"} className='text-nowrap'>
                            Why TechThrive System
                        </Link>
                    </div>
                    <div onClick={() => { handleClick("showWhatWeDo") }} className={`px-3 py-1 cursor-pointer flex items-center font-semibold text-nowrap text-black ${pathname.includes("/services") ? "text-blue-600" : ""}`}>
                        What We Do
                        <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </div>
                    <Link onClick={() => { handleClick(); }} href={"/contact-us"}>
                        <div className='px-2 w-fit text-nowrap py-0.5 my-0 mx-1 cursor-pointer font-semibold bg-sky-800 hover:bg-sky-700 transition-all text-white rounded-2xl shadow-lg'>Contact Us</div>
                    </Link>
                </div>
            </nav>
            {menuStatus && <div className={`flex ps-5 sm:ps-10 gap-3 flex-col md:hidden border-t absolute bottom-0 translate-y-full bg-white w-full transition-all`}>
                <Link href={"/"} className='text-nowrap'>
                    <div onClick={() => setMenuStatus(false)} className={`px-3 py-1 cursor-pointer font-semibold ${pathname === "/" ? "text-blue-600" : "text-gray-900"}`}>
                        Home
                    </div>
                </Link>
                <Link href={"/about-us"} className='text-nowrap'>
                    <div onClick={() => setMenuStatus(false)} className={`px-3 py-1 cursor-pointer font-semibold ${pathname === "/about-us" ? "text-blue-600" : "text-gray-900"}`}>
                        Why Techthrivesystem
                    </div>
                </Link>
                <Link href={"/services"} className='text-nowrap'>
                    <div onClick={() => setMenuStatus(false)} className={`px-3 py-1 cursor-pointer font-semibold ${pathname === "/services" ? "text-blue-600" : "text-gray-900"}`}>
                        What We Do
                    </div>
                </Link>
                <Link href={"/contact-us"} className='text-nowrap'>
                    <div onClick={() => setMenuStatus(false)} className={`px-3 py-1 cursor-pointer font-semibold ${pathname === "/contact-us" ? "text-blue-600" : "text-gray-900"}`}>
                        Contact Us
                    </div>
                </Link>
            </div>}
            {
                showWhatWeDo &&
                <div className='  bg-white hidden md:block border-gray-200 shadow-sm border-y flex-1 overflow-y-auto'>
                    <div className="mt-1 max-w-6xl w-full mx-auto md:px-16 px-8 py-4">
                        <h2 className='text-3xl font-bold text-black uppercase'> <Link className='hover:underline' href="/services">Services</Link></h2>
                        <div className="flex flex-col px-4 py-4 mx-auto text-gray-900 md:px-6 gap-3">
                            {
                                Object.entries(services).map(([service, serviceItems], i) => {
                                    return (
                                        <div className='flex border-t pt-2' key={i}>
                                            <div className='w-[30%]'>
                                                <Link onClick={() => { handleClick(); }} href={`/services/${service.toLowerCase().replaceAll(" ", "-")}`}>
                                                    <div className='uppercase px-5 py-2 cursor-pointer w-fit font-semibold text-gray-800 hover:bg-gray-100 transition-all hover:text-blue-600  rounded-lg'>
                                                        {service}
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className='w-[70%] grid grid-cols-3'>
                                                {
                                                    serviceItems.map((item, i) => {
                                                        return (
                                                            <Link onClick={() => { handleClick(); }} key={i} href={`/services/${service.toLowerCase().replaceAll(" ", "-")}/${item.toLowerCase().replaceAll("/", "-").replaceAll(" ", "-")}`}>
                                                                <div className='capitalize px-3 py-1 cursor-pointer w-fit h-fit font-medium hover:bg-gray-100 transition-all hover:text-blue-600  rounded-lg'>
                                                                    {item}
                                                                </div>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </header>
    )
}

export default Navbar
