import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import ServiceTicker from '../components/ServiceTicker';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <ServiceTicker />
            <WhyChooseUs />
            <Portfolio />
            <Stats />
            <Testimonials />
            <Contact />
        </>
    );
};

export default Home;
