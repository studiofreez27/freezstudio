import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Baby, Users, Heart, Camera, Smile } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';

const KidsAndNewbornPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const specialties = [
        {
            icon: <Baby className="w-10 h-10 text-wedding-gold" />,
            title: "Newborn Photography",
            desc: "Capturing the tiny details, sleepy yawns, and innocent expressions of your little one in a safe and cozy environment.",
            image: "baby image.jpg?q=80&w=1000&auto=format&fit=crop"
        },
        {
            icon: <Users className="w-10 h-10 text-wedding-gold" />,
            title: "Kids Portraits",
            desc: "Fun, playful, and energetic sessions that bring out the true personality and joy of your growing children.",
            image: "kids img.jpg?q=80&w=1000&auto=format&fit=crop"
        },
        {
            icon: <Camera className="w-10 h-10 text-wedding-gold" />,
            title: "Milestone Sessions",
            desc: "From first steps to first birthdays, we preserve every major milestone in your child's early years.",
            image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Banner */}
            <div className="relative h-[50vh] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2000&auto=format&fit=crop"
                    alt="Kids and Newborn Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide mb-4 text-center px-4">Kids & Newborn Photography</h1>
                    <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium tracking-wider uppercase">
                        <Link to="/" className="hover:text-wedding-gold transition-colors">Home</Link>
                        <span>&gt;</span>
                        <span className="text-wedding-gold">Kids & Newborn</span>
                    </div>
                </div>
            </div>

            {/* Intro Content */}
            <div className="py-20 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 grid grid-cols-2 gap-4"
                    >
                        <img
                            src="baby image.jpg?q=80&w=1000&auto=format&fit=crop"
                            alt="Sleeping Baby"
                            loading='lazy'
                            className="w-full h-80 object-cover rounded-lg shadow-lg mt-12 transform hover:scale-105 transition-transform duration-500"
                        />
                        <img
                            src="kids img.jpg?q=80&w=1000&auto=format&fit=crop"
                            alt="Happy Kid"
                            loading='lazy'
                            className="w-full h-80 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h4 className="text-wedding-gold font-bold tracking-widest uppercase mb-2">Our Passion</h4>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-wedding-dark">Treasuring Childhood <br /> Moments Forever</h1>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            Childhood is fleeting, but the memories don't have to be. We specialize in creating timeless portraits of your little ones, from their first days in the world to their playful adventures as they grow.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            Our sessions are designed to be relaxed, fun, and safe. We understand that kids need patience and creativity to shine, and we pride ourselves on capturing their genuine smiles and unique personalities.
                        </p>

                        <div className="flex gap-8 mb-12">
                            <div className="text-center">
                                <span className="flex justify-center mb-2"><Baby className="w-8 h-8 text-wedding-gold" /></span>
                                <span className="block text-2xl font-serif font-bold text-wedding-dark">Safe</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">Environment</span>
                            </div>
                            <div className="text-center">
                                <span className="flex justify-center mb-2"><Smile className="w-8 h-8 text-wedding-gold" /></span>
                                <span className="block text-2xl font-serif font-bold text-wedding-dark">Fun</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">Sessions</span>
                            </div>
                            <div className="text-center">
                                <span className="flex justify-center mb-2"><Heart className="w-8 h-8 text-wedding-gold" /></span>
                                <span className="block text-2xl font-serif font-bold text-wedding-dark">Pure</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">Emotions</span>
                            </div>
                        </div>

                        <Link to="/contact" className="inline-block bg-wedding-gold text-white px-8 py-3 rounded-full font-medium hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Book a Session
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Specialties Section */}
            <div className="py-20 bg-wedding-gold/10">
                <div className="container mx-auto px-4">
                    <h3 className="text-4xl font-serif font-bold mb-4 text-wedding-dark text-center">Our Specializations</h3>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">We offer a variety of sessions tailored to different stages of your child's life.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {specialties.map((spec, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2 h-full flex flex-col"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={spec.image}
                                        alt={spec.title}
                                        loading='lazy'
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full shadow-lg z-20">
                                        {spec.icon}
                                    </div>
                                </div>
                                <div className="p-8 text-center flex-grow flex flex-col justify-between">
                                    <div>
                                        <h4 className="font-serif font-bold text-2xl text-wedding-dark mb-3">{spec.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{spec.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Preview / Call to Action */}
            <div className="py-20 bg-wedding-dark text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-wedding-gold rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-wedding-gold rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Ready to Capture Their Smile?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                        Let's create beautiful memories that you will cherish for a lifetime. Contact us today to schedule your newborn or kids photography session.
                    </p>
                    <Link to="/contact" className="inline-block bg-white text-wedding-dark px-10 py-4 rounded-full font-bold hover:bg-wedding-gold hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Contact Us Now
                    </Link>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <WhyChooseUs />
        </div>
    );
};

export default KidsAndNewbornPage;
