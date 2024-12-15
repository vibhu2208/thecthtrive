import Link from 'next/link';
import React, { useLayoutEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';

const cardsData = [
    {
        img: "/images/services-card/servicenow.jpg",
        title: "SERVICENOW IMPLEMENTATION AND SUPPORT",
        desc: "Streamline your workflows, enhance productivity, and unlock new growth opportunities with our expert ServiceNow implementation and ongoing support.",
        link: ""
    },
    {
        img: "/images/services-card/dynatrace.webp",
        title: "DYNATRACE PERFORMANCE MONITORING",
        desc: "Monitor and optimize application performance, security, and reliability with our comprehensive Dynatrace services tailored for your business needs.",
        link: ""
    },
    {
        img: "/images/services-card/devops.png",
        title: "DEVOPS CONSULTING",
        desc: "Accelerate your software delivery pipeline with our DevOps consulting services, ensuring seamless collaboration and efficient operations.",
        link: ""
    },
    {
        img: "/images/services-card/opentext.webp",
        title: "OPENTEXT SOLUTIONS",
        desc: "Maximize your document management capabilities with our OpenText solutions, enabling secure and efficient information management.",
        link: ""
    },
    {
        img: "/images/services-card/chatbot.webp",
        title: "CHATBOT DEVELOPMENT",
        desc: "Elevate customer engagement and automate responses with our innovative chatbot development solutions customized for your business.",
        link: ""
    },
];

type CardType = {
    data: {
        img: string;
        title: string;
        desc: string;
        link: string;
    };
};

const Card = ({ data }: CardType) => {
    return (
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg hover:shadow-2xl transition-shadow flex flex-col">
            <div className='p-2 rounded-lg overflow-hidden object-cover h-40'>
                <img className="rounded-t-lg" src={data.img} alt="" />
            </div>
            <Link href={`/services/${data.title.toLowerCase().replaceAll(" ", "-")}`}>
                <div className="px-4 py-3 cursor-pointer flex-1 flex flex-col">
                    <h5 className="mb-2 text-lg font-semibold tracking-tight text-[#1A1F65]" data-aos="fade-up" data-aos-delay="300">{data.title}</h5>
                    <p className="mb-3 text-normal text-gray-700 text-left" data-aos="fade-up" data-aos-delay="300">{data.desc}</p>
                    <p className='flex-1 justify-self-end' data-aos="fade-up" data-aos-delay="300"></p>
                    <p data-aos="fade-up" data-aos-delay="300" className="flex w-fit items-center px-2 py-[0.4rem] text-sm text-center font-semibold bg-[#0f588c] hover:bg-sky-700 transition-all text-white rounded-2xl shadow-lg">
                        Get more detail
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </p>
                </div>
            </Link>
        </div>
    );
};

function getWindowDimensions() {
    if (typeof window !== 'undefined') {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    return {
        width: 0,
        height: 0
    };
}

const OurServices = () => {
    const [windowDimensions, setWindowDimensions] = useState<{ width: number; height: number }>(getWindowDimensions());

    useLayoutEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='w-full py-8 md:py-16 px-4 max-w-6xl mx-auto flex flex-col gap-5'>
            <h2 className='text-4xl font-bold text-[#1A1F65] text-center' data-aos="fade-up" data-aos-delay="300">Our Services</h2>
            <p className='text-center md:text-3xl text-2xl font-semibold'>
                Explore What We Offer For Modern <br /> Technology Solutions
            </p>
            <Carousel
                additionalTransfrom={0}
                ssr={true}
                arrows
                autoPlaySpeed={3000}
                centerMode={windowDimensions?.width > 425}
                className="max-h-[95vh]"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 2,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 1
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                {
                    cardsData.map((cardData, i) => {
                        return (
                            <Card key={i} data={cardData} />
                        );
                    })
                }
            </Carousel>
        </div>
    );
};

export default OurServices;
