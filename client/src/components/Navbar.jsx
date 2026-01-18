import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, ChevronDown, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    // Service Links Data
    const serviceLinks = [
        { name: "New Bornbaby & Kids", path: "/kids-newborn" },
        { name: "Pre & Post Wedding", path: "/pre-post-wedding" },
        { name: "Traditional Photography", path: "/traditional-photography" },
        { name: "Maternity Photoshoot", path: "/maternity-photography" },
        { name: "Corporate Events", path: "/corporate-events" },
        { name: "Candid Photoshoot", path: "/candid-photography" },
        { name: "Cinematic Videography", path: "/cinematic-videography" },
    ];

    return (
        <nav className="fixed w-full z-50 flex flex-col">
            {/* Top Bar - Desktop Only */}
            <div className={`hidden md:flex bg-black/90 text-white px-4 md:px-8 justify-between items-center text-xs font-medium z-50 transition-all duration-300 ease-in-out ${isHome && !scrolled ? 'h-8 opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
                <div className="flex items-center gap-6 ml-12">
                    <div className="flex items-center gap-2 hover:text-wedding-gold transition-colors cursor-pointer">
                        <MapPin size={12} className="text-wedding-gold" />
                        <span>Chennai, India</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-wedding-gold transition-colors cursor-pointer">
                        <Phone size={12} className="text-wedding-gold" />
                        <span>+91 98765 43210</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-wedding-gold transition-colors transform hover:scale-110"><Instagram size={14} /></a>
                    <a href="#" className="hover:text-wedding-gold transition-colors transform hover:scale-110"><Facebook size={14} /></a>
                </div>
            </div>

            {/* Main Navbar */}
            <div className={`w-full transition-all duration-300 ${scrolled || !isHome || isOpen ? 'bg-white shadow-xl py-3' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">

                    {/* Desktop Left Menu */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-start">
                        <Link to="/" className={`text-sm font-medium tracking-widest uppercase hover:text-wedding-gold transition-colors ${scrolled || !isHome ? 'text-black' : 'text-white'}`}>
                            Home
                        </Link>
                        <Link to="/about" className={`text-sm font-medium tracking-widest uppercase hover:text-wedding-gold transition-colors ${scrolled || !isHome ? 'text-black' : 'text-white'}`}>
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className={`text-sm font-medium tracking-widest uppercase hover:text-wedding-gold transition-colors flex items-center gap-1 ${scrolled || !isHome ? 'text-black' : 'text-white'}`}>
                                Services
                                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-0 mt-4 w-72 bg-white shadow-2xl rounded-sm overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border-t-2 border-wedding-gold">
                                <div className="py-2">
                                    {serviceLinks.map((service) => (
                                        <Link
                                            key={service.name}
                                            to={service.path}
                                            className="block px-6 py-3 text-sm text-gray-700 hover:bg-wedding-gold/5 hover:text-wedding-gold transition-colors border-b border-gray-100 last:border-0 font-medium"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Logo */}
                    <Link to="/" className="flex items-center gap-2 group justify-center z-50">
                        <span className={`text-2xl md:text-3xl font-serif font-bold tracking-wider ${scrolled || !isHome || isOpen ? 'text-black' : 'text-white'} transition-colors`}>
                            Eternal Knot
                        </span>
                    </Link>

                    {/* Desktop Right Menu */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-end">
                        <Link to="/gallery" className={`text-sm font-medium tracking-widest uppercase hover:text-wedding-gold transition-colors ${scrolled || !isHome ? 'text-black' : 'text-white'}`}>
                            Gallery
                        </Link>
                        <Link to="/contact" className={`text-sm font-medium tracking-widest uppercase hover:text-wedding-gold transition-colors ${scrolled || !isHome ? 'text-black' : 'text-white'}`}>
                            Contact
                        </Link>
                        <Link to="/contact" className="bg-wedding-gold text-white px-8 py-2.5 rounded-sm hover:bg-black transition-all shadow-md hover:shadow-lg text-sm font-bold tracking-widest uppercase">
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <X className="w-7 h-7 text-black" />
                        ) : (
                            <Menu className={`w-7 h-7 ${scrolled || !isHome ? 'text-black' : 'text-white'}`} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 overflow-y-auto duration-500 ease-in-out transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                    <div className="flex flex-col gap-6 text-center">
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-serif font-bold text-black border-b border-gray-100 pb-4"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-serif font-bold text-black border-b border-gray-100 pb-4"
                        >
                            About
                        </Link>

                        {/* Mobile Services Accordion */}
                        <div className="border-b border-gray-100 pb-4">
                            <button
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                className="w-full text-2xl font-serif font-bold text-black flex items-center justify-center gap-2 mb-4"
                            >
                                Services
                                <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <div className={`flex flex-col gap-3 overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                {serviceLinks.map((service) => (
                                    <Link
                                        key={service.name}
                                        to={service.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-600 text-lg hover:text-wedding-gold font-medium"
                                    >
                                        {service.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            to="/gallery"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-serif font-bold text-black border-b border-gray-100 pb-4"
                        >
                            Gallery
                        </Link>
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-serif font-bold text-black border-b border-gray-100 pb-4"
                        >
                            Contact
                        </Link>

                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="bg-wedding-gold text-white text-lg font-bold py-4 mt-4 uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
                        >
                            Book A Session
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
