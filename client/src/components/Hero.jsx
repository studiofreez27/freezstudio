import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const heroContent = [
    {
        image: "/hero img 1.avif",
        subtitle: "Capturing Moments, Creating Memories",
        title: "Your Dream Wedding Awaits",
        desc: "Premium Wedding Photography & Cinematic Videography"
    },
    {
        image: "/hero img 2.jpg",
        subtitle: "Pure Emotions, True Love",
        title: "Relive Your Best Day",
        desc: "Candid moments that speak a thousand words"
    },
    {
        image: "/hero img 3.jpg",
        subtitle: "Cinematic Perfection",
        title: "A Royal Affair",
        desc: "Turning your wedding into a timeless masterpiece"
    }
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Preload images for smoother transitions
        heroContent.forEach((slide) => {
            const img = new Image();
            img.src = slide.image;
        });

        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroContent.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="relative h-screen flex items-center justify-start overflow-hidden">
            {/* Background Image Slideshow */}
            {/* Background Image Slideshow */}
            <div className="absolute inset-0 z-0">
                {heroContent.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                            }`}
                        style={{ willChange: 'opacity, transform' }}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                        />
                    </div>
                ))}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 text-left text-white px-6 md:px-16 lg:px-24 max-w-6xl mr-auto">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-lg md:text-xl font-light tracking-[0.2em] mb-4 uppercase text-wedding-gold-light">
                            {heroContent[currentIndex].subtitle}
                        </p>

                        <h1 className="text-6xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white/80">
                            {heroContent[currentIndex].title}
                        </h1>

                        <p className="text-xl md:text-2xl font-light mb-10 text-gray-200">
                            {heroContent[currentIndex].desc}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Hero;
