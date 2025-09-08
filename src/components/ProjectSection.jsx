import React, { useState } from "react";
import { ExternalLink,  Code, Layers, Database } from "lucide-react";
import { assets } from "../assets/assets"; // images should be stored here


// Mock project data - replace with your actual data
const projects = [
    {
        title: "YooFoods",
        description: [
            "YooFoods is a responsive food ordering web application built with React.js.",
            "Users can browse a variety of food items, add them to a cart, and place orders seamlessly.",
            "Features a clean user interface, efficient state management, and a smooth user experience.",
        ],
        image: assets.food,
        tech: ["React", "Material UI", "MongoDB", "React Toast"],
        link: "https://yoofood.netlify.app/",
        category: "Web App"
    },
    {
        title: "KavithaCrackers",
        description: [
            "Developed a fully responsive e-commerce website for a fireworks shop using React.js frontend and integrated it with backend services.",
            "Implemented key features such as product catalog, shopping cart, order placement, billing system, and receipt download.",
            "Designed an admin panel for managing products, prices, and orders.",
            "Integrated online receipt generation and automatic download for customer orders."
        ],
        image: assets.cracker1,
        tech: ["React", "Material UI", "MongoDB", "Node.js", "Express"],
        link: "https://kavithacrackers.in/",
        category: "E-commerce"
    },
    {
        title: "Sivakasi Crackers",
        description: [
            "Developed a fully responsive e-commerce website for a fireworks shop using React.js frontend and integrated it with backend services.",
            "Implemented key features such as product catalog, shopping cart, order placement, billing system, and receipt download.",
            "Designed an admin panel for managing products, prices, and orders.",
            "Integrated online receipt generation and automatic download for customer orders."
        ],
        image: assets.mano,
        tech: ["React", "Material UI", "MongoDB", "Node.js", "Payment Gateway"],
        link: "https://sivakasicrackersfoursquare.com/",
        category: "E-commerce"
    },
];

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl border border-cyan-500/20 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
            }}
        >
            {/* Image Section */}
            <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                
                {/* Overlay with buttons */}
                <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/80 to-blue-600/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}>
                    <button
                        onClick={() => window.open(project.link, '_blank')}
                        className="bg-white/90 hover:bg-white text-slate-800 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                        <ExternalLink size={20} />
                    </button>
                   
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-cyan-500/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                </h3>

                <div className="space-y-2 mb-4">
                    {project.description.map((point, i) => (
                        <p key={i} className="text-slate-300 text-sm leading-relaxed">
                            <span className="text-cyan-400">•</span> {point}
                        </p>
                    ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-gradient-to-r from-slate-700 to-slate-600 text-cyan-300 text-xs font-semibold rounded-full border border-cyan-500/30 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Button */}
                <button
                    onClick={() => window.open(project.link, '_blank')}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                    View Project <ExternalLink size={16} />
                </button>
            </div>
        </div>
    );
};

const ProjectSection = () => {
    return (
        <>
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes glow {
                    0%, 100% {
                        opacity: 0.5;
                    }
                    50% {
                        opacity: 1;
                    }
                }
                
                .glow-animation {
                    animation: glow 3s ease-in-out infinite;
                }
            `}</style>

            <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl glow-animation" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl glow-animation" style={{ animationDelay: '1.5s' }} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl glow-animation" style={{ animationDelay: '3s' }} />
                </div>

                <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
                            <Code className="text-cyan-400" size={20} />
                            <span className="text-cyan-400 font-semibold">Portfolio</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            My <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
                        </h2>
                        
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
                            Explore my latest work and creative solutions that showcase my skills in modern web development
                        </p>
                        
                        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mx-auto mb-8" />
                        
                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 text-center">
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                                <div className="text-2xl font-bold text-cyan-400">{projects.length}+</div>
                                <div className="text-slate-400 text-sm">Projects</div>
                            </div>
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                                <div className="text-2xl font-bold text-cyan-400">5+</div>
                                <div className="text-slate-400 text-sm">Technologies</div>
                            </div>
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50">
                                <div className="text-2xl font-bold text-cyan-400">100%</div>
                                <div className="text-slate-400 text-sm">Responsive</div>
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 max-w-2xl mx-auto">
                            <Layers className="text-cyan-400 mx-auto mb-4" size={48} />
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want to Built WebSite                             </h3>
                           
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                
                                <button 
                                    onClick={() => {
                                        const contactSection = document.getElementById('contact');
                                        if (contactSection) {
                                            contactSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                    className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                                >
                                    Contact Me
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectSection;