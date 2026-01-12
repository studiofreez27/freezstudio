import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Camera, Users, Heart, Award } from 'lucide-react';
import config from '../config';

const iconMap = {
    'Camera': Camera,
    'Users': Users,
    'Heart': Heart,
    'Award': Award
};

const Counter = ({ value }) => {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
        const suffix = value.replace(/[0-9]/g, '');

        if (isInView) {
            const node = nodeRef.current;
            const controls = animate(0, numericValue, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate: (val) => {
                    node.textContent = Math.floor(val) + suffix;
                },
            });
            return () => controls.stop();
        }
    }, [isInView, value]);

    return <span ref={nodeRef} className="inline-block min-w-[3ch]">0</span>;
};

const Stats = () => {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        fetch(config.API_URL + '/api/stats')
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(err => console.error('Error fetching stats:', err));
    }, []);

    return (
        <section className="py-20 bg-wedding-dark text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-wedding-gold rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-wedding-gold rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => {
                        const IconComponent = iconMap[stat.icon] || Award;
                        return (
                            <motion.div
                                key={stat._id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-wedding-gold/50 transition-colors duration-300"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 bg-white/10 rounded-full">
                                        <IconComponent className="w-8 h-8 text-wedding-gold" />
                                    </div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-serif font-bold text-wedding-gold mb-2">
                                    <Counter value={stat.value} />
                                </h3>
                                <p className="text-gray-300 uppercase tracking-wider text-sm font-medium">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
