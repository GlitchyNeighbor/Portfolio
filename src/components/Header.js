import { useState, useEffect } from 'react';
import { User, Briefcase, Code2, Mail } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);

    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            setIsNavVisible(true);
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                setIsNavVisible(false);
            }, 2000);
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            clearTimeout(scrollTimeout);
        };
    }, []);

    const navItems = [
        { icon: User, label: 'About', href: '#About' },
        { icon: Briefcase, label: 'Projects', href: '#Projects' },
        { icon: Code2, label: 'Skills', href: '#Skills' },
        { icon: Mail, label: 'Contact', href: '#Contact' },
    ];

    const mobileNav = (
        <div className="container mx-auto px-2 py-2">
            <nav className="flex justify-around items-center">
                {navItems.map((item) => (
                    <a 
                        key={item.label}
                        href={item.href}
                        className="flex flex-col items-center gap-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 px-2 py-1 rounded-lg"
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="text-xs font-medium">{item.label}</span>
                    </a>
                ))}
            </nav>
        </div>
    );

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300
            ${isScrolled || isMobile ? 'bg-slate-900/80 backdrop-blur-sm' : 'bg-transparent'}
            ${isNavVisible || isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
            {isMobile ? mobileNav : (
                <>
                    <div className={`transition-opacity duration-500 ${!isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <div className="container mx-auto px-6 py-4">
                            <nav className="flex justify-center items-center gap-8">
                                {navItems.map((item) => (
                                    <a 
                                        key={item.label}
                                        href={item.href}
                                        className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    <div className={`transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <div className={`fixed top-6 left-6 z-50`}>
                            <nav className="flex flex-col gap-6">
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
                                                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                                            >
                                                <Icon className="w-5 h-5" />
                                            </a>
                                            {hoveredIcon === item.label && (
                                                <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-slate-800/95 backdrop-blur-sm text-cyan-300 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none">
                                                    {item.label}
                                                    <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-slate-800/95"></div>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </nav>
                        </div>
                    </div>
                </>
            )}
        </header>
    );};
export default Header;