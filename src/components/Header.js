import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4">
            <div className="flex justify-between items-center">
                <a href="/" className="text-lg md:text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                Emmanuel Roland V. Pelingon
                </a>

                <nav className="hidden md:block">
                <ul className="flex gap-8">
                    <li>
                    <a 
                        href="/about" 
                        className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                        About
                    </a>
                    </li>
                    <li>
                    <a 
                        href="/projects" 
                        className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                        Projects
                    </a>
                    </li>
                    <li>
                    <a 
                        href="/contact" 
                        className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                    >
                        Contact
                    </a>
                    </li>
                </ul>
                </nav>

                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Toggle menu"
                >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {isMenuOpen && (
                <nav className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-sm">
                <ul className="flex flex-col gap-3 p-3">
                    <li>
                    <a 
                        href="/about" 
                        className="block text-gray-600 hover:text-blue-600 transition-colors font-medium px-2 py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About
                    </a>
                    </li>
                    <li>
                    <a 
                        href="/projects" 
                        className="block text-gray-600 hover:text-blue-600 transition-colors font-medium px-2 py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Projects
                    </a>
                    </li>
                    <li>
                    <a 
                        href="/contact" 
                        className="block text-gray-600 hover:text-blue-600 transition-colors font-medium px-2 py-2"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </a>
                    </li>
                </ul>
                </nav>
            )}
        </div>
    </header>
    );
};

export default Header;