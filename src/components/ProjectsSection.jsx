import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";


const base = import.meta.env.BASE_URL;

const projects = [
    {
        id: 1,
        title: "AquaSense",
        description: "Smart water management, leak detection and control system with real-time IoT integration, water usage analytics, and JWT authentication.",
        image: `${base}projects/aquasense.jpeg`,
        tags: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "JWT", "IoT"],
        demoUrl: "https://aquasense-sdgp.web.app",
        githubUrl: "https://github.com/lathmi/sdgp-se24-aquasense-mobile"
    },

    {
        id: 2,
        title: "Acyclicity Checker",
        description: "Java-based directed graph algorithm using sink-elimination and iterative DFS cycle detection with three-colour marking.",
        image: `${base}projects/acyclicitychecker.png`,
        tags: ["Java", "Algorithms", "Graph Theory", "Data Structures"],
        demoUrl: "#",
        githubUrl: "https://github.com/lathmi/acyclicity-checker"
    },

    {
        id: 3,
        title: "Aquasense - Landing Page",
        description: "Responsive landing page for AquaSense, a smart water management and leak detection system focused on real-time usage monitoring, leak detection, and sustainable water conservation.",
        image: `${base}projects/landingpage.png`,
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "https://www.aquasense.lk/",
        githubUrl: "https://github.com/lathmi/sdgp-se-24-aqua-sense--landing-page"
    }
];


export const ProjectsSection = () => {
    return (
    
        <section id="projects" className="py-20 px-4 relative">

            <div className="container mx-auto max-w-5xl">
                <h2 className="font-cormorant scale-y-100 italic text-3xl md:text-4xl font-bold text-center mb-12"> 
                    Featured <span className="text-primary"> Projects </span> 
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {projects.map((project,key) => (
                        
                        <div 
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >  
                            <div className="h-48 overflow-hidden ">
                                <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6"> 
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border border-primary/20 rounded-full bg-primary/30 text-secondary-foreground ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                                <h3 className="text-lg font-cormorant font-3xl scale-y-100 italic font-semibold mb-4"> {project.title} </h3>
                                <p className="text-muted-foreground text-sm mb-4 tracking-wide">
                                    {project.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a 
                                        href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>

                                        <a 
                                        href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary hover:text-primary transition-colors duration-300"
                                        >
                                            <FaGithub size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className=" text-center mt-12">
                    <a className="cosmic-button font-bold w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/lathmi">
                    Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    
    );
};