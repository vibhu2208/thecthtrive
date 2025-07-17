import React from 'react';
import Image from 'next/image';

const partners = [
    {
        name: "SymphonyAI",
        logo: "/images/partners/SymphonyAI.webp",
    },
    {
        name: "AmpsTek",
        logo: "/images/partners/AmpsTek.png",
    },
    {
        name: "WebsJyoti",
        logo: "/images/partners/WebsJyoti.png",
    }
];

const Partnerships = () => {
    return (
        <div className="w-full py-16 px-4 bg-[#F8F9FB]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-[#1A1A64] text-center mb-4" data-aos="fade-up" data-aos-delay="300">
                    Our Trusted Partnerships
                </h2>
                <p className="text-lg text-[#444] text-center max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="300">
                    Collaboration is at the core of innovation. At TechThrive System, we partner with industry leaders to deliver scalable, reliable, and future-ready IT solutions tailored to our clients' unique needs.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {partners.map((partner, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center hover:scale-105 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-delay={300 + (index * 100)}
                        >
                            <div className="relative w-32 h-16">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a 
                        href="/contact-us" 
                        className="inline-block px-6 py-3 bg-[#1A1A64] text-white rounded-full shadow-lg hover:bg-[#2b2bb2] transition-all duration-300"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Become a Partner
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Partnerships; 
