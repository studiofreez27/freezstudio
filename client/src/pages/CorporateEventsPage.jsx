import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase, Users, Award, TrendingUp, Mic, Camera } from 'lucide-react';
import ServiceTicker from '../components/ServiceTicker';
import WhyChooseUs from '../components/WhyChooseUs';

const CorporateEventsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            icon: <Mic className="w-10 h-10 text-wedding-gold" />,
            title: "Conferences & Seminars",
            desc: "Comprehensive coverage of speakers, panels, and audience engagement for your major industry events.",
            image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=1000&auto=format&fit=crop"
        },
        {
            icon: <Award className="w-10 h-10 text-wedding-gold" />,
            title: "Award Ceremonies",
            desc: "Capturing the pride and celebration of your employees and partners during gala nights and recognition events.",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop"
        },
        {
            icon: <Users className="w-10 h-10 text-wedding-gold" />,
            title: "Team Building & Outings",
            desc: "Documenting the candid moments of camaraderie and fun during corporate retreats and team activities.",
            image: "corporate events.jpg?q=80&w=1000&auto=format&fit=crop"
        },
        {
            icon: <Briefcase className="w-10 h-10 text-wedding-gold" />,
            title: "Product Launches",
            desc: "High-impact visuals for your new product reveals, ensuring your brand looks its absolute best.",
            image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop"
        },
        {
            icon: <Camera className="w-10 h-10 text-wedding-gold" />,
            title: "Corporate Headshots",
            desc: "Professional portraits for leadership teams and employees that convey confidence and approachability.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
        },
        {
            icon: <TrendingUp className="w-10 h-10 text-wedding-gold" />,
            title: "Marketing Assets",
            desc: "Creating a library of high-quality images for your website, social media, and internal communications.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Banner */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <img
                    src="corporate events.jpg?q=80&w=1000&auto=format&fit=crop"
                    alt="Corporate Event"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide mb-4 text-center px-4 drop-shadow-xl">
                        Corporate Event <br /> Photography
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl text-center mb-8 font-light">
                        Elevating your brand image with professional, high-impact visuals.
                    </p>
                    <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium tracking-wider uppercase">
                        <Link to="/" className="hover:text-wedding-gold transition-colors">Home</Link>
                        <span>&gt;</span>
                        <span className="text-wedding-gold">Corporate</span>
                    </div>
                </div>
            </div>

            {/* Intro Content */}
            <div className="py-24 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <h4 className="text-wedding-gold font-bold tracking-widest uppercase mb-2">Why Professional Photography?</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-wedding-dark mb-6">Your Brand's Visual Story Matters</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            In today's digital world, your company's visual identity is crucial. High-quality documentation of your events not only preserves memories but serves as a powerful marketing tool for future growth.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We bring a discrete yet attentive approach to corporate events, ensuring every handshake, keynote speech, and networking moment is captured with sharp precision and artistic flair.
                        </p>
                        <Link to="/contact" className="inline-block bg-wedding-gold text-white px-8 py-3 rounded-md font-medium hover:bg-black transition-all duration-300 shadow-lg">
                            Request a Quote
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 grid grid-cols-2 gap-4"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop"
                            alt="Meeting"
                            className="w-full h-64 object-cover rounded-lg shadow-lg mt-8"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1000&auto=format&fit=crop"
                            alt="Conference"
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Service Ticker */}
            <ServiceTicker
                customServices={[
                    "Conferences",
                    "Seminars",
                    "Product Launches",
                    "Team Building",
                    "Award Nights",
                    "Gala Dinners",
                    "Corporate Headshots",
                    "Brand Storytelling"
                ]}
            />

            {/* Services Grid */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-serif font-bold mb-4 text-wedding-dark text-center">Corporate Solutions</h3>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Tailored photography packages for businesses of all sizes.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100"
                            >
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 inline-block">
                                    {service.icon}
                                </div>
                                <h4 className="font-serif font-bold text-xl text-wedding-dark mb-3">{service.title}</h4>
                                <p className="text-gray-600 leading-relaxed mb-4">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Clients Logobar Placeholder (Optional - adds credibility) */}
            <div className="py-16 bg-white container mx-auto px-4 border-b border-gray-100">
                <p className="text-center text-gray-400 uppercase tracking-widest text-sm mb-8">Trusted by various industries</p>
                <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                    {/* Placeholder for client logos - just text for now or simple icons */}
                    <span className="text-2xl font-bold font-serif text-gray-300">TECHCORP</span>
                    <span className="text-2xl font-bold font-serif text-gray-300">INNOVATE</span>
                    <span className="text-2xl font-bold font-serif text-gray-300">GLOBAL INC</span>
                    <span className="text-2xl font-bold font-serif text-gray-300">FUTURE SYSTEMS</span>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <WhyChooseUs />
        </div>
    );
};

export default CorporateEventsPage;
