"use client";
import PageHeader from '@/components/page-header';
import React, { useEffect } from 'react'
import Aos from "aos";
import Link from 'next/link';
type ServiceKey = "opentext-solutions" | "servicenow-implementation-and-support" | "devops-consulting" | "dynatrace-performance-monitoring" | "chatbot-development" | "automation-services" | "web-and-app-designing"| "power-bi-analytics"| "bmc-solutions";

const data = {
  
    "opentext-solutions": {
      "desc": "Empowering Digital Transformation with OpenText Solutions",
      "title1": "OpenText Solutions",
      "img": "/images/services-card/opentext.webp",
      "para1": "OpenText provides end-to-end enterprise information management (EIM) solutions that empower businesses to manage, secure, and leverage critical business data effectively. From seamless implementation and integration to ongoing support and training, we ensure your organization's digital transformation journey is smooth and successful. Our OpenText solutions optimize information flow, enhance decision-making, and boost operational efficiency.",
      "title2": "Our OpenText Solutions for Business Success",
      "items": [
        {
          "link": true,
          "title": "End-to-End Implementation and Support",
          "desc": "We offer comprehensive, end-to-end OpenText implementation services, from planning and design to deployment and ongoing support. Our team works closely with you to ensure that the solution fits seamlessly into your organization, enabling you to harness the full potential of OpenText solutions. With our expert support, we ensure your system operates smoothly and continuously evolves to meet your changing business needs."
        },
        {
          "link": true,
          "title": "Integration with Existing and New Solution",
          "desc": "Our OpenText solutions are designed to integrate effortlessly with both existing business systems and new technologies. We provide seamless integration with CRM, ERP, and other enterprise systems, ensuring that your business data flows smoothly across platforms. This enables real-time collaboration, better data accessibility, and an enhanced user experience, improving efficiency and performance across your organization."
        },
        {
          "link": true,
          "title": "Training and Knowledge Transfer",
          "desc": "We offer comprehensive training and knowledge transfer services to ensure that your team is equipped with the skills needed to leverage OpenText solutions effectively. Our training programs are tailored to your organization’s specific needs, ensuring that your employees can manage and operate the system with confidence. We also provide knowledge transfer to empower your internal teams to handle day-to-day operations and troubleshooting."
        }
      ]
    },
    "bmc-solutions": {
  "desc": "Transforming IT Operations with BMC Solutions",
  "title1": "BMC Solutions",
  "img": "/images/services/bmc-solutions.webp",
  "para1": "BMC provides industry-leading IT service and operations management solutions that enable businesses to automate, optimize, and secure their IT infrastructure. From network and server management to AI-powered operations and automation, our BMC solutions ensure seamless digital transformation, enhanced efficiency, and proactive problem resolution.",
  "title2": "Our BMC Solutions for IT Excellence",
  "items": [
    {
      "link": true,
      "title": "Netreo Network Management",
      "desc": "Optimize and automate your network operations with BMC’s Netreo Network Management. Gain real-time visibility, monitor network health, and ensure uninterrupted connectivity across your enterprise."
    },
    {
      "link": true,
      "title": "Netreo Server Management",
      "desc": "Enhance server performance, security, and automation with BMC’s Netreo Server Management. Streamline server provisioning, patching, and compliance to ensure high availability and efficiency."
    },
    {
      "link": true,
      "title": "Helix Operations Management",
      "desc": "Leverage AI-driven analytics to proactively detect, diagnose, and resolve IT issues with BMC Helix Operations Management. Improve service availability and reduce downtime with intelligent insights."
    },
    {
      "link": true,
      "title": "TrueSight Orchestrator",
      "desc": "Automate complex IT workflows with TrueSight Orchestrator. Enable seamless integration across IT environments, reducing manual efforts and enhancing operational efficiency."
    },
    {
      "link": true,
      "title": "TrueSight Server Automation",
      "desc": "Ensure compliance, security, and efficient server management with TrueSight Server Automation. Automate patching, provisioning, and configuration management across physical, virtual, and cloud environments."
    },
    {
      "link": true,
      "title": "Helix AIOps",
      "desc": "Unlock AI-powered IT operations with BMC Helix AIOps. Use machine learning and analytics to predict and prevent IT issues, enabling proactive problem resolution and optimized performance."
    },
    {
      "link": true,
      "title": "Helix Discovery",
      "desc": "Gain full visibility into your IT assets with BMC Helix Discovery. Identify and map infrastructure, applications, and dependencies for better risk management and IT optimization."
    },
    {
      "link": true,
      "title": "TrueSight Network Automation",
      "desc": "Automate network management tasks with TrueSight Network Automation. Improve security, reduce vulnerabilities, and ensure compliance with automated network configuration and change management."
    }
  ]
},
   "power-bi-analytics": {
        "desc": "Transform Your Data into Strategic Intelligence with Advanced Power BI Solutions",
        "title1": "Power BI Analytics: Unleashing Data-Driven Potential",
        "img": "/images/services-card/power-bi.webp",
        "para1": "Power BI is a transformative business intelligence platform that empowers organizations to convert complex data into compelling, actionable insights. Our comprehensive Power BI analytics services are meticulously designed to help you navigate your data landscape, enabling smarter, faster, and more informed decision-making across your entire organization.",
        "title2": "Our Comprehensive Power BI Analytics Services",
        "items": [
            {
                "link": true,
                "title": "Strategic Implementation and Holistic Support",
                "desc": "We provide end-to-end Power BI implementation with a strategic approach. From initial data integration and system architecture to custom dashboard development and continuous optimization, our services ensure your Power BI solution becomes a powerful, adaptable asset that evolves with your business needs and technological landscape."
            },
            {
                "link": true,
                "title": "Advanced Custom Dashboard Development",
                "desc": "Our expert data visualization specialists craft highly interactive, intuitive dashboards that transform complex data into clear, actionable narratives. We design precision-engineered visualizations that offer real-time insights, enabling leadership to monitor key performance indicators, identify emerging trends, and make data-driven decisions with unprecedented clarity and confidence."
            },
            {
                "link": true,
                "title": "Comprehensive Training and Organizational Enablement",
                "desc": "Beyond implementation, we focus on empowering your team through structured, hands-on training programs. Our knowledge transfer sessions are designed to build internal Power BI expertise, accelerate team productivity, and cultivate a data-literate organizational culture that can independently leverage advanced analytics capabilities."
            }
        ]
    },
  "servicenow-implementation-and-support": {
    "desc": "Comprehensive ServiceNow solutions to optimize IT service management and operational efficiency.",
    "title1": "Empowering Businesses with ServiceNow",
    "img": "/images/services-card/servicenow.jpg",
    "para1": "Our ServiceNow solutions are designed to help organizations unlock the full potential of IT service management. From workflow automation to enhanced operational productivity, we tailor our approach to meet unique business needs. By leveraging ServiceNow's advanced features, we enable businesses to improve service delivery and streamline processes.",
    "title2": "Our ServiceNow Solutions",
    "items": [
      {
        "link": true,
        "title": "IT Service Management Optimization",
        "desc": "We focus on optimizing IT service management processes to reduce downtime and enhance service delivery. By implementing industry best practices, we ensure that organizations achieve greater efficiency and improved customer satisfaction."
      },
      {
        "link": true,
        "title": "Workflow Automation",
        "desc": "By automating workflows through ServiceNow, we help organizations minimize manual effort, improve productivity, and deliver faster response times with superior service outcomes."
      },
      {
        "link": true,
        "title": "Comprehensive Servicenow Solutions",
        "desc": "Our ServiceNow implementation ensures streamlined incident and change management processes. We help businesses resolve issues faster, minimize disruptions, and maintain operational continuity."
      },
      {
        "link": true,
        "title": "Custom ServiceNow Applications",
        "desc": "We build custom applications on the ServiceNow platform to address unique business requirements, enabling organizations to scale their solutions as needed."
      },
      {
        "link": true,
        "title": "ServiceNow Integration",
        "desc": "Our expertise in ServiceNow integration allows seamless connection with existing systems, ensuring a unified workflow across various business functions."
      },
      {
        "link": true,
        "title": "ServiceNow Support and Maintenance",
        "desc": "We provide ongoing support and maintenance to ensure your ServiceNow implementation continues to deliver optimal performance and aligns with evolving business needs."
      },
      {
        "link":true,
        "title" : "Software Asset Management",
        "desc": "Implement robust Software Asset Management (SAM) practices to optimize software investments, ensure compliance, and maximize the value of your organization's software portfolio through systematic tracking, management, and optimization."
      },
      {
        "link":true,
        "title" : "Configuration management database",
        "desc": "Implement and maintain a comprehensive Configuration Management Database (CMDB) to track, manage, and optimize your IT infrastructure components while ensuring accurate relationship mapping and enhanced service delivery."
      },
      {
        "link":true,
        "title" : "Vulnerability Management",
        "desc": "Implement comprehensive Vulnerability Management practices to identify, assess, prioritize, and remediate security vulnerabilities across your IT infrastructure, ensuring robust protection against potential threats."
      }
    ]
  },


    "devops-consulting": {
      "desc": "Streamlining Development and Operations",
      "title1": "DevOps Consulting",
      "img": "/images/services-card/devops.png",
      "para1": "We specialize in DevOps practices that streamline development and operations. Our consulting services focus on integrating development, IT operations, and quality assurance to improve collaboration and productivity.",
      "title2": "Our Solutions for DevOps Consulting",
      "items": [
        {
          "link": true,
          "title": "Automation in DevOps",
          "desc": "We emphasize automation in the DevOps lifecycle, from code integration to deployment, which significantly reduces lead times and enhances the quality of deliverables."
        },
        {
          "link": true,
          "title": "Cultural Transformation",
          "desc": "Our approach includes fostering a cultural transformation within organizations that embraces collaboration, agility, and continuous improvement, essential for successful DevOps adoption."
        },
        {
          "link": true,
          "title": "Performance Metrics and Monitoring",
          "desc": "Implementing performance metrics and monitoring is crucial in our DevOps consulting to ensure that teams can measure success and identify areas for enhancement."
        },
        {
          "link": true,
          "title": "Continuous Integration and Delivery (CI/CD)",
          "desc": "We help organizations implement CI/CD pipelines to automate code integration, testing, and deployment, ensuring faster and more reliable delivery cycles."
        },
        {
          "link": true,
          "title": "Infrastructure as Code (IaC)",
          "desc": "Our DevOps consulting includes leveraging Infrastructure as Code to automate infrastructure management, enabling consistency and scalability across environments."
        },
        {
          "link": true,
          "title": "Security Integration (DevSecOps)",
          "desc": "We integrate security into the DevOps process, ensuring that security is a priority from the beginning of the development lifecycle."
        },
        {
          "link": true,
          "title": "Cloud Migration Support",
          "desc": "Our experts assist organizations in migrating their applications and workloads to the cloud seamlessly while ensuring performance and reliability."
        },
        {
          "link": true,
          "title": "Streamlining Development and Operations",
          "desc": "We focus on streamlining development and operations by bridging the gap between teams, fostering collaboration, and ensuring efficient workflows for higher productivity."
        }
      ]
    }
,  
  
    "dynatrace-performance-monitoring": {
      "desc": "Robust Performance Monitoring Solutions",
      "title1": "Dynatrace Performance Monitoring",
      "img": "/images/services-card/dynatrace.webp",
      "para1": "Our Dynatrace experts offer robust performance monitoring solutions that provide actionable insights into application performance and user experience. We ensure that your applications run smoothly and meet user expectations.",
      "title2": "Our Solutions for Performance Monitoring",
      "items": [
        {
          "link": true,
          "title": "Actionable Insights",
          "desc": "With our Dynatrace solutions, organizations gain actionable insights that help in identifying performance bottlenecks and optimizing application performance. This proactive approach minimizes downtime and enhances user satisfaction."
        },
        {
          "link": true,
          "title": "User Experience Management",
          "desc": "We focus on user experience management by leveraging Dynatrace analytics to monitor user interactions and satisfaction levels, enabling organizations to make informed decisions for improvement."
        },
        {
          "link": true,
          "title": "Comprehensive Application Monitoring",
          "desc": "Our services include comprehensive application monitoring that spans across various environments, ensuring that all components of your application ecosystem perform optimally."
        },
        {
          "link": true,
          "title": "Robust Performance Monitoring Solutions",
          "desc": "Our Dynatrace performance monitoring solutions offer robust and scalable services, ensuring that applications are constantly optimized for peak performance across diverse environments."
        },
        {
          "link": true,
          "title": "Scalability and Flexibility",
          "desc": "Dynatrace allows for scalable and flexible performance monitoring, adapting to your growing business needs. We ensure that your monitoring solutions evolve with your application architecture, no matter how complex."
        }
      ]
    }, 
      "chatbot-development": {
        "desc": "Empowering Customer Engagement with Intelligent Chatbots",
        "title1": "Chatbot Development",
        "img": "/images/services-card/chatbot.webp",
        "para1": "Our team specializes in developing intelligent chatbots that drive meaningful customer engagement. These chatbots are designed to provide instant responses, enhancing the quality of interactions between businesses and customers. By leveraging AI and natural language processing (NLP), we create bots that understand user intent and deliver personalized, relevant information. Whether it’s for customer support, sales, or feedback, our chatbots improve user experience and satisfaction, providing a seamless interaction that increases customer loyalty and boosts business performance.",
        "title2": "Our Chatbot Development Solutions",
        "items": [
          {
            "link": true,
            "title": "Intelligent Chatbots for Engagement",
            "desc": "Our intelligent chatbots are designed to enhance customer engagement by offering immediate, accurate, and context-aware responses. These bots use AI, machine learning, and natural language processing (NLP) to understand the nuances of human conversation, allowing them to answer queries, provide recommendations, and guide users through various processes. Whether it’s assisting with a customer service inquiry, booking a service, or addressing product concerns, our bots ensure that customers feel heard and valued. This instant response capability not only improves engagement but also drives user satisfaction and promotes positive brand interactions."
          },
          {
            "link": true,
            "title": "Customizable Solutions",
            "desc": "Our chatbot solutions are not one-size-fits-all; they are fully customizable to meet the unique requirements of your business. We understand that every organization has specific goals and processes, so we tailor the chatbots to integrate seamlessly with your business model. This customization includes defining workflows, setting up personalized conversation flows, choosing the appropriate tone of voice, and aligning the chatbot’s functionality with your objectives—whether for customer support, sales, marketing, or feedback collection. By adapting our chatbot solutions to your specific needs, we ensure that the bot provides maximum value and enhances your business’s overall customer experience."
          },
          {
            "link": true,
            "title": "Integration with Existing Channels",
            "desc": "We ensure that our chatbots can be easily integrated with your existing communication channels, including websites, mobile apps, social media platforms, and messaging services like WhatsApp, Facebook Messenger, and more. By integrating the chatbot into your current infrastructure, we provide a seamless experience for your users across various touchpoints, whether they are on your website browsing products, seeking customer support, or interacting on social media. This unified approach ensures that customers can engage with your business anytime, anywhere, through the channels they prefer, offering a consistent experience and streamlining communication processes."
          }
        ]
      },
        "automation-services": {
          "desc": "Optimizing Operations with Cutting-Edge Automation Technologies",
          "title1": "Automation Services",
          "img": "/images/services-card/automation.webp",
          "para1": "Our automation services empower businesses by leveraging cutting-edge technologies to streamline operations, reduce manual efforts, and increase efficiency. We focus on automating repetitive tasks, enhancing productivity, and optimizing critical processes across various departments. By implementing tailored automation solutions, we help businesses eliminate inefficiencies, reduce human error, and create more time for high-value activities. Whether you're looking to automate customer service, data entry, or complex workflows, we ensure a seamless and impactful automation experience.",
          "title2": "Our Automation Services Solutions",
          "items": [
            {
              "link": true,
              "title": "Leveraging Automation Technologies",
              "desc": "We specialize in leveraging the latest automation technologies to help businesses streamline their operations and reduce reliance on manual processes. By integrating advanced tools such as robotic process automation (RPA), AI-driven workflows, and cloud-based automation platforms, we enable businesses to handle tasks with greater efficiency and precision. Our automation solutions are designed to not only reduce operational costs but also improve consistency and accuracy across workflows. By eliminating repetitive tasks, we allow organizations to focus on strategic initiatives that drive growth and innovation."
            },
            {
              "link": true,
              "title": "Process Optimization",
              "desc": "Our automation services focus on identifying and optimizing the key processes within your organization to drive operational excellence. We conduct thorough assessments of existing workflows to identify bottlenecks, inefficiencies, and areas for improvement. By automating these processes, we ensure that resources—whether human, financial, or technological—are utilized effectively, resulting in faster execution, reduced costs, and improved outcomes. Our goal is to help you optimize critical business operations, increase throughput, and provide greater value to your customers."
            },
            {
              "link": true,
              "title": "Scalability and Flexibility",
              "desc": "We understand that businesses evolve and face changing demands. That's why we design automation solutions that are both scalable and flexible, allowing your organization to grow without significant additional overhead. Whether you’re expanding into new markets, handling increased workloads, or adapting to industry changes, our solutions ensure that your operations can scale efficiently. With our automation services, you can easily adjust to new challenges, integrate new technologies, and expand your capabilities without worrying about system limitations. This adaptability ensures that your business remains agile and competitive in a fast-paced environment."
            },
            {
              "link": true,
              "title": "Integration with Existing Systems",
              "desc": "Our automation solutions are built to seamlessly integrate with your existing systems, ensuring smooth workflows and eliminating silos between departments. We work with a wide range of platforms and tools, allowing us to connect your automation processes with CRM systems, ERP platforms, databases, and more. By ensuring consistency and seamless communication between systems, we reduce the risk of operational disruptions and ensure that your automation initiatives complement and enhance your current infrastructure. Our integration services ensure that the automation process fits naturally into your business operations, minimizing disruption and maximizing efficiency."
            }
          ]
        }
      ,
      
        "web-and-app-designing": {
          "desc": "Crafting Engaging Web and App Designs for Exceptional User Experiences",
          "title1": "Web and App Designing",
          "img": "/images/services-card/web.webp",
          "para1": "We specialize in creating visually appealing and functional websites and apps that offer seamless user experiences. Our design approach combines aesthetics with usability to engage users and ensure they have a positive interaction with your digital products. Whether it's a website or mobile app, we focus on creating intuitive layouts, easy navigation, and responsive designs that adjust to different screen sizes. Our goal is to ensure your users can interact effortlessly with your platform while enjoying a visually compelling interface.",
          "title2": "Our Web and App Designing Solutions",
          "items": [
            {
              "link": true,
              "title": "Aesthetic and User-Friendly Designs",
              "desc": "We believe that design is more than just visuals; it’s about creating a delightful experience for the user. Our web and app design services focus on creating beautiful, aesthetically pleasing designs that also prioritize ease of use. We consider user psychology, behavior, and preferences to craft interfaces that are both visually engaging and highly functional. By blending creativity with usability, we ensure that users not only enjoy the look and feel of your website or app but also find it intuitive and easy to navigate. This approach improves user engagement, satisfaction, and overall retention rates, resulting in a stronger connection between users and your brand."
            },
            {
              "link": true,
              "title": "Responsive Web Design",
              "desc": "With the increasing use of mobile devices and varying screen sizes, responsive design has become a necessity. We employ responsive design techniques to ensure that your website or app functions seamlessly across all devices—be it desktops, tablets, or smartphones. Our designs automatically adjust the layout, images, and content based on the screen size, providing a consistent and optimal experience for users, no matter how they access your platform. This approach ensures that users have a positive experience on any device, reducing bounce rates and increasing engagement and conversions."
            },
            {
              "link": true,
              "title": "SEO-Friendly Solutions",
              "desc": "We build websites and apps with SEO best practices at the forefront, ensuring that your platform is optimized for search engines from the ground up. Our designs include proper use of heading tags, metadata, image alt texts, and other on-page SEO elements that help improve your site's visibility in search engine results. By integrating SEO-friendly design techniques into the development process, we help your website attract more organic traffic, improving your chances of ranking higher and driving more qualified leads. Whether you’re aiming to increase brand visibility, attract more visitors, or boost conversions, our SEO-centric approach ensures that your digital presence performs well in search engines."
            },
            {
              "link": true,
              "title": "User-Centric Design Approach",
              "desc": "We prioritize user-centric design principles that focus on the end user's needs, behaviors, and feedback. Our process includes conducting user research, creating user personas, and designing intuitive user flows that enhance the user experience. By closely aligning the design with the user's journey, we ensure that the interface is not only functional but also provides a seamless and engaging experience. This focus on usability increases customer satisfaction, reduces friction, and encourages repeat interactions with your site or app."
            },
            {
              "link": true,
              "title": "Continuous Design Iteration and Testing",
              "desc": "We believe in an iterative design process where feedback and testing play a critical role in refining the final product. Throughout the design phase, we continuously test and improve the website or app based on real user feedback and performance data. By conducting A/B testing, usability studies, and performance checks, we ensure that the design evolves to meet the changing needs of your users. This approach leads to a product that is not only visually appealing but also highly functional and aligned with user expectations."
            }
          ]
        },
}

const ServiceComponent = ({ params }: { params: { service: string } }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
    });
  }, []);
  const serviceName = params.service

  if (Object.keys(data).includes(serviceName) === false) return <div className='h-full w-full overflow-hidden pb-12'>
    <p className='uppercase text-md md:text-4xl font-semibold text-red-600 mt-10 text-center'>404 - Service not exits</p>
  </div>
  const serviceData = data[serviceName as ServiceKey];
  return (
    <div className='h-full w-full overflow-hidden pb-12'>
      <PageHeader title={serviceName} desc={serviceData.desc} />
      <div className="md:p-16 p-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div>
          <h2 className='md:text-5xl text-4xl font-bold'><span className='text-[#1A1F65]'>{serviceData.title1} </span></h2>
          <p className="mt-4 text-gray-600 text-lg">{serviceData.para1}</p>
        </div>
        <div className="mt-12 md:mt-0">
          <img src={serviceData.img} alt="About Us Image" className="object-cover rounded-lg shadow-md" />
        </div>
      </div>
      <div className='xs:p-4 sm:p-8 md:16 gap-4 md:gap-8 flex flex-col'>
        <h2 className='text-4xl text-center font-bold text-[#211E6D]'>{serviceData.title2}</h2>
        <div className='grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
          {
            serviceData.items.map((item, i) => {
              return(
                <Link key={i} href={item.link ? `/services/${serviceName.toLowerCase().replaceAll(" ", "-")}/${item.title.toLowerCase().replaceAll("/", "-").replaceAll(" ", "-")}` : `/services/${serviceName.toLowerCase().replaceAll(" ", "-")}`}>
                  <div className='bg-white border border-gray-200 h-full rounded-lg p-3 flex flex-col gap-1 cursor-pointer hover:shadow-lg transition-shadow' data-aos="fade-up" data-aos-delay="300">
                        {/* <img src="/images/usps/delivery.png" className='h-12 w-fit' alt="" /> */}
                        <p className='text-xl font-semibold'>
                            <span>
                                {item.title}
                            </span>
                        </p>
                        <span className='h-1 w-14 rounded bg-[#211E6D]'></span>
                        <p className='mt-3 text-left border-l-[3px] -ml-3 pl-3 flex-1'>
                            {item.desc}
                        </p>
                        {
                          item.link && 
                          <p className="flex mt-2 w-fit items-center px-2 py-[0.4rem] text-sm text-center font-semibold bg-[#0f588c] hover:bg-sky-700 transition-all text-white rounded-2xl shadow-lg">
                            Get more detail
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                          </p>
                        }
                    </div>
                </Link>
              )
            })
          }
            </div>
      </div>
    </div>
  )
}

export default ServiceComponent
