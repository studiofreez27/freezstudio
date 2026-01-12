import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className="py-20 bg-wedding-gold/10 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Side - Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-wedding-dark uppercase tracking-widest font-semibold text-sm mb-2 block">Why Choose Us</span>
                        <h2 className="text-2xl md:text-3xl text-wedding-gold font-serif font-bold mb-10 leading-tight">Why People Chose Us ?</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
                            {[
                                { title: "Quality", desc: "Uncompromising quality in every frame we capture." },
                                { title: "Expertise", desc: "Mastery in lighting, composition, and storytelling." },
                                { title: "Personalized", desc: "Tailored experiences that reflect your unique bond." },
                                { title: "Professionalism", desc: "Dedicated, punctual, and seamless service." }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 group p-4 rounded-lg hover:bg-white/50 transition-all duration-300">
                                    <div className="w-12 h-12 rounded-full bg-wedding-gold/10 flex items-center justify-center flex-shrink-0 border border-wedding-gold/20 group-hover:border-wedding-gold group-hover:bg-wedding-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-wedding-gold group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-wedding-dark group-hover:text-wedding-gold transition-colors">{item.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="w-full lg:w-1/2 h-full">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group h-full min-h-[400px]">
                            <div className="absolute inset-0 bg-wedding-gold/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                            <img
                                src="studio image 2.jpg"
                                alt="Studio Interface"
                                loading='lazy'
                                decoding='async'
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 transform-gpu"
                                style={{ willChange: 'transform' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
