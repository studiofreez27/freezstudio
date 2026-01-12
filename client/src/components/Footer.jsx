import React from 'react';
import { Camera, Instagram, Facebook, Twitter, Youtube, ArrowUpRight, Heart, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white relative overflow-hidden border-t border-white/10">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-wedding-gold to-transparent opacity-50"></div>
            <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] bg-wedding-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">

                    {/* Brand Section */}
                    <div className="lg:col-span-1 space-y-8">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="bg-wedding-gold p-2 rounded-lg text-black group-hover:rotate-12 transition-transform duration-300">
                                <Camera size={24} />
                            </div>
                            <span className="text-2xl font-serif font-bold tracking-wider bg-gradient-to-r from-wedding-gold via-white to-wedding-gold bg-clip-text text-transparent bg-300% animate-shine">
                                Eternal Knot
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-7 font-light">
                            We are storytellers of love, capturing the raw emotions and fleeting moments that make your wedding day truly eternal. Based in Chennai, traveling worldwide.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Youtube, Twitter].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-wedding-gold hover:border-wedding-gold hover:bg-black transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Explore */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-8 text-white relative inline-block">
                            Explore
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-wedding-gold"></span>
                        </h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About Us", path: "/about" },
                                { name: "Contact", path: "/contact" },
                                { name: "Careers", path: "#" },
                                { name: "Privacy Policy", path: "#" }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="flex items-center gap-2 hover:text-wedding-gold hover:translate-x-2 transition-all duration-300 group">
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-8 text-white relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-wedding-gold"></span>
                        </h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            {[
                                { name: "Traditional Wedding", path: "/services/traditional" },
                                { name: "Candid Photography", path: "/services/candid" },
                                { name: "Cinematic Video", path: "/services/cinematic" },
                                { name: "Maternity Shoots", path: "/services/maternity" },
                                { name: "Kids & Newborn", path: "/services/kids-newborn" }
                            ].map((link, idx) => (
                                <li key={idx}>
                                    <Link to={link.path} className="hover:text-wedding-gold transition-colors block">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h4 className="text-lg font-serif font-bold mb-8 text-white relative inline-block">
                            Get In Touch
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-wedding-gold"></span>
                        </h4>
                        <div className="space-y-6 text-gray-400 text-sm mb-8">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-wedding-gold mt-1 shrink-0" />
                                <p>123, Temple Street, T. Nagar, <br /> Chennai - 600017</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-wedding-gold shrink-0" />
                                <p>+91 98765 43210</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-wedding-gold shrink-0" />
                                <p>info@eternalknot.com</p>
                            </div>
                        </div>

                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Subscribe to updates"
                                className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 rounded-none focus:outline-none focus:border-wedding-gold transition-colors text-sm pr-12 placeholder-gray-600"
                            />
                            <button className="absolute right-0 top-0 h-full px-4 text-wedding-gold hover:text-white transition-colors">
                                <ArrowUpRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Eternal Knot Studio. <span className="hidden md:inline">|</span> All rights reserved.</p>
                    <div className="flex items-center gap-1">
                        Made with <Heart size={12} className="text-red-500 fill-current animate-pulse" /> in Chennai
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
