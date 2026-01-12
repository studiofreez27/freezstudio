import React, { useRef } from 'react';
import { Camera, Video, Heart, Users, Baby, ChevronLeft, ChevronRight, Briefcase, Sparkles, Image } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Camera className="w-8 h-8" />,
        title: "Pre & Post Wedding Photography",
        description: "Capturing the beautiful moments before and after your big day.",
        image: "Traditional img.jpg"
    },
    {
        icon: <Image className="w-8 h-8" />,
        title: "Traditional Photography",
        description: "Classic and timeless photography to document your rituals and ceremonies.",
        image: "Traditional Img 2.jpg"
    },
    {
        icon: <Sparkles className="w-8 h-8" />,
        title: "Candid Photography",
        description: "Capturing raw emotions and unposed moments as they happen.",
        image: "traditional.jpg?q=80&w=1000&auto=format&fit=crop"
    },
    {
        icon: <Heart className="w-8 h-8" />,
        title: "Maternity Photoshoot",
        description: "Celebrating the journey of motherhood with elegant portraits.",
        image: "Maternity Img.jpg?q=80&w=1000&auto=format&fit=crop"
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "Kids Photoshoot",
        description: "Fun and playful shoots to capture the joy of childhood.",
        image: "kids img.jpg?q=80&w=1000&auto=format&fit=crop"
    },
    {
        icon: <Baby className="w-8 h-8" />,
        title: "Newborn Baby Photoshoot",
        description: "Preserving the tiny details and innocence of your newborn.",
        image: "baby image.jpg?q=80&w=1000&auto=format&fit=crop"
    },
    {
        icon: <Video className="w-8 h-8" />,
        title: "Cinematic Videography",
        description: "Turning your special moments into a cinematic masterpiece.",
        image: "cenemtic Img.jpg?q=80&w=1000&auto=format&fit=crop"
    },
    {
        icon: <Briefcase className="w-8 h-8" />,
        title: "Corporate Events",
        description: "Professional coverage for your business events and milestones.",
        image: "corporate events.jpg?q=80&w=1000&auto=format&fit=crop"
    }
];

const Services = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.offsetWidth;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="services" className="section-padding bg-wedding-cream relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h4 className="text-wedding-gold font-bold tracking-widest uppercase mb-2">Our Services</h4>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-wedding-dark">What services we're offering</h2>
                </div>

                <div className="relative group">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-30 bg-white p-3 rounded-full shadow-lg text-wedding-gold hover:bg-wedding-gold hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-30 bg-white p-3 rounded-full shadow-lg text-wedding-gold hover:bg-wedding-gold hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hidden md:block"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 md:gap-8 pb-12 snap-x snap-mandatory px-8 md:px-4 scrollbar-hide scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }} // Capped delay to avoid long waits
                                className="min-w-[200px] md:min-w-[340px] max-w-[480px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden snap-start flex-shrink-0"
                            >
                                <div className="h-[200px] md:h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        loading='lazy'
                                        decoding='async'
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 transform-gpu"
                                        style={{ willChange: 'transform' }}
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full text-wedding-gold shadow-lg z-20">
                                        {service.icon}
                                    </div>
                                </div>
                                <div className="p-3 md:p-8">
                                    <h3 className="text-sm md:text-2xl font-serif font-bold mb-2 md:mb-4 text-wedding-dark group-hover:text-wedding-gold transition-colors line-clamp-2">{service.title}</h3>
                                    <p className="text-xs md:text-base text-gray-600 leading-relaxed line-clamp-3 md:line-clamp-none">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
