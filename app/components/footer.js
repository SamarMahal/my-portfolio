// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    
    <footer id='footer' className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
                <h3 className="text-xl font-semibold mb-4">About Me</h3>
                <p className="text-gray-400"> Samar Deep Singh, a passionate and dedicated software developer specializing in creating efficient and scalable web applications. With a strong foundation in both front and back-end technologies, I am committed to leveraging my skills to build software solutions that not only meet but exceed user expectations. Driven by curiosity and a love for problem-solving, I continuously strive to stay at the forefront of technology and innovation.</p>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
                <ul class="flex space-x-4">
                    <li><a href="#head" class="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#about" class="text-white hover:text-gray-300">About</a></li>
                    <li><a href="#project" class="text-white hover:text-gray-300">Projects</a></li>
                    <li><a href="#skills" class="text-white hover:text-gray-300">Skills</a></li>
                    <li><a href="#contact" class="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
                <p className="text-gray-400">Southern Alberta Institute Of Technology</p>
                <p className="text-gray-400">samardeepsingh@edu.sait.ca</p>
                <p className="text-gray-400">(403) 707 8851</p>
            </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2024 My Portfolio. All rights reserved.</p>
        </div>
    </div>
</footer>
  );
};

export default Footer;
