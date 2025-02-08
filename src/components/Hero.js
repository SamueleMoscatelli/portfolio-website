import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';  // Importing Image component
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-900 text-white">
      <section className="text-center p-8 max-w-screen-lg mx-auto px-4 md:px-12">
        {/* Profile Image */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mx-auto mb-8">
          <Image
            src="/portfolio-website/images/Picture.png"  // Path relative to the public folder
            alt="Samuele Moscatelli"
            layout="intrinsic"  // Keep image's aspect ratio
            width={2000}  // Image's original width
            height={2000}  // Image's original height
            className="rounded-full border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-lg transition duration-300 transform hover:scale-110"
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600">
          Hi, I'm <span className="text-white">Samuele</span>
        </h1>

        {/* Type Animation */}
        <TypeAnimation
          sequence={[
            'Tech Lead 🧠', 2000,
            'Software Engineer 💻', 2000,
            'Deep Learning Enthusiast 🤖', 2000
          ]}
          wrapper="h2"
          className="text-3xl md:text-4xl font-medium text-gray-300 mb-6"
          repeat={Infinity}
        />

        {/* Introduction Paragraph */}
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
          <span className="text-2xl font-semibold text-blue-500">I’m Samuele Moscatelli,</span> a Tech Lead and Software Engineer with a deep passion for <span className="text-purple-400">Artificial Intelligence</span> and cutting-edge technology.
        </p>

        {/* New Line Text */}
        <div className="text-lg md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
          <span className="italic">Join me in exploring the world of innovation!</span>
        </div>

        {/* Additional Paragraph */}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Dive into my work, and feel free to interact with the <span className="font-semibold text-pink-500">AI models</span> I am creating! <span className="text-blue-400">🚀</span>
        </p>

        {/* Button */}
        <Link href="/projects">
          <button className="bg-blue-500 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105">
            See My Work
          </button>
        </Link>
      </section>
    </div>
  );
}
