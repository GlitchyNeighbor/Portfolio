import { Github, Linkedin, MapPin, ArrowRight } from 'lucide-react';
import profilePNG from "../private/profile.png";

const About = () => {
    return (
        <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black py-20 px-4 sm:px-6 w-full mx-auto relative overflow-hidden" id="About">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{background: "radial-gradient(circle, rgba(34, 211, 238, 0.6) 0%, transparent 70%)"}}></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)"}}></div>
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    
                    <div className="flex justify-center md:justify-start">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-3xl blur-2xl animate-pulse" style={{background: "linear-gradient(135deg, rgba(34, 211, 238, 0.8) 0%, rgba(59, 130, 246, 0.8) 50%, rgba(168, 85, 247, 0.8) 100%)"}}></div>
                            <div className="relative rounded-3xl overflow-hidden border-2 border-gradient-to-r border-cyan-400 p-1 w-64 h-64 sm:w-80 sm:h-80 shadow-2xl shadow-cyan-500/50">
                                <img src={profilePNG} className="w-full h-full object-cover rounded-3xl" alt="Profile"/>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 text-cyan-400 mb-4">
                            <MapPin className="w-5 h-5" />
                            <span className="font-semibold">Based in Philippines</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            Hi, I'm <span className="text-cyan-300">Emmanuel</span>
                        </h1>
                        <p className="text-xl text-cyan-400 font-semibold mb-6">Full-Stack Developer & IT Support</p>
                    
                        <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
                            I'm a passionate developer with <span className="text-cyan-400 font-semibold">2 years</span> of coding experience. Currently a 4th year student at <span className="text-cyan-400 font-semibold">National University - MOA</span>, I specialize in building modern web and mobile applications.
                        </p>

                        <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                            I'm proficient in <span className="text-cyan-400 font-semibold">React, React Native, and Next.js</span>, and I'm constantly exploring new technologies and best practices in web development. I am also an IT support enthusiast. Currently diving deeper into backend development and databases.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a 
                                href="https://www.linkedin.com/in/emmanuel-roland-pelingon-3bb99539a/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 text-white rounded-lg hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105 border border-cyan-400/50 drop-shadow-lg"
                            >
                                <Linkedin className="w-5 h-5" />
                                <span className="font-semibold">LinkedIn</span>
                            </a>

                            <a 
                                href="https://github.com/GlitchyNeighbor/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/40 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 drop-shadow-lg"
                            >
                                <Github className="w-5 h-5" />
                                <span className="font-semibold">GitHub</span>
                            </a>

                            <a 
                                href="#Projects" 
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-700/50 to-slate-800/50 text-cyan-300 rounded-lg hover:shadow-lg hover:shadow-cyan-500/40 border border-cyan-400/40 hover:border-cyan-400/80 transition-all duration-300 hover:scale-105"
                            >
                                <span className="font-semibold">View Work</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;