// components/Contact.js
import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    
    <section id='contact' className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-6">Have a project in mind or just want to say hi? Drop me a message using the form below.</p>
                <div className="flex items-center space-x-4 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a1 1 0 011-1h10a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h10a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-600">Southern Alberta Institute Of Technology</p>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8c0 3.301 2.891 7.051 7.04 12.185a.725.725 0 001.12 0C17.109 17.051 20 13.301 20 10a8 8 0 00-8-8zm0 2a6 6 0 00-6 6c0 2.598 2.082 5.548 6 9.566 3.918-4.018 6-6.968 6-9.566a6 6 0 00-6-6z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M10 11a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-600">samardeepsingh@edu.sait.ca</p>
                </div>
                <div className="flex items-center space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8c0 3.301 2.891 7.051 7.04 12.185a.725.725 0 001.12 0C17.109 17.051 20 13.301 20 10a8 8 0 00-8-8zm0 2a6 6 0 00-6 6c0 2.598 2.082 5.548 6 9.566 3.918-4.018 6-6.968 6-9.566a6 6 0 00-6-6z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M10 11a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-600">(403) 707 8851</p>
                </div>
            </div>
            <div>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                            id="message"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <Link href="mailto:samardeepsingh@edu.sait.ca" >
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Send Message
                        </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
  );
};

export default Contact;
