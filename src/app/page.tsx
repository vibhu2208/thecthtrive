"use client"
import About from "@/components/home/about";
import Carousel from "@/components/home/carousel";
import CompanySlider from "@/components/company-slider";
import OurServices from "@/components/home/our-services";
import MissionVision from "@/components/home/mission-vision";
import WhyUs from "@/components/home/why-us";
import BigNews from "@/components/home/big.news";
import OurMethodOfOperations from "@/components/home/method-of-operations";
import IndustriesWeOffer from "@/components/home/industries-we-offer";
import Testimonials from "@/components/testimorials";
import OurServicesBenefits from "@/components/home/our-services-benefits";
import Partnerships from "@/components/home/partnerships";
import Gallery from "@/components/home/gallery";
import { useEffect } from "react";
import Aos from "aos";
import HaveQuestion from "@/components/have-question";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration
    });
  }, []);
  return (
    <div className="h-full w-full overflow-hidden pb-12">
      <Carousel />
      <WhyUs />
      <Partnerships />
      <OurServices />
      <About />
      <MissionVision />
      <OurServicesBenefits />
      <BigNews />
      <OurMethodOfOperations />
      <Gallery />
      <IndustriesWeOffer />
      <Testimonials />
      <HaveQuestion />
    </div>
  );
}
