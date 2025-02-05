'use client';

import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
