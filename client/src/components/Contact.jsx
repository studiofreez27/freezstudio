import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import config from '../config';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'loading', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch(config.API_URL + '/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 5000); // Clear success message after 5s
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section-padding bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h4 className="text-wedding-gold font-bold tracking-widest uppercase mb-2">Get in Touch</h4>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-wedding-dark">Let's Work Together</h2>
                </div>

                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-wedding-cream p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full text-wedding-gold shadow-sm">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-wedding-dark mb-2">Phone</h3>
                                    <p className="text-gray-600">+91 98765 43210</p>
                                    <p className="text-gray-600">+91 98765 43211</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-wedding-cream p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full text-wedding-gold shadow-sm">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-wedding-dark mb-2">Email</h3>
                                    <p className="text-gray-600">info@eternalknotstudio.com</p>
                                    <p className="text-gray-600">bookings@eternalknotstudio.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-wedding-cream p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full text-wedding-gold shadow-sm">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-wedding-dark mb-2">Studio</h3>
                                    <p className="text-gray-600">123, Wedding Avenue, Anna Nagar,</p>
                                    <p className="text-gray-600">Chennai - 600040</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold outline-none transition-all"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold outline-none transition-all"
                                    placeholder="Wedding Photography Inquiry"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Write a Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold outline-none transition-all resize-none"
                                    placeholder="Tell us about your event..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-wedding-gold text-white font-bold py-4 rounded-lg hover:bg-yellow-600 transition-all duration-300 flex justify-center items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                {status === 'loading' ? 'Sending...' : (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center gap-3 animate-fade-in-up">
                                    <CheckCircle size={24} />
                                    <div>
                                        <p className="font-bold">Message Sent Successfully!</p>
                                        <p className="text-sm">Our team will contact you within 12 hours.</p>
                                    </div>
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="bg-red-50 text-red-700 p-4 rounded-lg text-center animate-fade-in-up">
                                    Something went wrong. Please try again.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
