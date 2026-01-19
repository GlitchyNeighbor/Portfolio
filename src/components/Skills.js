import { Code2, Database, Smartphone, Zap } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: Code2,
            skills: ["React", "React Native", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"]
        },
        {
            title: "Backend Development",
            icon: Database,
            skills: ["Node.js", "Firebase", "REST APIs", "Database Design", "MySQL"]
        },
        {
            title: "Mobile Development",
            icon: Smartphone,
            skills: ["React Native", "Cross-Platform", "Mobile UI/UX", "App Deployment"]
        },
        {
            title: "Tools & Platforms",
            icon: Zap,
            skills: ["Git/GitHub", "VS Code", "Vercel", "Firebase Hosting", "npm"]
        }
    ];

    return (
        <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-4 sm:px-6 w-full mx-auto relative overflow-hidden" id="Skills">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{background: "radial-gradient(circle, rgba(34, 211, 238, 0.7) 0%, transparent 70%)"}}></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{background: "radial-gradient(circle, rgba(59, 130, 246, 0.7) 0%, transparent 70%)"}}></div>
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Technical <span className="text-cyan-300">Skills</span>
                    </h2>
                    <p className="text-gray-400 text-lg">Tools and technologies I'm proficient with</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div 
                                key={index}
                                className="group relative overflow-hidden bg-gradient-to-br from-slate-900/60 to-slate-950 rounded-2xl p-8 border-2 border-cyan-500/30 hover:border-cyan-400/70 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/10 hover:shadow-2xl hover:shadow-cyan-500/30"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                                
                                <div className="relative">
                                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>

                                    <div className="space-y-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <div 
                                                key={skillIndex}
                                                className="flex items-center gap-2 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300"
                                            >
                                                <span className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                                                {skill}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 bg-gradient-to-r from-slate-900/60 to-slate-950 rounded-2xl p-8 md:p-12 border border-slate-700/50">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Currently Learning</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-100 mb-1">Advanced Backend Development</h4>
                                <p className="text-gray-300">Diving deeper into databases, scaling, and system design</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-100 mb-1">TypeScript</h4>
                                <p className="text-gray-300">Improving code quality and type safety in projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
