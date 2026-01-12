import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Banner */}
            <div className="relative h-[50vh] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop"
                    alt="About Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white tracking-wide mb-4">About Us</h1>
                    <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium tracking-wider uppercase">
                        <Link to="/" className="hover:text-wedding-gold transition-colors">Home</Link>
                        <span>&gt;</span>
                        <span className="text-wedding-gold">About</span>
                    </div>
                </div>
            </div>

            {/* Specialization Section */}
            <div className="py-20 bg-wedding-gold/10">
                <div className="container mx-auto px-4">
                    <h3 className="text-4xl font-serif font-bold mb-12 text-wedding-dark text-center">Our Specialties</h3>
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            { title: "Emotional Storytelling", desc: "Weaving your moments into a beautiful narrative.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop" },
                            { title: "Cinematic Excellence", desc: "High-quality, movie-like production for your big day.", image: "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1000&auto=format&fit=crop" },
                            { title: "Timeless Portraits", desc: "Classic shots that will never go out of style.", image: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1000&auto=format&fit=crop" }
                        ].map((spec, index) => (
                            <div key={index} className="w-full md:w-[350px] bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={spec.image}
                                        alt={spec.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 border-t-4 border-wedding-gold text-center">
                                    <h4 className="font-serif font-bold text-2xl text-wedding-dark mb-3">{spec.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{spec.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

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
                            src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1000&auto=format&fit=crop"
                            alt="Wedding Detail"
                            className="w-full h-80 object-cover rounded-lg shadow-lg mt-12"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop"
                            alt="Couple Laughing"
                            className="w-full h-80 object-cover rounded-lg shadow-lg"
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
                        <h4 className="text-wedding-gold font-bold tracking-widest uppercase mb-2">Our Story</h4>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-wedding-dark">We Capture the <br /> Soul of Your Love</h1>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            At Eternal Knot Studio, we believe that every love story is unique and deserves to be told with authenticity and grace. We don't just take photos; we freeze emotions in time.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            With years of experience in capturing the subtle glances, the tearful smiles, and the joyous celebrations, our team of professional photographers and cinematographers ensures that your special day is preserved as a timeless masterpiece.
                        </p>

                        <div className="flex gap-8 mb-12">
                            <div>
                                <span className="block text-4xl font-serif font-bold text-wedding-gold">500+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">Weddings</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-serif font-bold text-wedding-gold">50+</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">Awards</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-serif font-bold text-wedding-gold">100%</span>
                                <span className="text-sm text-gray-500 uppercase tracking-wide">Happiness</span>
                            </div>
                        </div>




                    </motion.div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <WhyChooseUs />
        </div>
    );
};

export default AboutPage;
