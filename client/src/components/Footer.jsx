import React from 'react';
import { Camera, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <Camera className="w-8 h-8 text-wedding-gold" />
                            <span className="text-2xl font-serif font-bold tracking-wider text-white">
                                Eternal Knot
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Premium wedding photography and videography services. We craft timeless memories that you will cherish forever.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-wedding-gold transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-wedding-gold transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-wedding-gold transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-wedding-gold transition-colors"><Youtube className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-wedding-gold">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-wedding-gold">Services</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Wedding Photography</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cinematic Video</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pre-Wedding Shoots</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Candid Photography</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Event Coverage</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-serif font-bold mb-6 text-wedding-gold">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers and updates.</p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="bg-gray-800 text-white px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-wedding-gold text-sm"
                            />
                            <button className="bg-wedding-gold text-white px-4 py-2 rounded font-semibold hover:bg-yellow-600 transition-colors text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Eternal Knot Studio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
