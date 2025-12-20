import { useState } from "react";
import AboutPNG from "../private/Kwentura/About.png";
import AdminPNG from "../private/Kwentura/Admin.png";
import ContactPNG from "../private/Kwentura/Contact.png";
import Contact2PNG from "../private/Kwentura/Contact2.png";
import HomePNG from "../private/Kwentura/Home.png";
import LoginPNG from "../private/Kwentura/Login.png";
import SignUpPNG from "../private/Kwentura/SignUp.png";
import TeacherPNG from "../private/Kwentura/Teacher.png";
import AssessmentPNG from "../private/Kwentura/Assessment.png";
import CorrectPNG from "../private/Kwentura/Correct.png";
import CoverPNG from "../private/Kwentura/Cover.png"; 
import LibraryPNG from "../private/Kwentura/Library.png";
import ScorePNG from "../private/Kwentura/Score.png";
import StoryPNG from "../private/Kwentura/Story.png";
import SynopsisPNG from "../private/Kwentura/Synopsis.png";
import WrongPNG from "../private/Kwentura/Wrong.png";
import AddStoryPNG from "../private/Kwentura/Add_Story.png";
import AdminActionLogsPNG from "../private/Kwentura/Admin_Action_Logs.png";
import ArchiveAccountPNG from "../private/Kwentura/Archive_Account.png";
import ArchivedAccountsPNG from "../private/Kwentura/Archived_Accounts.png";
import DeleteAccountPNG from "../private/Kwentura/Delete_Account.png";
import EditStoryPNG from "../private/Kwentura/Edit_Story.png";
import ManageAccountsPNG from "../private/Kwentura/Manage_Accounts.png";
import ManageAdminAccountsPNG from "../private/Kwentura/Manage_Admin_Accounts.png";
import ManageTeacherAccountsPNG from "../private/Kwentura/Manage_Teacher_Accounts.png";
import ManageStudentsAccountsPNG from "../private/Kwentura/Manage_Students_Accounts.png";
import ManageStoriesPNG from "../private/Kwentura/Manage_Stories.png";
import RestoreAccountPNG from "../private/Kwentura/Restore_Account.png";
import StudentApprovalPNG from "../private/Kwentura/Student_Approval.png";
import StudentListPNG from "../private/Kwentura/Student_List-T.png";
import AlreadyLoggedInPNG from "../private/Kwentura/Already_Logged_In_Notif.png";
import ForcedLogOutPNG  from "../private/Kwentura/Forced_Logout.png"

import TaskAppOutputPNG from "../private/TaskApp/Output.png";

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeProject, setActiveProject] = useState(null);

    const toggleProject = (project) => {
        setActiveProject((p) => (p === project ? null : project));
    }

    const taskAppImages = [
        { src: TaskAppOutputPNG, alt: "Task Management App" },
    ]
    
    const kwenturaImages = [
        { src: AboutPNG, alt: "About Page" },
        { src: AdminPNG, alt: "Admin's Dashboard" },
        { src: ContactPNG, alt: "Contact Page" },
        { src: Contact2PNG, alt: "Contact Page" },
        { src: HomePNG, alt: "Home Page" },
        { src: LoginPNG, alt: "Login Page" },
        { src: SignUpPNG, alt: "Sign Up Page" },
        { src: TeacherPNG, alt: "Teacher's Dashboard" },
        { src: AssessmentPNG, alt: "Story Assessmenet" }, 
        { src: CorrectPNG, alt: "Correct Answer for Story Assessment" }, 
        { src: CoverPNG, alt: "Story's Cover Page" },
        { src: LibraryPNG, alt: "Library Section" },
        { src: ScorePNG, alt: "Assessment Scoring System" }, 
        { src: StoryPNG, alt: "Story Viewing" },
        { src: SynopsisPNG, alt: "Story Synopsis" },
        { src: WrongPNG, alt: "Wrong Answer for Story Assessment" },
        { src: AddStoryPNG, alt: "Add Story Modal" },
        { src: AdminActionLogsPNG, alt: "Admin Action Logs" },
        { src: ArchiveAccountPNG, alt: "Archive Account Modal" },
        { src: ArchivedAccountsPNG, alt: "Archived Accounts List" },
        { src: DeleteAccountPNG, alt: "Delete Account Confirmation" },
        { src: EditStoryPNG, alt: "Edit Story Modal" },
        { src: ManageAccountsPNG, alt: "Manage Accounts for Admins" }, 
        { src: ManageAdminAccountsPNG, alt: "Manage Admin Accounts for Super Admins" }, 
        { src: ManageTeacherAccountsPNG, alt: "Manage Teacher Accounts for Admins" },
        { src: ManageStudentsAccountsPNG, alt: "Manage Student Accounts for Admins" },
        { src: ManageStoriesPNG, alt: "Manage Stories for Teachers" }, 
        { src: StudentApprovalPNG, alt: "Student Approval for Teachers" },
        { src: StudentListPNG, alt: "Student List for Teachers" },
        { src: RestoreAccountPNG, alt: "Restore Account Confirmation" },
        { src: AlreadyLoggedInPNG, alt: "Account is already logged in somewhere" },
        { src: ForcedLogOutPNG, alt: "Logged in account is forced to logout" },
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

                    <div className="flex justify-center md:justify-start mb-4">
                        <button
                            onClick={() => toggleProject('kwentura')}
                            aria-pressed={activeProject === 'kwentura'}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            {activeProject === 'kwentura' ? 'Hide Images' : 'Show Images'}
                        </button>
                    </div>

                    {activeProject === 'kwentura' && (
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {kwenturaImages.map((image, index) => (
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
            
            <div className="mt-6">
                <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                    <div className="mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Personal Project</h2>
                        <a href="/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-semibold text-blue-600 mb-4 inline-block">Task Management App</a>
                        <p className="text-gray-700">
                            A simple task management application. 
                            It is still in progress.
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-start mb-4">
                        <button
                            onClick={() => toggleProject('taskApp')}
                            aria-pressed={activeProject === 'taskApp'}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            {activeProject === 'taskApp' ? 'Hide Images' : 'Show Images'}
                        </button>
                    </div>

                    {activeProject === 'taskApp' && (
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