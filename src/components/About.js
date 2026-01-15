import { Github, Linkedin, MapPin, } from 'lucide-react';
import profilePNG from "../private/profile.png";


const About = () => {
    return (
        <div className="bg-slate-50 py-12 px-4 sm:px-6 w-full mx-auto" id="About">
            <div className="max-w-4xl mx-auto" >
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-12">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                        
                        <div className="flex-shrink-0">
                            <div className="rounded-full w-36 h-36 sm:w-48 sm:h-48 p-1 bg-gradient-to-r from-blue-400 to-purple-400">
                                <img src={profilePNG} className="rounded-full w-full h-full object-cover" alt="Profile"/>
                            </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 text-sm mb-2">
                                <MapPin className="w-4 h-4" />
                                <span>Philippines</span>
                            </div>
                            
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                I am Emmanuel Pelingon
                            </h1>
                        
                            <p className="text-base md:text-lg text-gray-600 mb-6">
                                I am a student at National University - MOA and have been coding for 4 years.
                                I have since been honing my skills in HTML CSS and Javascript and have explored React and React Native.
                                I am currently exploring Next.js framework and dive deeper into database in the future.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center sm:items-stretch">
                                <a 
                                href="https://www.linkedin.com/in/emmanuel-roland-pelingon-3bb99539a/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors justify-center w-full sm:w-auto"
                                >
                                <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                                <span>LinkedIn</span>
                                </a>

                                <a 
                                href="https://github.com/GlitchyNeighbor/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors justify-center w-full sm:w-auto"
                                >
                                <Github className="w-4 h-4 md:w-5 md:h-5" />
                                <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    );
};

export default About;