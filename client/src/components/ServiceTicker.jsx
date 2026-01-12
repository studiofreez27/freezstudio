import React from 'react';
import { motion } from 'framer-motion';

const defaultServices = [
    "Pre & Post Wedding Photography",
    "Traditional Photography",
    "Candid Photography",
    "Maternity Photoshoot",
    "Kids Photoshoot",
    "Newborn Baby Photoshoot",
    "Cinematic Videography",
    "Corporate Events"
];

const ServiceTicker = ({ customServices }) => {
    const servicesToDisplay = customServices || defaultServices;

    return (
        <div className="bg-wedding-gold text-white h-16 flex items-center overflow-hidden relative z-20">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-25%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                }}
            >
                {/* Repeat the list multiple times to ensure continuous flow */}
                {[...servicesToDisplay, ...servicesToDisplay, ...servicesToDisplay, ...servicesToDisplay].map((service, index) => (
                    <div key={index} className="flex items-center gap-4 text-xl font-bold tracking-wider uppercase mr-16">
                        <span>{service}</span>
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default ServiceTicker;
