"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sponsors = {
//   title: [
//     { name: "Title Sponsor 1", logoUrl: "https://placehold.co/500x250/EAB308/000000?text=Title+Sponsor", websiteUrl: "https://www.google.com" },
//   ],
//   gold: [
//     { name: "Gold Sponsor 1", logoUrl: "https://placehold.co/400x200/FBBF24/000000?text=Gold+Sponsor", websiteUrl: "https://www.google.com" },
//     { name: "Gold Sponsor 2", logoUrl: "https://placehold.co/400x200/FBBF24/000000?text=Gold+Sponsor", websiteUrl: "https://www.google.com" },
//     { name: "Gold Sponsor 3", logoUrl: "https://placehold.co/400x200/FBBF24/000000?text=Gold+Sponsor", websiteUrl: "https://www.google.com" },
//   ],
//   silver: [
//     { name: "Silver Sponsor 1", logoUrl: "https://placehold.co/300x150/D1D5DB/000000?text=Silver+Sponsor", websiteUrl: "https://www.google.com" },
//     { name: "Silver Sponsor 2", logoUrl: "https://placehold.co/300x150/D1D5DB/000000?text=Silver+Sponsor", websiteUrl: "https://www.google.com" },
//     { name: "Silver Sponsor 3", logoUrl: "https://placehold.co/300x150/D1D5DB/000000?text=Silver+Sponsor", websiteUrl: "https://www.google.com" },
//     { name: "Silver Sponsor 4", logoUrl: "https://placehold.co/300x150/D1D5DB/000000?text=Silver+Sponsor", websiteUrl: "https://www.google.com" },
//     { name: "Silver Sponsor 5", logoUrl: "https://placehold.co/300x150/D1D5DB/000000?text=Silver+Sponsor", websiteUrl: "https://www.google.com" },
//   ],
//   bronze: [
//     { name: "Bronze Sponsor 1", logoUrl: "https://placehold.co/250x125/F59E0B/000000?text=Bronze+Sponsor", websiteUrl: "https://www.google.com" },
//     { name: "Bronze Sponsor 2", logoUrl: "https://placehold.co/250x125/F59E0B/000000?text=Bronze+Sponsor", websiteUrl: "https://www.google.com" },
//     { name: "Bronze Sponsor 3", logoUrl: "https://placehold.co/250x125/F59E0B/000000?text=Bronze+Sponsor", websiteUrl: "https://www.google.com" },
//     { name: "Bronze Sponsor 4", logoUrl: "https://placehold.co/250x125/F59E0B/000000?text=Bronze+Sponsor", websiteUrl: "https://www.google.com" },
//     { name: "Bronze Sponsor 5", logoUrl: "https://placehold.co/250x125/F59E0B/000000?text=Bronze+Sponsor", websiteUrl: "https://www.google.com" },
//     { name: "Bronze Sponsor 6", logoUrl: "https://placehold.co/250x125/F59E0B/000000?text=Bronze+Sponsor", websiteUrl: "https://www.google.com" },
//     { name: "Bronze Sponsor 7", logoUrl: "https://placehold.co/250x125/F59E0B/000000?text=Bronze+Sponsor", websiteUrl: "https://www.google.com" },
//   ],
  Previous: Array.from({ length: 30 }, (_, i) => ({
    name: `Partner ${i + 1}`,
    logoUrl: `https://placehold.co/200x100/4B5563/FFFFFF?text=Partner+${i + 1}`,
    websiteUrl: "https://www.google.com",
  })),
};

const SponsorCard = ({ sponsor, delay }: { sponsor: { name: string, logoUrl: string, websiteUrl: string }, delay: number }) => {
    return (
        <motion.a
            href={sponsor.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: delay * 0.1 }}
        >
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50 hover:border-teal-500/80 transition-all duration-300 h-full flex items-center justify-center aspect-video hover:shadow-2xl hover:shadow-teal-500/10">
                <img
                    src={sponsor.logoUrl}
                    alt={`${sponsor.name} logo`}
                    className="max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
            </div>
        </motion.a>
    );
};

export default function SponsorsPage() {
    const [showGame, setShowGame] = useState(false);
    const pressTimer = useRef<NodeJS.Timeout | null>(null);
    const [progress, setProgress] = useState(0);

    const startPressTimer = () => {
        pressTimer.current = setTimeout(() => setShowGame(true), 10000);
        setProgress(100);
    };

    const cancelPressTimer = () => {
        if (pressTimer.current) clearTimeout(pressTimer.current);
        setProgress(0);
    };

    return (
        <div 
            className="min-h-screen bg-gray-900 text-white relative overflow-hidden font-sans"
            onMouseDown={startPressTimer} onMouseUp={cancelPressTimer} onMouseLeave={cancelPressTimer}
            onTouchStart={startPressTimer} onTouchEnd={cancelPressTimer}
        >
            <div className="fixed inset-0 z-0">
                <img
                    src="/images/events-backdrop.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-10"
                />
            </div>

            <div className="fixed top-0 left-0 w-full h-1 z-50 pointer-events-none">
                 <motion.div 
                    className="h-full bg-black-400"
                    initial={{ width: '0%' }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: progress > 0 ? 10 : 0, ease: 'linear' }}
                 />
            </div>

            <div className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,transparent_75%,black)]">
                <svg className="absolute inset-0 h-full w-full">
                    <defs>
                        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="currentColor" strokeWidth="0.5"></path></pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)"></rect>
                </svg>
            </div>

            <div className="container mx-auto px-4 py-24 relative z-10">
                <motion.h1 
                    className="text-5xl md:text-7xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                >
                    Our Valued Previous Sponsors
                </motion.h1>
                <motion.p 
                    className="text-lg text-center text-gray-400 mb-20"
                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Fueling innovation and making our events possible.
                </motion.p>
                
                {Object.entries(sponsors).map(([tier, sponsorList]) => (
                    <div key={tier} className="mb-16">
                        <h2 className="text-3xl font-bold text-teal-400 capitalize mb-8 text-center">{tier} Sponsors</h2>
                        <div className={`grid gap-6 ${
                            // tier === 'title' ? 'grid-cols-1' :
                            // tier === 'gold' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
                            // tier === 'silver' ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4' :
                            'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
                        }`}>
                            {sponsorList.map((sponsor, index) => (
                                <SponsorCard key={sponsor.name} sponsor={sponsor} delay={index} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {showGame && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    >
                        <div className="w-full h-full max-w-4xl max-h-[80vh] bg-gray-100 rounded-lg shadow-2xl p-4 flex flex-col">
                           <iframe src="https://chromedino.com/" title="Chrome Dino Game" className="w-full h-full border-0"/>
                            <button onClick={() => setShowGame(false)} className="mt-4 bg-teal-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-teal-400 transition-colors">
                                Close Game
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

