import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import config from '../config';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetch(config.API_URL + '/api/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error('Error fetching reviews:', err));
    }, []);

    const nextReview = () => {
        if (reviews.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        if (reviews.length === 0) return;
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    useEffect(() => {
        if (reviews.length === 0) return;
        const timer = setInterval(nextReview, 5000);
        return () => clearInterval(timer);
    }, [reviews]);

    if (reviews.length === 0) return null;

    return (
        <section className="section-padding bg-wedding-cream relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-wedding-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-wedding-gold/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h4 className="text-wedding-gold font-bold tracking-widest uppercase mb-2">Testimonials</h4>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-wedding-dark">What Our Customers Say</h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 p-3 rounded-full bg-white shadow-lg text-wedding-gold hover:bg-wedding-gold hover:text-white transition-all duration-300 hidden md:block"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 p-3 rounded-full bg-white shadow-lg text-wedding-gold hover:bg-wedding-gold hover:text-white transition-all duration-300 hidden md:block"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="relative h-[400px] md:h-[300px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center h-full flex flex-col justify-center items-center">
                                    <Quote className="text-wedding-gold w-12 h-12 mb-6 opacity-30" />

                                    <p className="text-gray-600 text-lg md:text-xl italic mb-8 leading-relaxed">
                                        "{reviews[currentIndex].text}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <img
                                            src={config.API_URL + reviews[currentIndex].image}
                                            alt={reviews[currentIndex].name}
                                            className="w-16 h-16 rounded-full object-cover border-2 border-wedding-gold"
                                        />
                                        <div className="text-left">
                                            <h5 className="font-serif font-bold text-xl text-wedding-dark">{reviews[currentIndex].name}</h5>
                                            <p className="text-sm text-wedding-gold font-medium uppercase tracking-wide">{reviews[currentIndex].role}</p>
                                            <div className="flex gap-1 mt-1">
                                                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                                                    <Star key={i} size={14} className="fill-wedding-gold text-wedding-gold" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {reviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-wedding-gold w-8' : 'bg-gray-300 hover:bg-wedding-gold/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
