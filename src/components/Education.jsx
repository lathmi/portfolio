import { GraduationCap, Award } from "lucide-react";

const education = [

    {
        title: "BSc (Hons) Software Engineering",
        institution: "University of Westminster",
        location: "Informatics Institute of Technology, Sri Lanka",
        period: "2024 – 2028",
    },
    {
        title: "Foundation Certificate in Higher Education",
        institution: "Informatics Institute of Technology",
        period: "2023 – 2024",
    },
    {
        title: "G.C.E Ordinary Level",
        institution: "Viharamahadevi Balika Vidyalaya",
        period: "2019",
        result: "Eight 'A' passes and one 'B' pass",
    },

];

const certifications = [

    {
        title: "Machine Learning – Professional Certificate Programme",
        institution: "Informatics Institute of Technology",
        duration: "32 Hours",
        result: "Merit Pass",
    },

];

export const EducationSection = () => {
    return (
        <section
            id="education"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">

                <h2 className="font-cormorant scale-y-100 italic text-3xl md:text-4xl font-bold text-center mb-12">
                    Education & <span className="text-primary">Certifications</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8 tracking-wide">

                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
                            <GraduationCap className="text-primary" />
                            Education
                        </h3>

                        <div className="space-y-6">
                            {education.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-card rounded-xl p-6 hover:bg-card/40"
                                >
                                    <h4 className="font-semibold text-lg">
                                        {item.title}
                                    </h4>

                                    <p className="font-cormorant scale-y-100 italic text-muted-foreground">
                                        {item.institution}
                                    </p>

                                    {item.location && (
                                        <p className="text-muted-foreground text-sm">
                                            {item.location}
                                        </p>
                                    )}

                                    {item.result && (
                                        <p className="text-primary text-sm mt-2">
                                            {item.result}
                                        </p>
                                    )}

                                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                                        {item.period}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
                            <Award className="text-primary" />
                            Certifications
                        </h3>

                        <div className="space-y-6">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-card rounded-xl p-6 hover:bg-card/40"
                                >
                                    <h4 className="font-semibold text-lg">
                                        {cert.title}
                                    </h4>

                                    <p className="text-muted-foreground font-cormorant scale-y-100 italic">
                                        {cert.institution}
                                    </p>

                                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm ">
                                            {cert.result}
                                        </span>

                                        <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm">
                                            {cert.duration}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};