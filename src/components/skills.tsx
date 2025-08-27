import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
});

const skillsData = {
  web: {
    title: "Web Development",
    icon: "",
    categories: [
      {
        name: "Programming Languages",
        skills: ["Python", "JavaScript", "C++", "C#"]
      },
      {
        name: "Frontend",
        skills: ["React", "Next.js", "Express.js", "Node.js", "MongoDB"]
      },
      {
        name: "Backend", 
        skills: ["FastAPI", "Django", "Express.js", "Node.js"]
      }
    ]
  },
  ai: {
    title: "Artificial Intelligence",
    icon: "",
    categories: [
      {
        name: "AI/ML Frameworks",
        skills: ["PyTorch", "TensorFlow", "PEFT"]
      },
      {
        name: "Programming Languages",
        skills: ["Python", "JavaScript", "C++", "C#"]
      },
      {
        name: "Frontend",
        skills: ["React", "Django", "Next.js"]
      },
      {
        name: "Backend",
        skills: ["FastAPI", "Django", "Express.js", "Node.js"]
      },
      {
        name: "AI APIs",
        skills: ["OpenAI", "Claude API", "Google AI", "Hugging Face"]
      },
      {
        name: "Domains",
        skills: ["LLM", "NLP", "Neural Networks", "Deep Learning"]
      }
    ]
  }
};
interface prop{
  setSelectedSection:any
}
function Skills({setSelectedSection}:prop) {
  return (
    <section onMouseEnter={()=>{setSelectedSection("skills")}} id="skills" className={`${inter.className} flex w-full min-h-screen justify-center items-center py-10`}>
      <div className="w-[90%] space-y-16">
        
        {Object.entries(skillsData).map(([key, section]) => (
          <div key={key} className="space-y-8">
            
            {/* Section Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="text-3xl">{section.icon}</div>
              <h2 className="text-[#22d3ee] text-2xl font-bold">{section.title}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#22d3ee]/50 to-transparent"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.categories.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex} 
                  className="group bg-[#0f172a]/40 border border-[#334155] rounded-xl p-6 hover:border-[#22d3ee]/50 hover:bg-[#0f172a]/60 transition-all duration-300 hover:transform hover:scale-105"
                >
                  
                  {/* Category Title */}
                  <h3 className="text-white text-lg font-semibold mb-4 group-hover:text-[#22d3ee] transition-colors duration-300">
                    {category.name}
                  </h3>
                  
                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center gap-3 group/skill"
                      >
                        <div className="w-2 h-2 bg-[#22d3ee] rounded-full group-hover/skill:bg-white transition-colors duration-200"></div>
                        <span className="text-[#94a3b8] group-hover/skill:text-white transition-colors duration-200 text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Skill Count Badge */}
                  <div className="mt-4 pt-4 border-t border-[#334155]/50">
                    <span className="text-[#64748b] text-xs font-medium">
                      {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>

                </div>
              ))}
            </div>

            {/* Section Divider */}
            {key === 'web' && (
              <div className="flex items-center justify-center py-8">
                <div className="flex items-center gap-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-[#22d3ee]/30 to-transparent w-32"></div>
                  <div className="w-3 h-3 bg-[#22d3ee]/50 rounded-full"></div>
                  <div className="h-px bg-gradient-to-r from-transparent via-[#22d3ee]/30 to-transparent w-32"></div>
                </div>
              </div>
            )}

          </div>
        ))}
        
      </div>
    </section>
  );
}

export default Skills;