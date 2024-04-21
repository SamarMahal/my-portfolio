// components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    
    <section id='project' className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/expense-tracker-app.png" alt="Project 1" className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Project 1</h3>
                    <p className="text-gray-600">Expense Tracker Application, a project of Mobile Application. </p>
                </div>
            </div>
            {/* Project Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="/logo.webp" alt="Project 2" className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Project 2</h3>
                    <p className="text-gray-600">Group for College Projects.</p>
                </div>
            </div>
            {/* Project Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="savoys-log.png" alt="Project 3" className="w-full h-64 object-cover" />
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Project 3</h3>
                    <p className="text-gray-600">Software for Savoys managing orders.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  );
};

export default Projects;
