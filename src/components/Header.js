import { useState, useEffect } from 'react';
import { Menu, X, User, Briefcase, Code2, Mail } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollTimeout, setScrollTimeout] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);
            
            if (scrollTimeout) clearTimeout(scrollTimeout);
            
            const timeout = setTimeout(() => {
                setIsScrolling(false);
            }, 2000);
            
            setScrollTimeout(timeout);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [scrollTimeout]);

    const navItems = [
        { icon: User, label: 'About', href: '#About' },
        { icon: Briefcase, label: 'Projects', href: '#Projects' },
        { icon: Code2, label: 'Skills', href: '#Skills' },
        { icon: Mail, label: 'Contact', href: '#Contact' },
    ];

    return (
    <header className={`fixed top-6 left-6 z-50 transition-opacity duration-300 ${isScrolling || isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none md:pointer-events-auto md:opacity-100'}`}>
        <nav className="hidden md:flex flex-col gap-6">
            {navItems.map((item) => {
                const Icon = item.icon;
                return (
                    <div 
                        key={item.label}
                        className="relative group"
                        onMouseEnter={() => setHoveredIcon(item.label)}
                        onMouseLeave={() => setHoveredIcon(null)}
                    >
                        <a 
                            href={item.href}
                            className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border border-cyan-500/30 hover:border-cyan-400/70 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-cyan-500/50"
                        >
                            <Icon className="w-5 h-5" />
                        </a>
                        {hoveredIcon === item.label && (
                            <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-slate-800/95 backdrop-blur-sm text-cyan-300 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none border border-cyan-500/30 shadow-lg">
                                {item.label}
                                <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-slate-800/95"></div>
                            </div>
                        )}
                    </div>
                );
            })}
        </nav>

        <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full border border-cyan-500/30 hover:border-cyan-400/70 text-gray-300 hover:text-cyan-400 transition-all duration-300 shadow-lg"
            aria-label="Toggle menu"
        >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {isMenuOpen && (
            <nav className="md:hidden absolute top-14 left-0 flex flex-col gap-2 bg-slate-800/95 backdrop-blur-sm rounded-lg shadow-lg border border-cyan-500/30 p-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a 
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-slate-700 rounded-lg transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{item.label}</span>
                        </a>
                    );
                })}
            </nav>
        )}
    </header>
    );
};

export default Header;