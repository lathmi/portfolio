import { Briefcase, ScrollText } from "lucide-react";
import { Code } from "lucide-react";
import { User } from "lucide-react";

 
 export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            
            <div className="container mx-auto max-w-5xl">
                <h2 className="font-cormorant scale-y-100 italic text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary "> Me </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate <span className="">Full Stack Developer</span>
                        </h3>

                        <p className="text-muted-foreground tracking-wide">
                          Second-year <span className="text-primary font-cormorant scale-y-100 italic font-bold text-lg"> Software Engineering Undergraduate </span> at Informatics Institute of Technology in affiliation with the University of Westminster. 
                          I'm drawn to building softwares that are practical and reliable in real-world use.
                         

                        </p>

                        <p className="text-muted-foreground tracking-wide">
                        
                         My flagship project <span className="text-primary font-bold">"AquaSense"</span> is a smart water management system that brought together backend engineering, 
                          IoT integration, analytics, and deployment. I enjoy the process of <span className="text-primary font-cormorant scale-y-100 italic font-bold text-lg"> turning 
                            a well-defined problem into something functional and purposeful</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                            <a href="#contact" className="cosmic-button font-semibold">
                                {" "}
                                Get In Touch
                            </a>

                            <a 
                                href="{import.meta.env.BASE_URL}cv/Lathmi_Wanigasekara_Public_CV.pdf" 
                                download="Lathmi_Wanigasekara_Public_CV.pdf"
                                className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-cormorant scale-y-100 italic">

                            Download CV

                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 ">

                        <div className="bg-card gradient-border rounded-xl p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <ScrollText className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground tracking-wide">Designing clean and user-friendly digital interfaces.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card gradient-border rounded-xl p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Frontend & Backend Development</h4>
                                    <p className="text-muted-foreground tracking-wide">Building responsive web and mobile apps with APIs and databases.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-card gradient-border rounded-xl p-6 card-hover"> 
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground tracking-wide">Coordinating tasks, timelines and team collaboration.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
        </section>

    );
 };