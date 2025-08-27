
import React, { useState, useEffect } from "react";
import { Minus, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Inter } from "next/font/google";

const sections = [
  { name: "about", path: "#about" },
  { name: "experience", path: "#experience" },
  { name: "projects", path: "#projects" },
  { name: "skills", path: "#skills" },
];

const types = [
  {name:"Web Development", path:"/web"},
  {name:"AI & ML", path:"/AI"},
]

const inter = Inter({
  weight:['400', '700', '500'],
  subsets:['latin']
})

interface prop{
  selectedSection:any,
  setSelectedSection:any
}

function Introduction({selectedSection, setSelectedSection}:prop) {
  const [hoveringSelection, setHoveringSelection] = useState("");
  const [type, settype] = useState("web development");

  // Smooth scroll to section
  const handleSectionClick = (sectionName, path) => {
    setSelectedSection(sectionName);
    
    // Update URL hash
    window.location.hash = path;
    
    // Smooth scroll to section
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    console.log(`Navigating to: ${sectionName}`);
  };

  // Intersection Observer to detect current section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger when section is in middle of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setSelectedSection(sectionId);
          
          // Update URL hash without scrolling
          if (window.location.hash !== `#${sectionId}`) {
            history.replaceState(null, null, `#${sectionId}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    sections.forEach((section) => {
      const element = document.querySelector(`#${section.name}`);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial section based on URL hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash && sections.some(s => s.name === initialHash)) {
      setSelectedSection(initialHash);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center h-screen items-center">
      <div className="flex flex-col justify-center gap-6 p-8">
        {/* Header Section */}
        <div className="flex flex-col space-y-2">
          <h1 className={`text-white ${inter.className} text-4xl font-bold tracking-tight`}>
            Muhammad Saad Ur Rehman
          </h1>
          <h3 className="font-semibold text-xl text-slate-300">
            AI Engineer, Web Developer
          </h3>
        </div>

        {/* Tagline */}
        <p className={`font-medium ${inter.className} text-slate-400 text-lg`}>
          I code my dreams.
        </p>

        {/* Navigation */}
        <div className={`flex ${inter.className} flex-col gap-1`}>
          {sections.map((section, index) => (
            <button
              key={index}
              onMouseEnter={() => setHoveringSelection(section.name)}
              onMouseLeave={() => setHoveringSelection("")}
              onClick={() => handleSectionClick(section.name, section.path)}
              className={`cursor-pointer font-medium text-md flex items-center gap-3 py-2 px-1 rounded transition-all duration-300 ${
                section.name === selectedSection 
                  ? "text-white transform translate-x-2" 
                  : hoveringSelection === section.name
                  ? "text-slate-300 transform translate-x-1"
                  : "text-slate-400 hover:text-slate-300"
              }`}
            >
              <Minus
                size={section.name === selectedSection ? 32 : 24}
                className={`transition-all duration-300 ${
                  section.name === selectedSection ? "text-white" : "text-slate-500"
                }`}
              />
              <span className="capitalize tracking-wide">
                {section.name}
              </span>
            </button>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-row gap-4 mt-6">
          <button className="p-3 bg-slate-700 text-slate-300 rounded-full hover:bg-slate-600 hover:text-white transition-all duration-300 hover:scale-110">
            <Github size={20} />
          </button>
          <button className="p-3 bg-slate-700 text-slate-300 rounded-full hover:bg-slate-600 hover:text-white transition-all duration-300 hover:scale-110">
            <Linkedin size={20} />
          </button>
          <button className="p-3 bg-slate-700 text-slate-300 rounded-full hover:bg-slate-600 hover:text-white transition-all duration-300 hover:scale-110">
            <Mail size={20} />
          </button>
          <button className="p-3 bg-slate-700 text-slate-300 rounded-full hover:bg-slate-600 hover:text-white transition-all duration-300 hover:scale-110">
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Introduction;