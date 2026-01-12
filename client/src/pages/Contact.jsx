import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Youtube } from 'lucide-react';
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', eventType: '', date: '', message: '' });
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Banner */}
            <div className="relative h-[50vh] w-full overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2000&auto=format&fit=crop"
                    alt="Contact Up"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-wide mb-4 text-center px-4 drop-shadow-xl">
                        Get In Touch
                    </h1>
                    <p className="text-white/90 text-lg md:text-xl max-w-2xl text-center mb-8 font-light italic">
                        Let's start planning your dream shoot together.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-24">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Contact Info - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/3 space-y-10"
                    >
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-wedding-dark mb-6">Contact Information</h2>
                            <p className="text-gray-600 mb-8">
                                Have a question or want to book a session? We'd love to hear from you. Reach out to us through any of the following channels.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-wedding-gold/10 transition-colors">
                                <div className="bg-white p-3 rounded-full shadow-md text-wedding-gold">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-wedding-dark">Phone</h4>
                                    <p className="text-gray-600">+91 98765 43210</p>
                                    <p className="text-gray-600">+91 91234 56789</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-wedding-gold/10 transition-colors">
                                <div className="bg-white p-3 rounded-full shadow-md text-wedding-gold">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-wedding-dark">Email</h4>
                                    <p className="text-gray-600">info@eternalknot.com</p>
                                    <p className="text-gray-600">bookings@eternalknot.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-wedding-gold/10 transition-colors">
                                <div className="bg-white p-3 rounded-full shadow-md text-wedding-gold">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-wedding-dark">Studio Location</h4>
                                    <p className="text-gray-600">123, Temple Street, T. Nagar,</p>
                                    <p className="text-gray-600">Chennai, Tamil Nadu - 600017</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-wedding-gold/10 transition-colors">
                                <div className="bg-white p-3 rounded-full shadow-md text-wedding-gold">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-wedding-dark">Business Hours</h4>
                                    <p className="text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM</p>
                                    <p className="text-gray-600">Sunday: By Appointment</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <h4 className="font-bold text-wedding-dark mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-wedding-dark text-white flex items-center justify-center hover:bg-wedding-gold transition-colors">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-wedding-dark text-white flex items-center justify-center hover:bg-wedding-gold transition-colors">
                                    <Facebook size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-wedding-dark text-white flex items-center justify-center hover:bg-wedding-gold transition-colors">
                                    <Youtube size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
                    >
                        <h3 className="text-2xl font-serif font-bold text-wedding-dark mb-2">Send Us a Message</h3>
                        <p className="text-gray-500 mb-8">Tell us about your event and we'll get back to you with a custom quote.</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none transition-all"
                                        placeholder="+91 98765 43210"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Event Date (Tentative)</label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Event Type</label>
                                <select
                                    name="eventType"
                                    value={formData.eventType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none transition-all"
                                >
                                    <option value="">Select Event Type</option>
                                    <option value="Wedding">Wedding Photography</option>
                                    <option value="Pre-Wedding">Pre/Post Wedding Shoot</option>
                                    <option value="Maternity">Maternity Shoot</option>
                                    <option value="Kids">Kids & Newborn Shoot</option>
                                    <option value="Corporate">Corporate Event</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Message / Details</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="Tell us more about your event location, requirements, etc."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-wedding-dark text-white font-bold py-4 rounded-lg hover:bg-wedding-gold transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-[400px] bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1167537335!2d80.0689243486395!3d13.047487786435345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <WhyChooseUs />
        </div>
    );
};

export default Contact;
