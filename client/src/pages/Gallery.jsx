import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import config from '../config';

const Gallery = () => {
    const [items, setItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const categories = ["All", "Wedding", "Pre-Wedding", "Candid", "Video", "Other"];

    useEffect(() => {
        fetchGalleryItems();
    }, []);

    const fetchGalleryItems = async () => {
        try {
            const response = await fetch(config.API_URL + '/api/gallery');
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('Error fetching gallery:', error);
        }
    };

    const filteredItems = activeCategory === "All"
        ? items
        : items.filter(item => item.category === activeCategory);

    return (
        <div className="pt-24 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h4 className="text-wedding-gold font-bold tracking-widest uppercase mb-2">Our Portfolio</h4>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-wedding-dark">Gallery</h1>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${activeCategory === cat
                                ? 'bg-wedding-gold text-white shadow-md'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                {items.length === 0 ? (
                    <p className="text-center text-gray-500">No images found. Admin needs to upload some!</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item._id}
                                className="relative group overflow-hidden rounded-lg cursor-pointer shadow-lg"
                            >
                                <img
                                    src={config.API_URL + item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-white font-serif text-2xl font-bold mb-1">{item.title}</h3>
                                        <p className="text-wedding-gold text-sm uppercase tracking-wider">{item.category}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
