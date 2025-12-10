import { useState } from "react";
import AboutPNG from "../private/Kwentura/About.png";
import AdminPNG from "../private/Kwentura/Admin.png";
import ContactPNG from "../private/Kwentura/Contact.png";
import Contact2PNG from "../private/Kwentura/Contact2.png";
import HomePNG from "../private/Kwentura/Home.png";
import LoginPNG from "../private/Kwentura/Login.png";
import SignUpPNG from "../private/Kwentura/SignUp.png";
import TeacherPNG from "../private/Kwentura/Teacher.png";

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const images = [
        { src: AboutPNG, alt: "Kwentura's About Page" },
        { src: AdminPNG, alt: "Kwentura's Admin's Dashboard" },
        { src: ContactPNG, alt: "Kwentura's Contact Page" },
        { src: Contact2PNG, alt: "Kwentura's Contact Page" },
        { src: HomePNG, alt: "Kwentura's Home Page" },
        { src: LoginPNG, alt: "Kwentura's Login Page" },
        { src: SignUpPNG, alt: "Kwentura's Sign Up Page" },
        { src: TeacherPNG, alt: "Kwentura's Teacher's Dashboard" }
    ];

    return( 
    <>
        <div className="bg-slate-50 py-12 px-4 w-full max-w-6xl mx-auto">
            <div className="mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Projects</h1>
            </div>
            
            <div className="mt-6">
                <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                    <div className="mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Capstone Project</h2>
                        <a href="https://kwentura-39597.web.app/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-semibold text-blue-600 mb-4 inline-block">Kwentura</a>
                        <p className="text-gray-700"> Kwentura (Kwentong Kultura) is a mobile and web application aiming to improve the 
                            cultural awareness of kindergarten and Grade 1 students at Monlimar Development 
                            Academy. The platform blends Filipinos' kids' stories as interactive storytelling, text-to
                            speech, and bilingual translation, allowing for learning both in classrooms and at home. It is 
                            a project to bridge the gap of culturally relevant digital learning materials which will help 
                            develop language while keeping a Filipino heritage. Kwentura modernizes early childhood 
                            education, promotes digital literacy, as well as the accessibility of traditional stories to our 
                            future generations with its innovative features.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                            <div 
                                key={index}
                                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-100"
                                onClick={() => setSelectedImage(image)}
                            >
                                <img 
                                    className="w-full h-36 md:h-40 object-cover transform group-hover:scale-105 transition-transform duration-300" 
                                    src={image.src} 
                                    alt={image.alt}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <p className="text-white text-sm font-medium p-3 w-full">
                                        Click to enlarge
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full">
                        <button 
                            className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl md:text-4xl font-bold transition-colors z-50 bg-black/30 rounded-full w-10 h-10 flex items-center justify-center"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close preview"
                        >
                            ×
                        </button>
                        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                            <img 
                                src={selectedImage.src} 
                                alt={selectedImage.alt} 
                                className="w-full h-auto object-contain max-h-[85vh]"
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