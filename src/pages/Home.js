import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { ArrowRight } from 'lucide-react';

const Home = () => {
    return(
        <>
            <div className="flex flex-col mx-auto">
                <Header />
                
                <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-black min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{background: "radial-gradient(circle, rgba(34, 211, 238, 0.8) 0%, transparent 70%)"}}></div>
                        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{background: "radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)", animationDelay: "1s"}}></div>
                        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl" style={{background: "radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)", transform: "translate(-50%, -50%)", animationDelay: "2s"}}></div>
                    </div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 rounded-full text-sm font-semibold mb-6">
                            Welcome to my portfolio
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
                            Full-Stack Developer & <span className="text-cyan-300">Creative Problem Solver</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                            I build beautiful, responsive web and mobile applications with modern technologies. Let's turn your ideas into reality.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a 
                                href="#About"
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 text-white rounded-lg hover:shadow-xl hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105 font-semibold text-lg flex items-center gap-2 border border-cyan-400/50 drop-shadow-lg"
                            >
                                Explore My Work
                                <ArrowRight className="w-5 h-5" />
                            </a>
                            <a 
                                href="#Contact"
                                className="px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-cyan-300 rounded-lg hover:shadow-lg hover:shadow-cyan-500/40 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105 font-semibold text-lg"
                            >
                                Get in Touch
                            </a>
                        </div>

                        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-cyan-300">2</div>
                                <p className="text-gray-400 text-sm md:text-base mt-2">Years of Experience</p>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-cyan-300">2</div>
                                <p className="text-gray-400 text-sm md:text-base mt-2">Projects Completed</p>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold text-cyan-300">100%</div>
                                <p className="text-gray-400 text-sm md:text-base mt-2">Committed</p>
                            </div>
                        </div>
                    </div>
                </section>

                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </>
    )
}

export default Home;