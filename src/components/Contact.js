import { Mail, Github, Linkedin, } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4 sm:px-6 w-full mx-auto relative overflow-hidden" id="Contact">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-3xl" style={{background: "radial-gradient(circle, rgba(34, 211, 238, 0.7) 0%, transparent 70%)"}}></div>
                <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full blur-3xl" style={{background: "radial-gradient(circle, rgba(59, 130, 246, 0.7) 0%, transparent 70%)"}}></div>
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let's <span className="text-cyan-300">Connect</span>
                    </h2>
                    <p className="text-gray-400 text-lg">I'd love to hear from you. Let's work together or just have a chat!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <a 
                        href="mailto:2004ervp@gmail.com"
                        className="group relative overflow-hidden bg-gradient-to-br from-slate-900/60 to-slate-950 rounded-2xl p-8 border-2 border-cyan-500/30 hover:border-cyan-400/70 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/30"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/15 group-hover:to-blue-500/10 transition-all duration-300"></div>
                        <div className="relative flex items-start gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Mail className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
                                <p className="text-cyan-400 text-lg font-semibold group-hover:text-cyan-300 transition-colors">2004ervp@gmail.com</p>
                                <p className="text-gray-400 text-sm mt-2">Send me an email and I'll get back to you ASAP</p>
                            </div>
                        </div>
                    </a>

                    <a 
                        href="https://www.linkedin.com/in/emmanuel-roland-pelingon-3bb99539a/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden bg-gradient-to-br from-slate-900/60 to-slate-950 rounded-2xl p-8 border-2 border-cyan-500/30 hover:border-cyan-400/70 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/30"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/15 group-hover:to-blue-500/10 transition-all duration-300"></div>
                        <div className="relative flex items-start gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Linkedin className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">LinkedIn</h3>
                                <p className="text-cyan-400 text-lg font-semibold group-hover:text-cyan-300 transition-colors">Connect with me</p>
                                <p className="text-gray-400 text-sm mt-2">Let's network and explore opportunities</p>
                            </div>
                        </div>
                    </a>

                    <a 
                        href="https://github.com/GlitchyNeighbor/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden bg-gradient-to-br from-slate-900/60 to-slate-950 rounded-2xl p-8 border-2 border-cyan-500/30 hover:border-cyan-400/70 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/30"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:via-cyan-500/15 group-hover:to-blue-500/10 transition-all duration-300"></div>
                        <div className="relative flex items-start gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                <Github className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">GitHub</h3>
                                <p className="text-cyan-400 text-lg font-semibold group-hover:text-cyan-300 transition-colors">GlitchyNeighbor</p>
                                <p className="text-gray-400 text-sm mt-2">Check out my projects and contributions</p>
                            </div>
                        </div>
                    </a>

                </div>

                <div className="text-center">
                    <p className="text-gray-400 text-lg mb-6">Or reach out directly via any platform above</p>
                    <a 
                        href="mailto:2004ervp@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 font-semibold text-lg"
                    >
                        <Mail className="w-5 h-5" />
                        Send an Email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;