import { Github, Linkedin, MapPin } from 'lucide-react';
import Profile from '../private/profile/Profile.png'

const About = () => {
    return (
        <div className="bg-slate-50 py-20 px-6 w-9/12 mx-auto">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    
                    <div className="flex-shrink-0">
                        <div className="rounded-full w-48 h-48 p-1 bg-gradient-to-r from-blue-400 to-purple-400">
                            <img src={Profile} alt="Profile" className="rounded-full"/>
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 text-sm mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>Philippines</span>
                    </div>
                    
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        I'm Emmanuel
                    </h1>
                    
                    <p className="text-lg text-gray-600 mb-6">
                        Aspiring Information Technology student looking for a web or mobile development internship 
                        to apply and hone programming skills, to contribute to meaningful projects, learn work ethics, 
                        and to expand my technical capabilities.
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a 
                        href="https://www.linkedin.com/in/emmanuel-roland-pelingon-3bb99539a/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                        <Linkedin className="w-5 h-5" />
                        <span>LinkedIn</span>
                        </a>

                        <a 
                        href="https://github.com/GlitchyNeighbor/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                        >
                        <Github className="w-5 h-5" />
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