import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smile, Zap, Eye, Heart, Camera, Sparkles } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';

const CandidPhotographyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const moments = [
        {
            title: "The Unseen Tears",
            desc: "The silent tear of a father, the emotional hug of a friend—moments that often go unnoticed but mean the world.",
            image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Explosive Laughter",
            desc: "The raucous laughter during the games, the inside jokes shared between the couple. Pure, unadulterated joy.",
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Stolen Glances",
            desc: "That split second when eyes meet across the crowded mandapam. We are always ready to freeze that spark.",
            image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Banner */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src="traditional.jpg?q=80&w=1000&auto=format&fit=crop"
                    alt="Candid Moments"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide mb-4 text-center px-4 drop-shadow-xl">
                        Candid Photography
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl text-center mb-8 font-light italic">
                        "Real emotions. No poses. Just life happening."
                    </p>
                    <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium tracking-wider uppercase">
                        <Link to="/" className="hover:text-wedding-gold transition-colors">Home</Link>
                        <span>&gt;</span>
                        <span className="text-wedding-gold">Candid</span>
                    </div>
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
                        <Eye className="w-12 h-12 text-wedding-gold" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-wedding-dark mb-8">The Beauty of The Unplanned</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        The best photos aren't the ones where you look at the camera and smile. They are the ones where you forget the camera exists.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        We are storytellers who hide in the background, waiting for that perfect split-second of magic. We don't direct the scene; we document the **feeling**.
                    </p>
                </motion.div>
            </div>

            {/* Moments Grid */}
            <div className="py-20 bg-wedding-gold/5">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-serif font-bold mb-12 text-wedding-dark text-center">Moments We Hunt For</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {moments.map((moment, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={moment.image}
                                        alt={moment.title}
                                        loading='lazy'
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-lg z-20">
                                        <Zap className="w-5 h-5 text-wedding-gold" />
                                    </div>
                                </div>
                                <div className="p-8 text-center">
                                    <h4 className="font-serif font-bold text-2xl text-wedding-dark mb-3">{moment.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{moment.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quote / Highlight Section */}
            <div className="py-24 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 border-l-4 border-wedding-gold pl-4 md:pl-12">
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop"
                            alt="Candid Laughter"
                            className="rounded-lg shadow-2xl w-full h-[500px] object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    <div className="w-full md:w-1/2">
                        <h3 className="text-3xl font-serif font-bold text-wedding-dark mb-6">Why Go Candid?</h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            Because memory is imperfect. You might forget the joke your cousin cracked, or the way your partner looked at you when you weren't watching. Our photos will be your memory.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <Smile className="text-wedding-gold w-6 h-6" />
                                <span className="text-gray-700 font-medium">Genuine Smiles over awkward poses</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Heart className="text-wedding-gold w-6 h-6" />
                                <span className="text-gray-700 font-medium">Emotional Depth and Storytelling</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Camera className="text-wedding-gold w-6 h-6" />
                                <span className="text-gray-700 font-medium">Artistic Angles and Composition</span>
                            </li>
                        </ul>
                        <Link to="/contact" className="bg-wedding-gold text-white px-8 py-3 rounded-md font-medium hover:bg-black transition-colors shadow-lg">
                            Let's Capture Truth
                        </Link>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <WhyChooseUs />
        </div>
    );
};

export default CandidPhotographyPage;
