import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import config from '../config';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        eventDate: '',
        eventType: 'Wedding',
        location: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch(config.API_URL + '/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    phone: '',
                    eventDate: '',
                    eventType: 'Wedding',
                    location: '',
                    message: ''
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-white p-10 rounded-xl shadow-xl text-center">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-20 h-20 text-green-500" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-wedding-dark mb-4">Booking Request Sent!</h3>
                <p className="text-gray-600 mb-8">
                    Thank you for choosing Eternal Knot Studio. We have received your details and will get back to you shortly to discuss your big day.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="bg-wedding-gold text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors"
                >
                    Book Another Date
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl border border-gray-100">
            <h3 className="text-3xl font-serif font-bold text-wedding-dark mb-8 text-center">Book Your Date</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                        <div className="relative">
                            <User className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <div className="relative">
                            <Phone className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                            <input
                                type="tel"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none transition-all"
                                placeholder="+91 98765 43210"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                            <input
                                type="date"
                                name="eventDate"
                                required
                                value={formData.eventDate}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                        <select
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none transition-all bg-white"
                        >
                            <option value="Wedding">Wedding</option>
                            <option value="Pre-Wedding">Pre-Wedding Shoot</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Reception">Reception</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <div className="relative">
                        <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            name="location"
                            required
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none transition-all"
                            placeholder="City, Venue"
                        />
                    </div>
                </div>

                <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <div className="relative">
                        <MessageSquare className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-wedding-gold focus:border-transparent outline-none transition-all"
                            placeholder="Tell us more about your vision..."
                        ></textarea>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full bg-wedding-gold text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-600'}`}
                >
                    {status === 'loading' ? 'Sending Request...' : 'Confirm Booking'}
                </button>

                {status === 'error' && (
                    <p className="text-red-500 text-center mt-4">Something went wrong. Please try again later.</p>
                )}
            </form>
        </div>
    );
};

export default BookingForm;
