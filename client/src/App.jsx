import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Booking = lazy(() => import('./pages/Booking'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Login = lazy(() => import('./pages/Login'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const KidsAndNewbornPage = lazy(() => import('./pages/KidsAndNewbornPage'));
const PrePostWeddingPage = lazy(() => import('./pages/PrePostWeddingPage'));
const TraditionalPhotographyPage = lazy(() => import('./pages/TraditionalPhotographyPage'));
const MaternityPhotographyPage = lazy(() => import('./pages/MaternityPhotographyPage'));
const CorporateEventsPage = lazy(() => import('./pages/CorporateEventsPage'));
const CandidPhotographyPage = lazy(() => import('./pages/CandidPhotographyPage'));
const CinematicVideographyPage = lazy(() => import('./pages/CinematicVideographyPage'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading component
const PageLoader = () => (
    <div className="h-screen w-full flex items-center justify-center bg-wedding-dark text-wedding-gold">
        <div className="animate-pulse text-xl font-serif tracking-widest">LOADING...</div>
    </div>
);

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/book" element={<Booking />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
                        <Route path="/admin/login" element={<Login />} />
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="/kids-newborn" element={<KidsAndNewbornPage />} />
                        <Route path="/pre-post-wedding" element={<PrePostWeddingPage />} />
                        <Route path="/traditional-photography" element={<TraditionalPhotographyPage />} />
                        <Route path="/maternity-photography" element={<MaternityPhotographyPage />} />
                        <Route path="/corporate-events" element={<CorporateEventsPage />} />
                        <Route path="/candid-photography" element={<CandidPhotographyPage />} />
                        <Route path="/cinematic-videography" element={<CinematicVideographyPage />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </div>
    );
}

export default App;
