import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        date: '',
        message: ''
    });

    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', eventType: '', date: '', message: '' });
    };

    const inputClasses = "w-full bg-transparent border-b-2 border-gray-600 text-white px-4 py-3 outline-none focus:border-wedding-gold transition-colors duration-300 placeholder-transparent";
    const labelClasses = "absolute left-4 -top-3 text-sm text-wedding-gold transition-all duration-300 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-wedding-gold";

    return (
        <div className="bg-black min-h-screen text-white selection:bg-wedding-gold selection:text-black">
            {/* 1. Cinematic Hero Section */}
            <div className="relative h-[60vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, ease: "linear" }}
                    className="w-full h-full"
                >
                    <img
                        src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2000&auto=format&fit=crop"
                        alt="Contact Banner"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-wedding-gold font-bold tracking-[0.5em] uppercase mb-4 text-sm decoration-wavy">Reach Out</h4>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
                            Let’s Start a <br /> Conversation
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* 2. Premium Content Split */}
            <div className="container mx-auto px-4 py-24 relative z-20 -mt-20">
                <div className="bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/10">

                    {/* Left: Contact Info (Darker) */}
                    <div className="w-full lg:w-2/5 bg-zinc-950 p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-wedding-gold/5 rounded-full blur-[80px]"></div>

                        <h2 className="text-3xl font-serif font-bold text-white mb-8 relative z-10">Contact Information</h2>
                        <p className="text-gray-400 mb-12 relative z-10 font-light leading-relaxed">
                            Ready to create something timeless? We are just a message away. Visit our studio or drop us a line.
                        </p>

                        <div className="space-y-10 relative z-10">
                            {[
                                { icon: <Phone size={24} />, title: "Call Us", line1: "+91 98765 43210", line2: "+91 91234 56789" },
                                { icon: <Mail size={24} />, title: "Email Us", line1: "info@eternalknot.com", line2: "booking@eternalknot.com" },
                                { icon: <MapPin size={24} />, title: "Visit Us", line1: "123, Temple Street, T. Nagar", line2: "Chennai, Tamil Nadu" },
                                { icon: <Clock size={24} />, title: "Opening Hours", line1: "Mon - Sat: 10AM - 8PM", line2: "Sunday: By Appointment" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-6 group cursor-default">
                                    <div className="w-12 h-12 rounded-full border border-wedding-gold/30 flex items-center justify-center text-wedding-gold group-hover:bg-wedding-gold group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1 group-hover:text-wedding-gold transition-colors">{item.title}</h4>
                                        <p className="text-gray-500 text-sm">{item.line1}</p>
                                        <p className="text-gray-500 text-sm">{item.line2}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 relative z-10">
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Follow Our Journey</h4>
                            <div className="flex gap-4">
                                {[Instagram, Facebook, Youtube, MessageCircle].map((Icon, idx) => (
                                    <a key={idx} href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-wedding-gold hover:text-wedding-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                                        <Icon size={18} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: The Form (Lighter Black/Zinc) */}
                    <div className="w-full lg:w-3/5 bg-zinc-900 p-12 md:p-16">
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">Send Us a Message</h3>
                        <p className="text-gray-500 mb-10">Fill the form and our team will get back to you within 24 hours.</p>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`peer ${inputClasses}`}
                                        placeholder="Name"
                                        required
                                    />
                                    <label htmlFor="name" className={labelClasses}>Your Name</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`peer ${inputClasses}`}
                                        placeholder="Phone"
                                        required
                                    />
                                    <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`peer ${inputClasses}`}
                                        placeholder="Email"
                                        required
                                    />
                                    <label htmlFor="email" className={labelClasses}>Email Address</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className={`peer w-full bg-transparent border-b-2 border-gray-600 text-white px-4 py-3 outline-none focus:border-wedding-gold transition-colors duration-300`}
                                        placeholder="Date"
                                    />
                                    <label className="absolute left-4 -top-3 text-sm text-wedding-gold">Event Date</label>
                                </div>
                            </div>

                            <div className="relative">
                                <select
                                    name="eventType"
                                    id="eventType"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    className={`peer w-full bg-transparent border-b-2 border-gray-600 text-white px-4 py-3 outline-none focus:border-wedding-gold transition-colors duration-300 appearance-none`}
                                >
                                    <option value="" className="bg-zinc-900 text-gray-500">Select Event Type</option>
                                    <option value="Wedding" className="bg-zinc-900">Wedding Photography</option>
                                    <option value="Pre-Wedding" className="bg-zinc-900">Pre/Post Wedding Shoot</option>
                                    <option value="Maternity" className="bg-zinc-900">Maternity Shoot</option>
                                    <option value="Kids" className="bg-zinc-900">Kids & Newborn Shoot</option>
                                    <option value="Corporate" className="bg-zinc-900">Corporate Event</option>
                                </select>
                                <label className="absolute left-4 -top-3 text-sm text-wedding-gold">Event Type</label>
                            </div>

                            <div className="relative">
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className={`peer ${inputClasses} resize-none`}
                                    placeholder="Message"
                                ></textarea>
                                <label htmlFor="message" className={labelClasses}>Tell us more about your event...</label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-wedding-gold text-black font-bold py-5 rounded-none hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] mt-4 group"
                            >
                                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Premium Map Integration */}
            <div className="w-full h-[500px] relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1167537335!2d80.0689243486395!3d13.047487786435345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 bg-wedding-gold/10 pointer-events-none mix-blend-overlay"></div>
            </div>

            <WhyChooseUs darkMode={true} />
        </div>
    );
};

export default Contact;
