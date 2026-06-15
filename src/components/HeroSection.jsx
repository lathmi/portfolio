import { ArrowDown } from "lucide-react";

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
};

export const HeroSection = () => {
    return (
        <section 
            id="hero" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        
                        <span className="font-cormorant scale-y-100 italic">
                            <span className="text-primary opacity-0 animate-fade-in-delay-1">
                                {" "} 
                                Lathmi
                            </span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> 
                                {" "}
                                Wanigasekara
                            </span>
                        </span>
                        
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-3">
                        I enjoy figuring out how things work and building solutions that solve real problems. 
                        Whether it's designing a backend system, working with databases, or learning a new technology, 
                        I like turning ideas into something practical and useful.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="cosmic-button font-bold"
                        >
                            View My Work
                        </button>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform translate-x-1/2 flex flex-col items-center animate-bounce">
              <span className="text-md text-muted-foreground mb-2 font-cormorant scale-y-100 italic"> Scroll </span>
              <ArrowDown className="h-5 w-5 text-primary"/>  
            </div>
        </section> 
    
    );
};