import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Camera, MapPin, Sparkles, Image as ImageIcon, Sun, Moon, Flower } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';

const PrePostWeddingPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Banner */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src="Traditional img.jpg"
                    alt="Tamil Traditional Wedding Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide mb-4 text-center px-4 drop-shadow-lg">
                        Tamil Tradition & <br /> Timeless Love
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl text-center mb-8 font-light italic">
                        "Mangalyam Tantunanena..." - Capturing the soul of Tamil culture.
                    </p>
                    <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium tracking-wider uppercase">
                        <Link to="/" className="hover:text-wedding-gold transition-colors">Home</Link>
                        <span>&gt;</span>
                        <span className="text-wedding-gold">Traditional Shoots</span>
                    </div>
                </div>
            </div>

            {/* Pre-Wedding Section - Traditional Start */}
            <section id="pre-wedding" className="py-24 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Content - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 order-2 md:order-1"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-3 bg-wedding-gold/10 rounded-full text-wedding-gold">
                                <Sun size={24} />
                            </span>
                            <h4 className="text-wedding-gold font-bold tracking-widest uppercase">Munnottam (The Beginning)</h4>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-wedding-dark">Traditional Pre-Wedding</h2>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            Before the holy tie of the **Thaali**, capture the divinity of your union. We specialize in authentic Tamil pre-wedding shoots that highlight our rich culture.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            Imagine standing amidst the grandeur of ancient **Temple Architecture**, draped in a rich Kanjivaram silk saree and traditional Veshti. We focus on the grace, the shyness, and the divine connection.
                        </p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-gray-700">
                                <MapPin className="text-wedding-gold w-5 h-5 flex-shrink-0" />
                                <span>Temple & Heritage Locations (Mahabalipuram, Madurai)</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <Sparkles className="text-wedding-gold w-5 h-5 flex-shrink-0" />
                                <span>Traditional Attire: Pattu Saree & Veshti Sattai</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <Flower className="text-wedding-gold w-5 h-5 flex-shrink-0" />
                                <span>Malli Poo & Temple Jewellery Aesthetics</span>
                            </li>
                        </ul>

                        <Link to="/contact" className="inline-block border-2 border-wedding-gold text-wedding-gold px-8 py-3 rounded-full font-medium hover:bg-wedding-gold hover:text-white transition-all duration-300">
                            Book Temple Shoot
                        </Link>
                    </motion.div>

                    {/* Image Grid - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 grid grid-cols-2 gap-4 order-1 md:order-2"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1000&auto=format&fit=crop"
                            alt="Traditional Couple 1"
                            loading='lazy'
                            className="w-full h-80 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 mt-12"
                        />
                        <img
                            src="Traditional img.jpg"
                            alt="Temple Architecture"
                            loading='lazy'
                            className="w-full h-80 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Divider with Kolam/Pattern motif if possible, using simple line for now */}
            <div className="flex items-center justify-center my-10 opacity-30">
                <div className="h-px bg-wedding-gold w-1/3"></div>
                <Flower className="text-wedding-gold mx-4 w-6 h-6" />
                <div className="h-px bg-wedding-gold w-1/3"></div>
            </div>

            {/* Post-Wedding Section - Romantic Heritage */}
            <section id="post-wedding" className="py-24 container mx-auto px-4 bg-wedding-gold/5 rounded-3xl">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    {/* Image Grid - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 grid grid-cols-2 gap-4"
                    >
                        <img
                            src="Traditional Img 2.jpg"
                            alt="Couple in Heritage Home"
                            loading='lazy'
                            className="w-full h-80 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?q=80&w=1000&auto=format&fit=crop"
                            alt="Romantic Traditional"
                            loading='lazy'
                            className="w-full h-80 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 mt-12"
                        />
                    </motion.div>

                    {/* Content - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="p-3 bg-wedding-gold/10 rounded-full text-wedding-gold">
                                <Moon size={24} />
                            </span>
                            <h4 className="text-wedding-gold font-bold tracking-widest uppercase">Illara Thodakkam (New Life)</h4>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-wedding-dark">Post-Wedding Heritage</h2>
                        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                            The celebration continues with elegance. Our post-wedding shoots blend romance with the rustic charm of **Chettinad Houses** or the serene beauty of our landscapes.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            Celebrate your new journey as husband and wife with visual stories that look like a classic Mani Ratnam movie frame—filled with color, culture, and love.
                        </p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-gray-700">
                                <Heart className="text-wedding-gold w-5 h-5 flex-shrink-0" />
                                <span>Heritage Home & Rustic Village Vibes</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <ImageIcon className="text-wedding-gold w-5 h-5 flex-shrink-0" />
                                <span>Cinematic Silk Saree Portraits</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-700">
                                <MapPin className="text-wedding-gold w-5 h-5 flex-shrink-0" />
                                <span>Outdoor Shoots amidst Nature</span>
                            </li>
                        </ul>

                        <Link to="/contact" className="inline-block bg-wedding-gold text-white px-8 py-3 rounded-full font-medium hover:bg-black transition-all duration-300 shadow-lg hover:shadow-xl">
                            Plan Heritage Shoot
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <div className="py-20 bg-wedding-dark text-white relative overflow-hidden mt-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-wedding-gold rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-wedding-gold rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Capture Your Roots</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                        Let's preserve your love story wrapped in the warmth of our tradition.
                    </p>
                    <Link to="/contact" className="inline-block bg-white text-wedding-dark px-10 py-4 rounded-full font-bold hover:bg-wedding-gold hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Enquire Now
                    </Link>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <WhyChooseUs />
        </div>
    );
};

export default PrePostWeddingPage;
