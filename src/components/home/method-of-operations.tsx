import React from 'react'

const OurMethodOfOperations = () => {
    return (
        <div className='flex flex-col gap-8 p-4 md:p-16 bg-white'>
            <h2 className='text-4xl font-bold text-[#1A1F65]' data-aos="fade-up" data-aos-delay="300">Our Method of Operation</h2>
            <div className='flex flex-col gap-5'>
                <p className='md:text-xl text-base text-default-700 font-medium'>
                    With over a decade of industry experience in IT consultation & development service, we consistently deliver high-quality solutions to our clients worldwide. In addition, we develop a consulting & development methodology specific to the requirements of potential projects.
                </p>
                <p className='md:text-xl text-base text-default-700 font-medium'>
                    Our dedication to quality has helped us gain the trust of our clients. Let us take you through our working methodology.
                </p>
                <div className="grid lg:grid-cols-6 grid-cols-3 gap-4 md:gap-8 mt-5" data-aos="fade-up" data-aos-delay="300">
                    {[
                        { 
                            number: 1, 
                            image: "/images/our-method-of-operations/Establishing.png", 
                            text: "Comprehensive Requirement Analysis" 
                        },
                        { 
                            number: 2, 
                            image: "/images/our-method-of-operations/strrgy.png", 
                            text: "Strategy Development" 
                        },
                        { 
                            number: 3, 
                            image: "/images/our-method-of-operations/plan.png", 
                            text: "Establish the Execution plan" 
                        },
                        { 
                            number: 4, 
                            image: "/images/our-method-of-operations/recourse.png", 
                            text: "Allocation of Resources" 
                        },
                        { 
                            number: 5, 
                            image: "/images/our-method-of-operations/implementation.png", 
                            text: "Establishing Development process" 
                        },
                        { 
                            number: 6, 
                            image: "/images/our-method-of-operations/implementation2.png", 
                            text: "Implementation & Recalibration" 
                        }
                    ].map((item) => (
                        <div key={item.number} className="relative h-full w-full">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white z-10">
                                {item.number}
                            </span>
                            <div className="flex flex-col items-center justify-between h-full w-full text-xs md:text-sm font-normal text-gray-600 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                <img 
                                    className='h-8 w-8 object-contain mb-4' 
                                    src={item.image} 
                                    alt={`Step ${item.number}`} 
                                />
                                <span className='text-center'>
                                    {item.text}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OurMethodOfOperations
