import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutIntro from '../components/AboutIntro';
import Journey from '../components/Journey';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <AboutIntro />
      <Journey />
      <Skills />
      <WorkExperience />
      <CallToAction />
      <Footer />
    </div>
  );
}
