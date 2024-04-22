import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div id='about' class="bg-gradient-to-r from-blue-500 to-purple-700">
      <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <div class="text-center md:text-left">
            <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">Welcome to My Portfolio</h1>
            <p class="text-xl md:text-xl text-white mb-8 mr-10">I am Samar Deep Singh, a software developer dedicated to mastering programming and technology. Explore my portfolio to see my projects and achievements in the tech field.</p>
            <a href="#contact" class="bg-white text-blue-500 hover:bg-blue-400 text-xl md:text-2xl font-semibold py-2 px-8 rounded-full transition duration-300 ease-in-out">Contact Me</a>
          </div>
          <div class="hidden md:block">
            <Image src="/mypic.jpg" alt="My Picture" width={600} height={600} className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
