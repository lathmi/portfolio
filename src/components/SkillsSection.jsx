
const skillCategories = [
    

    {
        label: "Frontend",
        skills:["React.js", "TailwindCSS", "Next.js", "HTML5", "CSS3", "Flutter"],
    },

    {
        label:"Backend",
        skills:["Node.js", "Express.js", "FastAPI", "RESTful APIs" ]
    },

    {
        label: "Databases",
        skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"],
    },

    {
        label: "Programming Languages",
        skills: ["Javascript","Python","Java", "PHP"],
    },

    {
        label: "DevOps",
        skills: ["Docker", "AWS (Fundamentals)", "Linux CLI", "Bash Scripting"],
    },

    {
        label: "Security",
        skills: ["JWT Authentication", "OAuth 2.0"],
    },

    {
        label: "Testing",
        skills: ["JUnit", "Postman", "Swagger"],
    },

    {
        label: "Version Control",
        skills: ["Git", "GitHub"],
    },

    {
        label: "Methodology",
        skills: ["Agile", "Scrum"],
    },
];

export const SkillsSection = () => {
    return (
    
        <section 
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    My<span className="text-primary"> Skills</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category,key) => (
                        <div 
                        key={key} 
                        className="bg-card p-4 rounded-xl shadow-xs hover-shadow"
                        >
                            <h3 className="text-xl font-semibold text-foreground mb-4 ">
                                {category.label}
                            </h3>

                            <div className=" flex flex-wrap justify-center gap-4">
                                {category.skills.map((skill,key) => (
                                    <span
                                        key={key}
                                        className="bg-secondary text-muted-foreground text-md font-small px-3 py-1.5 rounded-lg"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>  

    );
};