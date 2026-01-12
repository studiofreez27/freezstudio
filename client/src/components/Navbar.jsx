import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, ChevronDown, MapPin, Phone, Instagram, Facebook } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
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

    return (
        <nav className="fixed w-full z-50 flex flex-col">
            {/* Top Bar */}
            <div className={`hidden md:flex bg-wedding-gold/50 backdrop-blur-md text-white px-4 md:px-8 justify-between items-center text-xs font-medium z-50 transition-all duration-300 ease-in-out ${isHome && !scrolled ? 'h-6 opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
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
                    <a href="#" className="hover:text-wedding-gold transition-colors transform hover:scale-110">
                        <Instagram size={16} />
                    </a>
                    <a href="#" className="hover:text-wedding-gold transition-colors transform hover:scale-110">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-wedding-gold transition-colors transform hover:scale-110">
                        <Facebook size={16} />
                    </a>
                </div>
            </div>

            {/* Main Navbar */}
            <div className={`w-full transition-all duration-300 ${scrolled || !isHome ? 'bg-white/50 backdrop-blur-md shadow-md py-3' : 'bg-white/10 backdrop-blur-sm py-5'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Left Menu */}
                    <div className="hidden md:flex items-center gap-12 lg:gap-24 flex-1 justify-start">
                        <Link to="/" className={`text-sm font-medium tracking-widest uppercase hover:text-wedding-gold transition-colors ${scrolled || !isHome ? 'text-gray-600' : 'text-gray-200'}`}>
                            Home
                        </Link>
                        <Link to="/about" className={`text-sm font-medium tracking-widest uppercase hover:text-wedding-gold transition-colors ${scrolled || !isHome ? 'text-gray-600' : 'text-gray-200'}`}>
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className={`text-sm font-medium tracking-widest uppercase hover:text-wedding-gold transition-colors flex items-center gap-1 ${scrolled || !isHome ? 'text-gray-600' : 'text-gray-200'}`}>
                                Services
                                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <div className="py-2">
                                    {[
                                        "New Bornbaby & Kids Photo Shoot",
                                        "Pre & Post Wedding Shoot",
                                        "Traditional Photography",
                                        "Maternity Photoshoot",
                                        "Corporate Event Photoshoot",
                                        "Candid Photoshoot",
                                        "Cinematic Videography",
                                    ].map((service) => (
                                        <Link
                                            key={service}
                                            to={
                                                service === 'New Bornbaby & Kids Photo Shoot' ? '/kids-newborn' :
                                                    service === 'Pre & Post Wedding Shoot' ? '/pre-post-wedding' :
                                                        service === 'Traditional Photography' ? '/traditional-photography' :
                                                            service === 'Maternity Photoshoot' ? '/maternity-photography' :
                                                                service === 'Candid Photoshoot' ? '/candid-photography' :
                                                                    service === 'Cinematic Videography' ? '/cinematic-videography' :
                                                                        `/services/${service.toLowerCase().replace(/ /g, '-')}`
                                            }
                                            className="block px-6 py-3 text-sm text-gray-700 hover:bg-wedding-gold/10 hover:text-wedding-gold transition-colors border-b border-gray-100 last:border-0"
                                        >
                                            {service}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Logo */}
                    <Link to="/" className="flex items-center gap-2 group justify-center">
                        <span className={`text-2xl font-serif font-bold tracking-wider ${scrolled || !isHome ? 'text-wedding-dark' : 'text-white'} transition-colors`}>
                            Eternal Knot
                        </span>
                    </Link>

                    {/* Right Menu */}
                    <div className="hidden md:flex items-center gap-12 lg:gap-20 flex-1 justify-end">
                        {['Gallery', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                to={item === 'Gallery' ? '/gallery' : (item === 'Contact' ? '/contact' : (item === 'Home' ? '/' : `/#${item.toLowerCase()}`))}
                                className={`text-sm font-medium tracking-widest uppercase hover:text-wedding-gold transition-colors ${scrolled || !isHome ? 'text-gray-600' : 'text-gray-200'}`}
                            >
                                {item}
                            </Link>
                        ))}
                        <Link to="/book" className="bg-wedding-gold text-white px-6 py-2 rounded-full hover:bg-yellow-600 transition-all shadow-md hover:shadow-lg text-sm font-semibold tracking-wide">
                            Book Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <X className={`w-6 h-6 ${scrolled || !isHome ? 'text-wedding-dark' : 'text-white'}`} />
                        ) : (
                            <Menu className={`w-6 h-6 ${scrolled || !isHome ? 'text-wedding-dark' : 'text-white'}`} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden fixed inset-0 top-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-start pt-32 overflow-y-auto gap-8 animate-fade-in-down">
                        <div className="flex flex-col items-center gap-6">
                            {['Home', 'About', 'Services', 'Gallery', 'Contact'].map((item) => (
                                <Link
                                    key={item}
                                    to={item === 'Home' ? '/' : (item === 'Contact' ? '/contact' : `/#${item.toLowerCase()}`)}
                                    className="text-wedding-dark text-2xl font-serif tracking-widest uppercase hover:text-wedding-gold transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <Link
                                to="/book"
                                className="bg-wedding-gold text-white px-10 py-4 rounded-full text-lg mt-4 shadow-lg active:scale-95 transition-transform"
                                onClick={() => setIsOpen(false)}
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
