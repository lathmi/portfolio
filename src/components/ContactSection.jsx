import { Mail, MapPin, Send } from "lucide-react";
import { FaFacebook, FaFacebookF, FaInstagram, FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

        const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,

                date: new Date().toLocaleDateString("en-LK", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                }),

                time: new Date().toLocaleTimeString("en-LK", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                }),
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
            });

            e.target.reset();
        } catch (error) {
            console.error("EmailJS error:", error);

            toast({
            title: "Failed to send message",
            description: error.text || "Please check EmailJS settings.",
            variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
};

    return (
        <section 
            id="contact"
            className="py-24 px-4 relative bg-secondary/30 "
        > 
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-cormorant scale-y-100 italic font-bold mb-4 text-center"
                > Get In <span className="text-primary"> Touch</span>

                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto tracking-wide">
                    I’m currently open to internship opportunities, software development projects 
                    and professional collaborations. 
                    If you’d like to discuss an opportunity or connect, feel free to get in touch.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
                    <div className="p-1 space-y-6">
                        <h3 className="text-2xl font-semibold mb-6 text-center">  
                            Contact Information
                        </h3>

                        <div className="space-y-6 ">

                            <div className="flex items-start items-center justify-center space-x-4">
                                
                                <a 
                                    href="mailto:Lathmiis@gmail.com"
                                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/5"
                                >                          
                                    <Mail  className=" h-6 w-6 text-primary"/> {""}
                                </a>  
                                <div>
                                    <h4 className="font-cormorant scale-y-100 italic text-left font-medium"> Email </h4>
                                    <a href="mailto:Lathmiis@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        Lathmiis@gmail.com
                                    </a>
                                </div> 
                            </div>

                            <div className="flex items-start items-center justify-center space-x-4">
                                <div className="p-3 rounded-full bg-primary/10 hover:bg-primary/5">
                                    <MapPin className=" h-6 w-6 text-primary "/> {""}
                                </div>
                                <div>
                                    <h4 className="font-cormorant scale-y-100 italic text-left font-medium"> Location </h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Kelaniya, Sri Lanka.
                                    </a>
                                </div> 
                            </div>
                        </div>

                        <div className="pt-6">
                            <h4 className="text-2xl font-semibold mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a  className="text-muted-foreground hover:text-primary transition-colors"
                                    href="https://www.linkedin.com/in/lathmi-wanigasekara-52b37b2b9/"
                                    target="_blank"
                                >
                                    <FaLinkedinIn size={24}/>
                                </a>

                                <a  className="text-muted-foreground hover:text-primary transition-colors"
                                    href="https://www.instagram.com/lathmis/"
                                    target="_blank"
                                >
                                    <FaInstagram size={24}/>
                                </a>

                                <a  className="text-muted-foreground hover:text-primary transition-colors"
                                    href="https://www.facebook.com/lathmi.sandalini"
                                    target="_blank"
                                >
                                    <FaFacebookF size={24}/>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div 
                    className="bg-card hover:bg-primary/5 p-8 rounded-lg shadow-xs"
                    > 

                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <form 
                            className="space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                
                                <label 
                                    htmlFor="name" 
                                    className="block text-sm font-medium mb-2 font-cormorant scale-y-100 italic"
                                > 
                                Your Name
                                </label>

                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none 
                                    focus:ring-2 focus:ring-2 focus:ring-primary"
                                    placeholder="Your name..."
                                    />
                            </div>

                            <div>
                                
                                <label 
                                    htmlFor="email" 
                                    className="block text-sm font-medium mb-2 font-cormorant scale-y-100 italic"
                                > 
                                Email
                                </label>

                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none 
                                    focus:ring-2 focus:ring-2 focus:ring-primary "
                                    placeholder="mailto@gmail.com..."
                                    />
                            </div>

                            <div>
                                
                                <label 
                                    htmlFor="message" 
                                    className="block text-sm font-medium mb-2 font-cormorant scale-y-100 italic"
                                > 
                                Message
                                </label>

                                <textarea 
                                    type="message"
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none 
                                    focus:ring-2 focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                    />
                            </div>

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={cn("cosmic-button font-bold w-full flex items-center justify-center gap-2",

                                )}
                            >
                                { isSubmitting ? "Sending..." : "Send Message"}
                            <Send size={16} />      
                            </button>

                        </form>

                    </div>

                </div>
            </div>
        </section>

    );
};