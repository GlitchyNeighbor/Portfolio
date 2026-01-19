import { ExternalLink, Github } from "lucide-react";
import LibraryPNG from "../private/Kwentura/Library.png";
import OutputPNG from "../private/TaskApp/Output.png";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Kwentura - Capstone Project",
            subtitle: "Cultural Digital Learning Platform",
            description: "A mobile and web application designed to improve cultural awareness for kindergarten and Grade 1 students. Features interactive storytelling, text-to-speech, bilingual translation, and accessibility for both classroom and home learning.",
            tags: ["React", "React Native", "Firebase", "Web App", "Mobile App"],
            image: LibraryPNG,
            liveLink: "https://kwentura-39597.web.app/",
            githubWeb: "https://github.com/GlitchyNeighbor/Kwentura-web-app",
            githubMobile: "https://github.com/GlitchyNeighbor/kwentura-mobile",
            features: ["Text-to-Speech", "Bilingual Support", "Interactive Storytelling"]
        },
        {
            id: 2,
            title: "Task Management App",
            subtitle: "Productivity Tool",
            description: "A simple yet powerful task management application for organizing and tracking daily tasks. Built with React and modern web technologies to provide a smooth user experience.",
            tags: ["React", "JavaScript", "Tailwind CSS"],
            image: OutputPNG,
            liveLink: "https://simple-tasking.vercel.app/",
            githubLink: "https://github.com/GlitchyNeighbor/task-management-app",
            features: ["Task Creation", "Progress Tracking", "Clean UI"]
        }
    ];

    return (
        <div className="bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 sm:px-6 w-full mx-auto relative overflow-hidden" id="Projects">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl" style={{background: "radial-gradient(circle, rgba(34, 211, 238, 0.6) 0%, transparent 70%)"}}></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full blur-3xl" style={{background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)"}}></div>
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-cyan-300">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Showcasing my latest work and contributions</p>
                </div>

                <div className="grid gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={project.id}
                            className={`group relative overflow-hidden rounded-2xl border-2 border-cyan-500/30 hover:border-cyan-400/70 transition-all duration-300 bg-gradient-to-r from-slate-900/40 to-slate-900/20 shadow-xl shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/30 ${
                                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            }`}
                        >
                            <div className="absolute inset-0 transition-all duration-300" style={{background: index === 0 ? "linear-gradient(270deg, rgba(34, 211, 238, 0) 0%, rgba(34, 211, 238, 0.08) 50%, rgba(59, 130, 246, 0) 100%)" : "linear-gradient(90deg, rgba(34, 211, 238, 0) 0%, rgba(34, 211, 238, 0.08) 50%, rgba(59, 130, 246, 0) 100%)"}}></div>

                            <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12 bg-slate-900/40">
                                <div className={`flex flex-col justify-center ${index % 2 === 1 ? "md:order-2" : ""}`}>
                                    <div className="mb-2">
                                        <span className="inline-block px-3 py-1 bg-cyan-500/30 border border-cyan-500/60 text-cyan-300 text-sm font-semibold rounded-full mb-4">
                                            Featured Project
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-cyan-400 font-semibold mb-4">{project.subtitle}</p>
                                    
                                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                                        {project.description}
                                    </p>

                                    {project.features && (
                                        <div className="mb-6">
                                            <p className="text-sm font-semibold text-gray-400 mb-3">Key Features:</p>
                                            <ul className="space-y-2">
                                                {project.features.map((feature, idx) => (
                                                    <li key={idx} className="text-gray-300 flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, idx) => (
                                            <span 
                                                key={idx}
                                                className="px-3 py-1 bg-slate-800/70 text-cyan-300 text-sm font-medium rounded border border-slate-700/70 hover:border-cyan-400/50 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 font-semibold"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </a>

                                        {project.githubWeb && (
                                            <a 
                                                href={project.githubWeb} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-2.5 bg-slate-700 text-white rounded-lg hover:bg-slate-600 border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:scale-105 font-semibold"
                                            >
                                                <Github className="w-4 h-4" />
                                                GitHub (Web)
                                            </a>
                                        )}

                                        {project.githubMobile && (
                                            <a 
                                                href={project.githubMobile} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-2.5 bg-slate-700 text-white rounded-lg hover:bg-slate-600 border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:scale-105 font-semibold"
                                            >
                                                <Github className="w-4 h-4" />
                                                GitHub (Mobile)
                                            </a>
                                        )}

                                        {project.githubLink && (
                                            <a 
                                                href={project.githubLink} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-2.5 bg-slate-700 text-white rounded-lg hover:bg-slate-600 border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:scale-105 font-semibold"
                                            >
                                                <Github className="w-4 h-4" />
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className={`flex items-center justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                                    <div className="relative group/image">
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-2xl opacity-20 group-hover/image:opacity-40 transition-opacity duration-300"></div>
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className="relative w-full h-auto rounded-xl border border-cyan-500/30 group-hover/image:border-cyan-500/60 transition-all duration-300 object-cover shadow-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;