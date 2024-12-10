import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col gap-5 md:flex-row py-16 w-full px-4 max-w-6xl mx-auto'>
      <div className='flex-1' data-aos="fade-right" data-aos-delay="300">
        <h2 className='text-4xl font-bold text-[#1A1F65]'>About Techthrivesystem</h2>
        <p className='md:text-3xl text-2xl font-semibold mt-3'>
            What We Promise <br /> High Quality IT Solutions
        </p>
        <p className='pt-8 text-gray-700 text-left'>
           At [Techthrivesystem], we are dedicated to delivering innovative and reliable solutions that drive success for our clients. With a focus on quality, efficiency, and client satisfaction, we pride ourselves on being a trusted partner for businesses across industries. Our team of experts combines technical expertise with a deep understanding of industry needs to craft solutions that are both scalable and effective.
        </p>
        <p className='pt-8 text-gray-700 text-left'>
        We believe in building lasting relationships with our clients through transparent communication, timely delivery, and tailored services that align with their unique goals. By leveraging the latest technologies and staying ahead of industry trends, we empower organizations to optimize their operations, enhance user experiences, and achieve measurable growth.
        </p>
      </div>
      <div className='flex-1 flex items-center justify-center' data-aos="fade-left" data-aos-delay="300">
            <img className='max-h-[400px] object-cover' src="https://www.vertexelites.com/img/about-us.png" alt="" />
      </div>
    </div>
  )
}

export default About
