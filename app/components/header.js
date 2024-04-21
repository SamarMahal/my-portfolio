// components/Header.js
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    
    <nav id='head' class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
            <div>
            <Image src="/LOgO1.webp" alt="My Picture" width={70} height={70} className="rounded-lg shadow-lg" />
            </div>
            <div class="hidden md:block">
                <ul class="flex space-x-4">
                    <li><a href="#head" class="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#about" class="text-white hover:text-gray-300">About</a></li>
                    <li><a href="#project" class="text-white hover:text-gray-300">Projects</a></li>
                    <li><a href="#skills" class="text-white hover:text-gray-300">Skills</a></li>
                    <li><a href="#contact" class="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
            <div class="md:hidden">
                <button class="text-white focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
  );
};

export default Header;
