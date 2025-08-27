import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
});

const projects = [
  {
    title: "Career Path AI",
    type: "freelance",
    description: "AI-powered career guidance platform that analyzes user skills, experience, and preferences to provide personalized career recommendations and roadmaps. Features intelligent matching with job opportunities and skill gap analysis.",
    image: "/api/placeholder/250/150",
    technologies: ["React", "Node.js", "OpenAI", "MongoDB", "Express"],
    stats: null
  },
  {
    title: "AI PowerPoint Editor",
    type: "freelance", 
    description: "Intelligent presentation editing tool that uses AI to automatically format, design, and enhance PowerPoint presentations. Includes smart content suggestions, design recommendations, and automated slide optimization.",
    image: "/api/placeholder/250/150",
    technologies: ["Python", "React", "OpenAI", "PowerPoint API", "Flask"],
    stats: null
  },
  {
    title: "DevOps AI Agent",
    type: "personal",
    description: "Intelligent system that automatically analyzes entire projects and suggests the most effective deployment strategies. Built as Final Year Project to automate DevOps workflows and reduce manual configuration.",
    image: "/api/placeholder/250/150",
    technologies: ["Python", "Docker", "AWS", "Machine Learning", "CI/CD"],
    stats: null
  },
  {
    title: "Stocks Analyst",
    type: "personal",
    description: "AI-powered stock analysis platform that provides real-time market insights, predictive analytics, and investment recommendations. Features advanced charting, portfolio tracking, and risk assessment tools.",
    image: "/api/placeholder/250/150",
    technologies: ["React", "Python", "TensorFlow", "Alpha Vantage API", "Chart.js"],
    stats: "⭐ 245"
  },
  {
    title: "Finance Future - AI Finance Manager",
    type: "freelance",
    description: "Comprehensive AI-powered personal finance management application that tracks expenses, predicts spending patterns, and provides intelligent budgeting recommendations with automated categorization.",
    image: "/api/placeholder/250/150", 
    technologies: ["React Native", "Node.js", "AI/ML", "Plaid API", "MongoDB"],
    stats: null
  },
  {
    title: "Therapist AI Chatbot",
    type: "personal",
    description: "Empathetic AI chatbot designed to provide mental health support and therapeutic conversations. Features mood tracking, coping strategies, and crisis intervention capabilities with privacy-focused design.",
    image: "/api/placeholder/250/150",
    technologies: ["Python", "NLP", "React", "OpenAI", "Psychology APIs"],
    stats: "⭐ 156"
  },
  {
    title: "Twitter Clone",
    type: "personal", 
    description: "Full-featured social media platform replicating Twitter's core functionality including real-time tweets, user interactions, trending topics, and advanced search capabilities with modern UI/UX.",
    image: "/api/placeholder/250/150",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    stats: "⭐ 89"
  },
  {
    title: "Uplift",
    type: "freelance",
    description: "Employee wellness and productivity platform that combines task management with mental health tools. Features mood tracking, productivity analytics, and team collaboration tools for workplace wellbeing.",
    image: "/api/placeholder/250/150",
    technologies: ["React", "Node.js", "PostgreSQL", "WebRTC", "Chart.js"],
    stats: null
  },
  {
    title: "Source Arabia",
    type: "freelance",
    description: "B2B marketplace platform connecting Middle Eastern suppliers with global buyers. Features advanced search, supplier verification, bulk ordering system, and multi-language support for regional commerce.",
    image: "/api/placeholder/250/150",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS S3"],
    stats: "📥 50K+ Users"
  }
];
interface prop{
  setSelectedSection:any
}
function Projects({setSelectedSection}:prop) {
  return (
    <section onMouseEnter={()=>{setSelectedSection("projects")}} id="projects" className={`${inter.className} flex w-full min-h-screen items-center py-12`}>
      <div className="w-[90%] space-y-8">
        
        {projects.map((project, index) => (
          <div key={index} className="flex gap-6 group hover:bg-slate-800/20 p-6 rounded-lg transition-all duration-300 cursor-pointer">
            
            {/* Project Image/Thumbnail */}
            <div className="flex-shrink-0">
              <div className="w-[200px] h-[120px] bg-[#1e293b] rounded-lg border border-[#334155] flex items-center justify-center overflow-hidden group-hover:border-[#22d3ee]/50 transition-all duration-300">
                <div className="text-[#64748b] text-sm text-center p-4">
                  {project.title}
                  <br />
                  <span className="text-xs opacity-60">
                    {project.type === 'freelance' ? 'Freelance Project' : 'Personal Project'}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="flex-1 space-y-4">
              
              {/* Title and Link */}
              <div className="flex items-center gap-2">
                <h3 className="text-[#22d3ee] text-lg font-semibold group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <svg 
                  className="w-4 h-4 text-[#22d3ee] opacity-70 group-hover:opacity-100 group-hover:text-white transition-all duration-300" 
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

              {/* Description */}
              <p className="text-[#94a3b8] text-base leading-relaxed">
                {project.description}
              </p>

              {/* Stats (if available) */}
              {project.stats && (
                <div className="text-[#64748b] text-sm font-medium">
                  {project.stats}
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-[#22d3ee]/10 text-[#22d3ee] text-sm rounded-full border border-[#22d3ee]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </div>
        ))}
        
      </div>
    </section>
  );
}

export default Projects;