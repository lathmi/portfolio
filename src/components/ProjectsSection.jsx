import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "AquaSense",
        description: "Smart water management, leak detection and control system with real-time IoT integration, water usage analytics, and JWT authentication.",
        image: "/projects/aquasense.png",
        tags: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "JWT", "IoT"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "To-Do List Web Application",
        description: "Full-stack task management web app with RESTful routing, full CRUD operations, and dynamic UI rendering.",
        image: "/projects/todo.png",
        tags: ["Node.js", "Express.js", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Acyclicity Checker",
        description: "Java-based directed graph algorithm using sink-elimination and iterative DFS cycle detection with three-colour marking.",
        image: "/projects/acyclicitychecker.png",
        tags: ["Java", "Algorithms", "Graph Theory", "Data Structures"],
        demoUrl: "#",
        githubUrl: "#"
    },

    {
        id: 4,
        title: "E-commerce Web Application",
        description: "PHP-based e-commerce system with session-based cart management, product handling, and dynamic page updates.",
        image: "/projects/ecommerce.png",
        tags: ["PHP", "Session Management", "Backend"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 5,
        title: "Life Below Water Web Application",
        description: "Responsive sustainability awareness web app built collaboratively in an Agile team with cross-device compatibility.",
        image: "/projects/lifebelowwater.png",
        tags: ["HTML5", "CSS3", "JavaScript", "Agile"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 6,
        title: "Traffic Management System",
        description: "Developed a Python-based traffic management system that simulates traffic flow, validates vehicle movement rules, handles congestion scenarios, and visualizes system behavior through interactive UI components.",
        image: "/projects/trafficmanagement.png",
        tags: ["Python", "Tkinter", "UI Components"],
        demoUrl: "#",
        githubUrl: "#"
    }
];


export const ProjectsSection = () => {
    return (
    
        <section id="projects" className="py-24 px-4 relative">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
                    Featured <span className="text-primary"> Projects </span> 
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent project 
                </p>

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
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            

                                <h3 className="text-lg font-semibold mb-1"> {project.title} </h3>
                                <p className="text-muted-foreground text-sm mb-4">
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
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    
    );
};