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
                <div className="safari-grid-container" data-aos="fade-up" data-aos-delay="300">
                    {[
                        { 
                            number: 1, 
                            image: "/images/our-method-of-operations/Establishing.png", 
                            text: "Comprehensive\nRequirement Analysis" 
                        },
                        { 
                            number: 2, 
                            image: "/images/our-method-of-operations/strrgy.png", 
                            text: "Strategy\nDevelopment" 
                        },
                        { 
                            number: 3, 
                            image: "/images/our-method-of-operations/plan.png", 
                            text: "Establish the\nExecution plan" 
                        },
                        { 
                            number: 4, 
                            image: "/images/our-method-of-operations/recourse.png", 
                            text: "Allocation of\nResources" 
                        },
                        { 
                            number: 5, 
                            image: "/images/our-method-of-operations/implementation.png", 
                            text: "Establishing\nDevelopment process" 
                        },
                        { 
                            number: 6, 
                            image: "/images/our-method-of-operations/implementation2.png", 
                            text: "Implementation &\nRecalibration" 
                        }
                    ].map((item) => (
                        <div key={item.number} className="safari-grid-item">
                            <span className="safari-number-badge">
                                {item.number}
                            </span>
                            <div className="safari-card">
                                <img 
                                    className='safari-card-image' 
                                    src={item.image} 
                                    alt={`Step ${item.number}`} 
                                />
                                <span className='safari-card-text'>
                                    {item.text.split('\n').map((line, index) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            {index < item.text.split('\n').length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Safari-specific styles */}
            <style jsx>{`
                .safari-grid-container {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 1rem;
                    width: 100%;
                }

                .safari-grid-item {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    height: auto;
                    min-height: 180px;
                }

                .safari-number-badge {
                    position: absolute;
                    top: -0.75rem;
                    left: -0.75rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 1.5rem;
                    height: 1.5rem;
                    background-color: rgb(191, 219, 254);
                    border-radius: 9999px;
                    z-index: 10;
                    font-size: 0.75rem;
                }

                .safari-card {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    width: 100%;
                    height: 100%;
                    padding: 1rem;
                    border: 1px solid rgb(229, 231, 235);
                    border-radius: 0.5rem;
                    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
                    text-align: center;
                }

                .safari-card-image {
                    height: 2rem;
                    width: 2rem;
                    object-fit: contain;
                    margin-bottom: 0.75rem;
                }

                .safari-card-text {
                    font-size: 0.75rem;
                    color: rgb(75, 85, 99);
                    line-height: 1.2;
                    word-break: break-word;
                    display: inline-block;
                    max-width: 100%;
                }

                @media (max-width: 768px) {
                    .safari-grid-container {
                        grid-template-columns: repeat(3, 1fr);
                    }

                    .safari-grid-item {
                        min-height: 140px;
                    }
                }
            `}</style>
        </div>
    )
}

export default OurMethodOfOperations
