import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Flower, User, Music, Sun } from 'lucide-react';
import ServiceTicker from '../components/ServiceTicker';
import WhyChooseUs from '../components/WhyChooseUs';

const MaternityPhotographyPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const themes = [
        {
            title: "Valaikaappu Ceremony",
            desc: "Capturing the vibrant Bangle Ceremony, filled with the sound of glass bangles, laughter, and the blessings of elders.",
            image: "Maternity Img.jpg?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Traditional Portraits",
            desc: "Elegant portraits in rich Kanjivaram silk sarees and antique temple jewelry, celebrating the divine feminine grace.",
            image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=1000&auto=format&fit=crop"
        },
        {
            title: "Temple & Nature",
            desc: "Serene outdoor shoots in temple courtyards or lush greenery, symbolizing fertility and nature's blessing.",
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Banner */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src="Maternity Img.jpg?q=80&w=1000&auto=format&fit=crop"
                    alt="Traditional Maternity"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide mb-4 text-center px-4 drop-shadow-xl">
                        Traditional Maternity <br /> Photography
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl text-center mb-8 font-light italic">
                        Celebrating the divine journey of motherhood with grace and tradition.
                    </p>
                    <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium tracking-wider uppercase">
                        <Link to="/" className="hover:text-wedding-gold transition-colors">Home</Link>
                        <span>&gt;</span>
                        <span className="text-wedding-gold">Maternity</span>
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
                        <Flower className="w-12 h-12 text-wedding-gold" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-wedding-dark mb-8">The Glow of Motherhood</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        In our culture, pregnancy is celebrated as a divine blessing. It is a time when the mother is treated like a queen, adorned with flowers, sandalwood, and kumkum.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        We specialize in capturing these precious moments—the **Valaikaappu** (Bangle Ceremony), the **Seemantham**, and intimate portraits that reflect the anticipation and love of the growing family, all while staying true to our Tamil roots.
                    </p>
                </motion.div>
            </div>

            {/* Service Ticker */}
            <ServiceTicker
                customServices={[
                    "Valaikaappu",
                    "Seemantham",
                    "Motherhood Glow",
                    "Baby Bump",
                    "Family Love",
                    "Traditional Blessings",
                    "New Beginnings",
                    "Divine Journey"
                ]}
            />

            {/* Themes Grid */}
            <div className="py-20 bg-wedding-gold/5">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-serif font-bold mb-12 text-wedding-dark text-center">Our Traditional Themes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {themes.map((theme, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border-b-4 border-wedding-gold"
                            >
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img
                                        src={theme.image}
                                        alt={theme.title}
                                        loading='lazy'
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-full shadow-lg z-20">
                                        <Sparkles className="w-5 h-5 text-wedding-gold" />
                                    </div>
                                </div>
                                <div className="p-8 text-center">
                                    <h4 className="font-serif font-bold text-2xl text-wedding-dark mb-3">{theme.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{theme.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quote / Highlight Section */}
            <div className="py-24 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 border-2 border-wedding-gold/20 p-8 md:p-12 rounded-3xl relative overflow-hidden bg-white shadow-xl">
                    <div className="absolute -bottom-10 -left-10 p-4 opacity-10">
                        <Sun className="w-64 h-64 text-wedding-gold" />
                    </div>

                    <div className="w-full md:w-1/2 relative z-10 order-2 md:order-1">
                        <h3 className="text-3xl font-serif font-bold text-wedding-dark mb-6">Preserving The Legacy</h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            Every bangle placed on your wrist holds a prayer, every flower in your hair symbolizes blooming life. Let us preserve these timeless traditions for your little one to see someday.
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <Music className="text-wedding-gold w-6 h-6" />
                                <span className="text-gray-700 font-medium">Capturing the joy of the Bangle Ceremony</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <User className="text-wedding-gold w-6 h-6" />
                                <span className="text-gray-700 font-medium">Focus on the mother's radiant glow</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Heart className="text-wedding-gold w-6 h-6" />
                                <span className="text-gray-700 font-medium">Family blessings and candid emotions</span>
                            </li>
                        </ul>
                        <Link to="/contact" className="bg-wedding-gold text-white px-8 py-3 rounded-full font-medium hover:bg-black transition-colors shadow-lg">
                            Book Your Session
                        </Link>
                    </div>

                    <div className="w-full md:w-1/2 order-1 md:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000&auto=format&fit=crop"
                            alt="Motherhood Glow"
                            className="rounded-xl shadow-xl w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <WhyChooseUs />
        </div>
    );
};

export default MaternityPhotographyPage;
