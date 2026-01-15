import { useState } from "react";
import LibraryPNG from "../private/Kwentura/Library.png";
import SynopsisPNG from "../private/Kwentura/Synopsis.png";
import ReadStoryPNG from "../private/Kwentura/ReadStory.png";
import LibraryMobilePNG from "../private/Kwentura/LibraryMobile.png"
import SynopsisMobilePNG from "../private/Kwentura/SynopsisMobile.png"
import ReadStoryMobilePNG from "../private/Kwentura/ReadStoryMobile.png"
import TaskAppOutputPNG from "../private/TaskApp/Output.png";

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeProjects, setActiveProjects] = useState(new Set());

    const toggleProject = (project) => {
        setActiveProjects((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(project)) {
                newSet.delete(project);
            } else {
                newSet.add(project);
            }
            return newSet;
        });
    }

    const taskAppImages = [
        { src: TaskAppOutputPNG, alt: "Task Management App" },
    ]
    
    const kwenturaImages = [
        { src: LibraryMobilePNG, alt: "Library Section in Mobile App", isMobile: true },
        { src: SynopsisMobilePNG, alt: "Story Synopsis in Mobile App", isMobile: true },
        { src: ReadStoryMobilePNG, alt: "Reading the Story in Mobile App", isMobile: true },
        { src: LibraryPNG, alt: "Library Section in Web App", isMobile: false },
        { src: SynopsisPNG, alt: "Story Synopsis in Web App", isMobile: false },
        { src: ReadStoryPNG, alt: "Reading the Story in Web App", isMobile: false },
    ];

    return( 
    <>
        <div className="bg-slate-50 py-12 px-4 w-full max-w-6xl mx-auto">
            <div className="mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800" id="Projects">Projects</h1>
            </div>
            
            <div className="mt-6">
                <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                    <div className="mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Capstone Project - Kwentura</h2>

                        <p className="text-gray-700"> Kwentura (Kwentong Kultura) is a mobile and web application aiming to improve the 
                            cultural awareness of kindergarten and Grade 1 students at Monlimar Development 
                            Academy. The platform blends Filipinos' kids' stories as interactive storytelling, text-to
                            speech, and bilingual translation, allowing for learning both in classrooms and at home. It is 
                            a project to bridge the gap of culturally relevant digital learning materials which will help 
                            develop language while keeping a Filipino heritage. Kwentura modernizes early childhood 
                            education, promotes digital literacy, as well as the accessibility of traditional stories to our 
                            future generations with its innovative features.
                        </p>

                        <br />

                        <p className="font-semibold">A Teacher Demo Account is provided in github repository named "DemoCredentials".</p>
                        
                        <div className="flex gap-3">

                            <div>
                                <span className="text-xl md:text-xl font-semibold">Live Demo: </span>
                                <a href="https://kwentura-39597.web.app/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-xl md:text-xl font-semibold text-blue-600 mb-4 inline-block">Kwentura
                                </a>
                            </div>

                            <div>
                                <span className="text-xl md:text-xl font-semibold">Github: </span>
                                <a href="https://github.com/GlitchyNeighbor/Kwentura-web-app" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-xl md:text-xl font-semibold text-blue-600 mb-4 inline-block">Kwentura
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-start mb-4">
                        <button
                            onClick={() => toggleProject('kwentura')}
                            aria-pressed={activeProjects.has('kwentura')}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            {activeProjects.has('kwentura') ? 'Hide Images' : 'Show Images'}
                        </button>
                    </div>

                    {activeProjects.has('kwentura') && (
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
                            {kwenturaImages.map((image, index) => (
                                <div 
                                    key={index}
                                    className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100`}
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img 
                                        className={`w-full ${image.isMobile ? 'h-56 md:h-64 object-contain' : 'object-cover'} transform group-hover:scale-105 transition-transform duration-300`} 
                                        src={image.src} 
                                        alt={image.alt}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <p className="text-white text-l font-medium p-3 w-full bg-black">
                                            Click to enlarge
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            
            <div className="mt-6">
                <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                    <div className="mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Personal Project</h2>
                        <a href="/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-semibold text-blue-600 mb-4 inline-block">Task Management App</a>
                        <p className="text-gray-700">
                            A simple task management application. 
                            It is still in progress.
                        </p>

                        <div className="flex gap-3">
                            <div>
                                <span className="text-xl md:text-xl font-semibold">Live Demo: </span>
                                <a href="https://simple-tasking.vercel.app/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-xl md:text-xl font-semibold text-blue-600 mb-4 inline-block">Task App
                                </a>
                            </div>

                            <div>
                                <span className="text-xl md:text-xl font-semibold">Github: </span>
                                <a href="https://github.com/GlitchyNeighbor/task-management-app" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-xl md:text-xl font-semibold text-blue-600 mb-4 inline-block">Task App
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center md:justify-start mb-4">
                        <button
                            onClick={() => toggleProject('taskApp')}
                            aria-pressed={activeProjects.has('taskApp')}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            {activeProjects.has('taskApp') ? 'Hide Images' : 'Show Images'}
                        </button>
                    </div>

                    {activeProjects.has('taskApp') && (
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {taskAppImages.map((image, index) => (
                                <div 
                                    key={index}
                                    className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100`}
                                    onClick={() => setSelectedImage(image)}
                                >
                                    <img 
                                        className="w-full h-36 md:h-40 object-cover transform group-hover:scale-105 transition-transform duration-300" 
                                        src={image.src} 
                                        alt={image.alt}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <p className="text-white text-sm font-medium p-3 w-full">
                                            Click to enlarge
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>


            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full" style={{ maxHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
                        <button 
                            className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl md:text-4xl font-bold transition-colors z-50 bg-black/30 rounded-full w-10 h-10 flex items-center justify-center"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close preview"
                        >
                            ×
                        </button>
                        <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col" style={{ maxHeight: '90vh' }}>
                            <img 
                                src={selectedImage.src} 
                                alt={selectedImage.alt} 
                                className="w-full h-auto object-contain"
                                style={{ maxHeight: 'calc(90vh - 80px)' }}
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="p-4 bg-gray-50">
                                <p className="text-gray-700 text-center font-medium">{selectedImage.alt}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
    )
}

export default Projects;