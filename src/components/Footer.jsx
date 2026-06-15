import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-4 px-4 bg-card/50 relative mt-12 flex flex-wrap justify-between items-center">
            <p> 
                &copy; {new Date().getFullYear()} Lathmi Wanigasekara.co, All rights reserved. {" "} 
            </p>

            <button
                onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
            <ArrowUp size={20}/>
            </button>

        </footer>

        
    );
};