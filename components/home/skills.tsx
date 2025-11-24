
import Image from 'next/image'
import {skillsData} from "../../homeData.js"

function Skills() {
  

  return (
    <>
      <h1 className="text-[60px] text-center mt-20 text-white max-md:text-[1.8rem]">
        Skills
      </h1>

      <div className="flex justify-center items-center mt-8">
        <div className="grid grid-cols-1 gap-4 shadow-[0px_0px_10px_5px_rgba(224,172,0,0.25)] border border-black rounded-[20px] p-5 md:p-10 max-w-[90vw]">
          {skillsData.map((group, idx) => (
            <div
              key={idx}
              className="flex flex-wrap items-center gap-10 max-md:block max-md:max-w-[80vw]"
            >
              <div className="text-white text-[25px] max-md:text-[1.3rem]">
                {group.title}
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-2 max-md:mt-1">
                {group.items.map((skill, i) => (
                  <div
                    key={i}
                    className="relative inline-block cursor-pointer group"
                  >
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={60}
                      height={60}
                      className="rounded-md max-md:w-[40px] max-md:h-[40px] object-contain"
                    />
                    {/* Tooltip */}
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1
                                     hidden group-hover:block
                                     bg-yellow-700 text-white text-[12px] px-2 py-1 rounded">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills
