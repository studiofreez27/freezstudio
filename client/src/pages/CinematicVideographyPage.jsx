import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Film, Video, Music, MonitorPlay, Zap } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';

const CinematicVideographyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: <Film className="w-10 h-10 text-wedding-gold" />,
            title: "Short Films",
            desc: "We don't just record events; we weave a narrative. Your love story told like a 5-minute blockbuster movie.",
            image: "cenemtic Img.jpg?q=80&w=1000&auto=format&fit=crop"
        },
        {
            icon: <Zap className="w-10 h-10 text-wedding-gold" />,
            title: "Teasers & Reels",
            desc: "High-energy, fast-paced highlights perfect for sharing on Instagram, capturing the absolute best vibes of the day.",
            image: "https://images.unsplash.com/photo-1544983057-0a373418196f?q=80&w=1000&auto=format&fit=crop"
        },
        {
            icon: <Video className="w-10 h-10 text-wedding-gold" />,
            title: "Same Day Edit",
            desc: "Surprise your guests with a highlight video of the wedding morning shown at the reception dinner itself.",
            image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Banner with Dark Cinematic Vibe */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black z-10"></div>
                <img
                    src="cenemtic Img.jpg?q=80&w=1000&auto=format&fit=crop"
                    alt="Cinematic Shot"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 mb-8 cursor-pointer hover:bg-wedding-gold hover:border-wedding-gold transition-all duration-300 group"
                    >
                        <Play className="w-8 h-8 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-widest text-center px-4 uppercase bg-clip-text text-transparent bg-gradient-to-r from-wedding-gold via-white to-wedding-gold drop-shadow-2xl">
                        Cinematic <br /> Videography
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl text-center mt-6 font-light tracking-wide">
                        Your Love Story. Directed by Eternal Knot.
                    </p>
                </div>
            </div>

            {/* Intro Content */}
            <div className="py-24 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex justify-center mb-6">
                        <MonitorPlay className="w-12 h-12 text-wedding-gold" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Not Just A Video. A Legacy.</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Gone are the days of boring, 3-hour long wedding tapes. We bring **cinema-grade color grading, drone shots, and emotional storytelling** to your wedding films.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Every frame is composed like a painting. Every sound bite is chosen to move you. We create films that you will want to re-watch every anniversary.
                    </p>
                </motion.div>
            </div>

            {/* Features Grid */}
            <div className="py-20 bg-zinc-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-black/50 border border-white/10 p-8 rounded-xl hover:border-wedding-gold/50 transition-all duration-300 group hover:-translate-y-2"
                            >
                                <div className="mb-6 relative h-48 w-full overflow-hidden rounded-lg">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Play className="w-12 h-12 text-white fill-white drop-shadow-lg" />
                                    </div>
                                </div>
                                <h4 className="font-serif font-bold text-2xl text-white mb-3 group-hover:text-wedding-gold transition-colors">{feature.title}</h4>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Technical Specs / Call to Action */}
            <div className="py-24 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-3xl font-serif font-bold text-white mb-6">The Tech Behind The Art</h3>
                        <p className="text-gray-400 mb-8 text-lg">
                            We use the same equipment used in Netflix documentaries and indie films to ensure your wedding looks crisp, clean, and breathtaking.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <span className="text-wedding-gold font-bold text-xl">4K</span>
                                <div>
                                    <h5 className="font-bold text-white">Ultra HD Resolution</h5>
                                    <p className="text-sm text-gray-500">Crystal clear details</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-wedding-gold font-bold text-xl">fps</span>
                                <div>
                                    <h5 className="font-bold text-white">Slow Motion</h5>
                                    <p className="text-sm text-gray-500">Dreamy, buttery smooth</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-wedding-gold font-bold text-xl">DR</span>
                                <div>
                                    <h5 className="font-bold text-white">Drone Aerials</h5>
                                    <p className="text-sm text-gray-500">Epic venue establishing shots</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-wedding-gold font-bold text-xl">Au</span>
                                <div>
                                    <h5 className="font-bold text-white">Crisp Audio</h5>
                                    <p className="text-sm text-gray-500">Vows recorded perfectly</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Link to="/contact" className="inline-block bg-wedding-gold text-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                Book Your Film
                            </Link>
                        </div>
                    </div>

                    <div className="relative border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-sm">
                        <img
                            src="studio image 2.jpg"
                            alt="Camera Gear"
                            className="w-full rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute -top-4 -right-4 bg-wedding-gold text-black font-bold p-4 rounded-full shadow-lg">
                            Sony <br /> Cinema
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section - Passing prop to potentially change theme if component supports, otherwise it renders default */}
            <div className="bg-white text-black">
                <WhyChooseUs />
            </div>
        </div>
    );
};

export default CinematicVideographyPage;
