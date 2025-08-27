import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700", "500"],
  subsets: ["latin"],
});
interface prop{
  setSelectedSection:any
}

function About({setSelectedSection}:prop) {
  return (
    <section onMouseEnter={()=>{setSelectedSection("about")}} id="about" className={`${inter.className}  flex w-full h-screen items-center`}>
      <div className="w-[80%] space-x-10 space-y-6  text-[17px] text-[#94a3b8]">  
        <p>
          Building user-friendly, high-performing applications that blend elegant
          design and potent intelligence is my passion as a{" "}
          <span className="text-white">web developer</span> and{" "}
          <span className="text-white">AI enthusiast</span>. My work lies at the nexus of applied AI and contemporary web
          development, producing intelligent, scalable, and interactive
          experiences.
        </p>

        <p>
          I'm currently employed as a <span className="text-white">freelancer</span>, where my main
          responsibilities include developing <span className="text-white">full-stack applications</span> and
          experimenting with <span className="text-white">AI-powered features</span> that improve user experiences.
        </p>

        <p>
          For my <span className="text-white">Final Year Project (FYP)</span> I created a <span className="text-white">DevOps AI Agent</span>—an
          intelligent system that can automatically analyze entire projects and
          suggest the most effective <span className="text-white">deployment strategies</span>—as my senior project.
          It was a step in the direction of less manual, more intelligent, and
          faster development workflows.
        </p>

      </div>
    </section>
  );
}

export default About;