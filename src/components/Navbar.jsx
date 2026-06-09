import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";

const navItems = [
    {name: "Home", href: ""},
    {name: "About", href: ""},
    {name: "Skills", href: ""},
    {name: "Projects", href: ""},
    {name: "Contacts", href: ""},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return(
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300", 
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a 
                    className="text-xl font-bold text-primary flex items-center" 
                    href="#hero"
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Lathmi Wanigasekara </span> {""} 
                        Portfolio
                    </span>
                </a>
            </div>
        </nav>
    )
};