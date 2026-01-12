import React, { useEffect } from 'react';
import BookingForm from '../components/BookingForm';

const Booking = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-20 bg-wedding-cream min-h-screen">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h4 className="text-wedding-gold font-bold tracking-widest uppercase mb-2">Start Your Journey</h4>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-wedding-dark">Reserve Your Date</h1>
                        <p className="text-gray-600 mt-4 text-lg">
                            Fill out the form below to check availability and get a custom quote for your special day.
                        </p>
                    </div>
                    <BookingForm />
                </div>
            </div>
        </div>
    );
};

export default Booking;
