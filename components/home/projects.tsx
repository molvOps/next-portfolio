"use client"
import { Key, useState } from 'react';
import { projects } from '../../homeData';
import Image from 'next/image';

interface Project {
  Name: string;
  type: string;
  source: string;
  picLink?: string;
  github?: string;
  description: string[];
  skills: string[];
}

const projectTypes = ["All", "Web", "Mobile", "AI", "CyberSecurity"];

function Projects() {
  const [activeType, setActiveType] = useState("All");

  const filteredProjects = projects.filter((p) => {
    if (activeType === "All") return true;
    return p.type.includes(activeType);
  });

  return (
    <>
      <h1 className="text-[60px] text-center my-[3rem] mx-[2rem] mb-8 text-white
                   max-md:text-[2.4rem] max-md:my-4">
        Projects
      </h1>

      {/* Buttons */}
      <div className="my-6 flex items-center justify-center flex-wrap gap-3">
        {projectTypes.map((project, id) => (
          <button
            key={id}
            onClick={() => setActiveType(project)}
            className={`text-[15px] max-md:[0.7rem] cursor-pointer
              px-4 py-2 rounded-xl transition 
              ${activeType === project
                ? "bg-yellow-500 text-black"
                : "text-white border border-yellow-500 hover:bg-yellow-500 hover:text-black"
              }
            `}
          >
            {project}
          </button>
        ))}
      </div>

      {/* Filtered Project Grid */}
      <div className="
          grid grid-cols-3 gap-4 mx-[3rem] 
          max-md:flex max-md:flex-col max-md:items-center max-md:justify-center
          max-md:grid-cols-1 max-md:mx-0 max-md:gap-2">

        {filteredProjects.map((obj: Project, index: Key) => (
          <div
            key={index}
            className="max-w-[80vw] flex flex-wrap  p-5 md:p-10 m-2 rounded-[20px]
                       shadow-[0px_0px_10px_5px_rgba(224,172,0,0.25)]
                       transition duration-200 ease-in-out hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,200,0,0.4)]">

            <div className="w-full mb-4">
              <a href={obj.picLink} target="_blank" rel="noreferrer">
                <Image
                  src={obj.source}
                  alt={obj.Name}
                  width={400}
                  height={400}
                  className="w-[300] h-[200] md:w-[80vw] md:h-[300] rounded-[15px] border-2 border-black"
                />
              </a>
            </div>

            <div className="w-full">
              <div className="text-[25px] max-md:text-[1.3rem] text-yellow-500">{obj.Name}</div>
              <div className="mt-1 text-[15px] font-normal">
                <a href={obj.github} target="_blank" rel="noreferrer" className="hover:underline"></a>
              </div>
            </div>

            <div className="w-full pt-2 text-[15px] space-y-1 max-md:text-[0.7rem] font-normal">
              {obj.description.map((line, i) => (
                <p key={i}>• {line}</p>
              ))}
            </div>

            <div className="w-full mt-2 text-[15px] max-md:text-[0.7rem] font-bold text-white">
              {obj.skills.join(', ')}
            </div>
              
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
