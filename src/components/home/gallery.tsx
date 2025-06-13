import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const galleryImages = [
    {
        src: "/images/gallery/office1.jpg",
        alt: "Modern Office Space",
        category: "workspace",
        description: "Our state-of-the-art office environment designed for collaboration and innovation"
    },
    {
        src: "/images/gallery/team1.jpg",
        alt: "Team Meeting",
        category: "team",
        description: "Our team brainstorming session for a new project"
    },
    {
        src: "/images/gallery/event1.jpg",
        alt: "Tech Conference",
        category: "events",
        description: "Representing TechThrive at the annual tech conference"
    },
    {
        src: "/images/gallery/workspace1.jpg",
        alt: "Collaborative Space",
        category: "workspace",
        description: "Our collaborative workspace where ideas come to life"
    },
    {
        src: "/images/gallery/team2.jpg",
        alt: "Team Celebration",
        category: "team",
        description: "Celebrating another successful project completion"
    },
    {
        src: "/images/gallery/event2.jpg",
        alt: "Workshop Session",
        category: "events",
        description: "Conducting a workshop on emerging technologies"
    },
    {
        src: "/images/gallery/workspace2.jpg",
        alt: "Innovation Hub",
        category: "workspace",
        description: "Our innovation hub where creativity meets technology"
    },
    {
        src: "/images/gallery/team3.jpg",
        alt: "Remote Team",
        category: "team",
        description: "Our global team collaborating virtually"
    }
];

const categories = ["All", "Team", "Events", "Workspace"];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const filteredImages = selectedCategory === "All" 
        ? galleryImages 
        : galleryImages.filter(img => img.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <div className="w-full py-16 px-4 bg-gradient-to-b from-white to-[#EEF2F7]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-[#1A1A64] text-center mb-4" data-aos="fade-up" data-aos-delay="300">
                    Inside TechThrive
                </h2>
                <p className="text-lg text-[#444] text-center max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="300">
                    We're more than just a tech company — we're a team of creators, problem-solvers, and collaborators. Take a glimpse into our workspace, milestones, and moments that define who we are.
                </p>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up" data-aos-delay="300">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full transition-all duration-300 ${
                                selectedCategory === category
                                    ? "bg-[#1A1A64] text-white"
                                    : "bg-white text-[#1A1A64] hover:bg-gray-100"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4" data-aos="fade-up" data-aos-delay="300">
                    {filteredImages.map((image, index) => (
                        <div 
                            key={index}
                            className="mb-4 break-inside-avoid"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="relative group cursor-pointer">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-2xl flex items-center justify-center">
                                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-center px-4">
                                        {image.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
                    <a 
                        href="/about" 
                        className="inline-block px-6 py-3 bg-[#1A1A64] text-white rounded-full shadow-lg hover:bg-[#2b2bb2] transition-all duration-300"
                    >
                        Meet the Team
                    </a>
                </div>

                {/* Lightbox Modal */}
                <Dialog
                    open={selectedImage !== null}
                    onClose={() => setSelectedImage(null)}
                    className="relative z-50"
                >
                    <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
                    
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <Dialog.Panel className="mx-auto max-w-4xl w-full">
                            {selectedImage && (
                                <div className="relative">
                                    <button
                                        onClick={() => setSelectedImage(null)}
                                        className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                                    >
                                        <XMarkIcon className="h-6 w-6 text-gray-600" />
                                    </button>
                                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                                        <Image
                                            src={selectedImage.src}
                                            alt={selectedImage.alt}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="mt-4 text-white text-center text-lg">
                                        {selectedImage.description}
                                    </p>
                                </div>
                            )}
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </div>
        </div>
    );
};

export default Gallery; 