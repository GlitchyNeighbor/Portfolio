import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-slate-50 py-12 sm:py-20 px-4 sm:px-6 w-full mx-auto" id="Contact">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8 sm:mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get in Touch</h1>
                    <p className="text-gray-600">Feel free to reach out through any of these channels</p>
                </div>

                <div className="space-y-4">
                    <a 
                    href="mailto:2004ervp@gmail.com"
                    className="block bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow"
                    >
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-1">Email</h2>
                        <p className="text-blue-600 hover:underline">2004ervp@gmail.com</p>
                        </div>
                    </div>
                    </a>

                    <a 
                    href="https://github.com/GlitchyNeighbor/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow"
                    >
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Github className="w-6 h-6 text-gray-900" />
                        </div>
                        <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-1">GitHub</h2>
                        <p className="text-gray-600 hover:text-gray-900">github.com/GlitchyNeighbor</p>
                        </div>
                    </div>
                    </a>

                    <a 
                    href="https://www.linkedin.com/in/emmanuel-roland-pelingon-3bb99539a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow"
                    >
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Linkedin className="w-6 h-6 text-blue-700" />
                        </div>
                        <div>
                        <h2 className="text-lg font-semibold text-gray-900 mb-1">LinkedIn</h2>
                        <p className="text-gray-600 hover:text-gray-900">Emmanuel Roland V. Pelingon</p>
                        </div>
                    </div>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Contact;