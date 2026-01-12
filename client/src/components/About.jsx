import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding bg-white">
            <div className="container mx-auto">
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
                            className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop"
                            alt="Couple Laughing"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
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
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-wedding-dark">We Capture the <br /> Soul of Your Love</h2>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            At Eternal Knot Studio, we believe that every love story is unique and deserves to be told with authenticity and grace. We don't just take photos; we freeze emotions in time.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            With years of experience in capturing the subtle glances, the tearful smiles, and the joyous celebrations, our team of professional photographers and cinematographers ensures that your special day is preserved as a timeless masterpiece.
                        </p>

                        <div className="flex gap-8">
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
        </section>
    );
};

export default About;
