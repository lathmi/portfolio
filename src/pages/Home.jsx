import { ThemeToggle } from "../components/ThemeToggle";
import {StarBackground} from "@/components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";

export const Home = () => {

    return <div className="min-height-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme toggle */}
        <ThemeToggle/>

        {/* Background effects */}
        <StarBackground/>

        {/* Navbar */}
        <Navbar/>

        {/* Main content */}
        <main>
            <HeroSection/>
        </main>


        {/* Footer */}

    </div>;
    
};