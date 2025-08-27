import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
});

const experiences = [
  {
    period: "2024 — PRESENT",
    title: "Freelance Developer",
    company: "Self-Employed",
    description: "Develop full-stack web applications and AI-powered solutions for various clients. Specialize in creating user-friendly interfaces with modern technologies while implementing intelligent features that enhance user experiences. Work with diverse projects ranging from e-commerce platforms to AI-integrated business solutions.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "AI/ML",
      "MongoDB"
    ]
  },
  {
    period: "2023 — 2024",
    title: "Frontend Developer",
    company: "Ittefaq Electronics",
    description: "Worked on developing and maintaining the company's e-commerce platform and internal management systems. Collaborated with backend developers to integrate APIs and improve overall user experience. Implemented responsive designs and optimized performance for better customer engagement.",
    technologies: [
      "JavaScript",
      "React",
      "HTML & CSS",
      "Bootstrap",
      "PHP",
      "MySQL"
    ]
  }
];
interface prop{
  setSelectedSection:any
}
function Experience({setSelectedSection}:prop) {
  return (
    <section onMouseEnter={()=>{setSelectedSection("experience")}} id="experience" className={`${inter.className} flex w-full min-h-screen items-center  py-12`}>
      <div className="w-[90%] space-y-12">
        
        {experiences.map((exp, index) => (
          <div key={index} className="border border-[#334155] rounded-lg p-8 bg-[#0f172a]/50">
            
            {/* Header Section */}
            <div className="flex items-start justify-between mb-6">
              <div className="text-[#64748b] text-sm font-medium">
                {exp.period}
              </div>
              <div className="flex items-center text-[#22d3ee] text-lg font-semibold">
                {exp.title} • {exp.company}
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </div>
            </div>

            {/* Description */}
            <div className="text-[#94a3b8] text-base leading-relaxed mb-6">
              {exp.description}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3">
              {exp.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-3 py-1 bg-[#22d3ee]/10 text-[#22d3ee] text-sm rounded-full border border-[#22d3ee]/20"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}
        
      </div>
    </section>
  );
}

export default Experience;