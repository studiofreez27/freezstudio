import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scroll, Users, Music, Heart, Sun, Flame, Flower } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';

const TraditionalPhotographyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const rituals = [
        {
            title: "Muhurtham",
            desc: "The sacred moment of tying the Thaali, surrounded by the melody of Nadaswaram and blessings of elders.",
            image: "Traditional Img 2.jpg"
        },
        {
            title: "Oonjal Ceremony",
            desc: "Playful yet significant, symbolizing the couple's balance in life as they swing together amidst traditional songs.",
            image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Nalangu & Kasi Yatra",
            desc: "Capturing the fun-filled rituals that bring laughter and joy to the beginning of a new journey.",
            image: "https://images.unsplash.com/photo-1595085610896-fb31cfd5d4b7?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Banner */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src="Traditional img.jpg"
                    alt="Tamil Traditional Wedding"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide mb-4 text-center px-4 drop-shadow-xl">
                        Traditional Wedding <br /> Photography
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl text-center mb-8 font-light italic">
                        "Kalyanam to Kattu Soru" - Documenting every ritual with reverence.
                    </p>
                    <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium tracking-wider uppercase">
                        <Link to="/" className="hover:text-wedding-gold transition-colors">Home</Link>
                        <span>&gt;</span>
                        <span className="text-wedding-gold">Traditional</span>
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
                        <Flame className="w-12 h-12 text-wedding-gold" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-wedding-dark mb-8">The Soul of Tamizh Culture</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        A Tamil wedding is not just an event; it's a tapestry of ancient rituals, vibrant emotion, and divine blessings. From the early morning **Gauri Puja** to the grand **Maalai Maatral**, we understand the significance of every moment.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our traditional photography style focuses on **authenticity**. We ensure that the mantras, the tears of joy, the laughter during the games, and the serenity of the rituals are preserved exactly as they felt.
                    </p>
                </motion.div>
            </div>

            {/* Rituals Grid */}
            <div className="py-20 bg-wedding-gold/5">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-serif font-bold mb-12 text-wedding-dark text-center">Sacred Moments We Capture</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {rituals.map((ritual, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border-t-4 border-wedding-gold"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={ritual.image}
                                        alt={ritual.title}
                                        loading='lazy'
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 text-center">
                                    <h4 className="font-serif font-bold text-2xl text-wedding-dark mb-3">{ritual.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{ritual.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quote / Highlight Section */}
            <div className="py-24 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 border-2 border-wedding-gold/20 p-8 md:p-12 rounded-3xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Flower className="w-64 h-64 text-wedding-gold" />
                    </div>

                    <div className="w-full md:w-1/2">
                        <img
                            src="traditional.jpg?q=80&w=1000&auto=format&fit=crop"
                            alt="Traditional Couple"
                            className="rounded-xl shadow-xl w-full h-[400px] object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2 relative z-10">
                        <h3 className="text-3xl font-serif font-bold text-wedding-dark mb-6">Why Traditional Matters?</h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            Trends may come and go, but tradition is timeless. Years down the line, these are the photos that will tell your grandchildren about your heritage.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <Scroll className="text-wedding-gold w-6 h-6" />
                                <span className="text-gray-700 font-medium">Documenting every Vedhic ritual</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Users className="text-wedding-gold w-6 h-6" />
                                <span className="text-gray-700 font-medium">Focus on Family & Elders</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Music className="text-wedding-gold w-6 h-6" />
                                <span className="text-gray-700 font-medium">Capturing the festival vibe (Kalyana Galatta)</span>
                            </li>
                        </ul>
                        <Link to="/contact" className="bg-wedding-gold text-white px-8 py-3 rounded-md font-medium hover:bg-black transition-colors shadow-lg">
                            Preserve Your Tradition
                        </Link>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <WhyChooseUs />
        </div>
    );
};

export default TraditionalPhotographyPage;
