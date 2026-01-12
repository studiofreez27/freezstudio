import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion'; // Added hooks for parallax
import { Camera, Heart, Globe, Award, Instagram, Facebook, Twitter, Linkedin, Quote } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const teamMembers = [
        {
            name: "Rajesh Kumar",
            role: "Lead Photographer",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop",
            social: ["insta", "fb"]
        },
        {
            name: "Anjali Menon",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
            social: ["insta", "linkedin"]
        },
        {
            name: "Vikram Singh",
            role: "Cinematographer",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
            social: ["insta", "twitter"]
        },
        {
            name: "Sneha Reddy",
            role: "Senior Editor",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
            social: ["insta", "fb"]
        }
    ];

    const timeline = [
        { year: "2015", title: "The Beginning", desc: "Started as a small passion project in Chennai." },
        { year: "2018", title: "Global Wings", desc: "Captured our first international destination wedding." },
        { year: "2020", title: "The Studio", desc: "Launched our flagship studio with state-of-the-art cinematic gear." },
        { year: "2024", title: "A Legacy", desc: "Celebrated 500+ love stories documented eternally." }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* 1. Ultra-Premium Hero Section */}
            <div className="relative h-[85vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>

                {/* Slow Zoom Background */}
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="w-full h-full"
                >
                    <img
                        src="studio image.jpg?q=80&w=2000&auto=format&fit=crop"
                        alt="Studio Team"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <h4 className="text-white/80 font-light tracking-[0.5em] uppercase mb-6 text-sm md:text-base border-b border-wedding-gold/30 pb-4 inline-block">Since 2015</h4>
                        <h1 className="text-6xl md:text-9xl font-serif font-bold text-white mb-6 drop-shadow-2xl leading-none">
                            We Are <br />
                            <span className="bg-gradient-to-r from-wedding-gold via-yellow-200 to-wedding-gold bg-clip-text text-transparent bg-300% animate-shine">
                                Eternal Knot
                            </span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed tracking-wide italic">
                            "Capturing the moments you'll cherish forever."
                        </p>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 2, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
                >
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-wedding-gold to-transparent"></div>
                </motion.div>
            </div>

            {/* 2. The Philosophy - Magazine Style Layout */}
            <div className="py-32 container mx-auto px-4 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-0 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="w-full md:w-1/2 relative z-10"
                    >
                        <div className="relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-wedding-gold/10 rounded-full blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=1000&auto=format&fit=crop"
                                alt="Photographer at work"
                                className="w-full h-[600px] object-cover shadow-2xl rounded-sm"
                            />
                        </div>
                    </motion.div>

                    {/* Overlapping Glass Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full md:w-1/2 bg-white/95 backdrop-blur-xl p-10 md:p-16 md:-ml-20 shadow-2xl relative z-20 border-l-4 border-wedding-gold mt-[-100px] md:mt-0"
                    >
                        <Quote className="text-wedding-gold w-12 h-12 mb-6 opacity-50" />
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-wedding-dark mb-8 leading-tight">
                            Photography is the <span className="text-wedding-gold">Pause Button</span> of Life.
                        </h2>
                        <p className="text-gray-600 text-lg leading-loose mb-6 font-light">
                            We don't just click pictures; we capture the soul of the moment. A wedding is a mosaic of a thousand fleeting emotions—a father's silent tear, a mother's proud smile, and the quiet intimacy of the couple.
                        </p>
                        <div className="flex items-center gap-4 mt-8">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png"
                                alt="Signature"
                                className="h-10 opacity-60"
                            />
                            <div className="h-px w-20 bg-gray-300"></div>
                            <span className="text-sm uppercase tracking-widest text-gray-500 font-bold">Founder</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 3. Stats Section Integration with Black Theme */}
            <div className="bg-black py-10 relative">
                <div className="absolute inset-0 bg-wedding-gold/5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-wedding-gold/20 via-transparent to-transparent opacity-30"></div>
                <div className="relative z-10">
                    <Stats />
                </div>
            </div>

            {/* 4. Luxurious Timeline */}
            <div className="py-32 bg-zinc-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wedding-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-center mb-24"
                    >
                        <h3 className="text-wedding-gold tracking-[0.3em] uppercase text-sm font-bold mb-4">Our Heritage</h3>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">A Decade of Excellence</h2>
                    </motion.div>

                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[100px] left-0 w-full h-px bg-gradient-to-r from-transparent via-wedding-gold/50 to-transparent"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative group text-center"
                                >
                                    {/* Glowing Node */}
                                    <div className="hidden md:flex absolute top-[100px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 border-wedding-gold rounded-full z-10 justify-center items-center group-hover:scale-150 transition-transform duration-500 shadow-[0_0_15px_rgba(212,175,55,0.6)]">
                                        <div className="w-1.5 h-1.5 bg-wedding-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>

                                    <div className="md:pt-40 pt-0 group-hover:-translate-y-2 transition-transform duration-300">
                                        <h4 className="text-6xl font-serif font-bold text-white/5 absolute top-0 left-1/2 -translate-x-1/2 select-none md:block hidden">{item.year}</h4>
                                        <h3 className="text-3xl font-serif font-bold text-wedding-gold mb-3 md:hidden">{item.year}</h3>
                                        <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                                        <p className="text-gray-400 font-light leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 5. Team Section - Gallery Style */}
            <div className="py-32 container mx-auto px-4 bg-white relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-24 h-full bg-gradient-to-r from-wedding-gold/5 to-transparent"></div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-center mb-20"
                >
                    <h3 className="text-4xl md:text-6xl font-serif font-bold text-wedding-dark mb-4">The Artists</h3>
                    <div className="w-24 h-1 bg-wedding-gold mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden h-[500px]"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                            />
                            {/* Stylish Overlay */}
                            <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl border-b-4 border-wedding-gold">
                                <h4 className="text-xl font-bold font-serif text-wedding-dark">{member.name}</h4>
                                <p className="text-wedding-gold text-xs font-bold uppercase tracking-widest mb-4">{member.role}</p>
                                <div className="flex gap-4">
                                    <div className="text-gray-400 hover:text-black transition-colors cursor-pointer"><Instagram size={18} /></div>
                                    <div className="text-gray-400 hover:text-black transition-colors cursor-pointer"><Facebook size={18} /></div>
                                    <div className="text-gray-400 hover:text-black transition-colors cursor-pointer"><Linkedin size={18} /></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 6. Why Choose Us (Existing) */}
            <WhyChooseUs />

            {/* 7. Grand CTA - Gold Texture */}
            <div className="relative py-40 bg-wedding-gold overflow-hidden text-center z-10">
                <div className="absolute inset-0 bg-black mix-blend-multiply opacity-80"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-4 relative z-20"
                >
                    <h2 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tight">Make It Eternal.</h2>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                        Your love story deserves nothing less than a masterpiece. <br /> Let's create something breathtaking together.
                    </p>
                    <Link to="/contact" className="inline-block bg-white text-black text-lg font-bold px-16 py-5 hover:bg-black hover:text-wedding-gold transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.3)] uppercase tracking-widest border border-transparent hover:border-wedding-gold">
                        Begin The Journey
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;
