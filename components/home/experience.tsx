import { experiences } from '../../homeData.js'
import Image from 'next/image'

function Experience() {
    return (
        <>
            <h1
                id="experience"
                className="
          text-[2.5rem] mx-[0.2rem] my-[0.2rem] text-white
          md:text-[60px] text-center md:my-[3rem] md:mx-[2rem]
        "
            >
                Experience
            </h1>


            <div className="max-md:flex max-md:flex-col max-md:items-center">
                {experiences.map((exp, index) => (
                    <div key={index} className={`md:w-full md:flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} `}>

                        <div

                            className={`
                            max-w-[85vw] m-[2rem_3rem] flex p-5 flex-wrap
                            rounded-[20px] shadow-[0px_0px_10px_5px_rgba(224,172,0,0.25)]
                            transition duration-200 ease-in-out
                            hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(255,200,0,0.4)]
                            max-md:flex max-md:flex-col max-md:mx-4 md:max-w-[65vw]
                            `}
                        >

                            <div className="comp-logo">
                                <a href={exp.link} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        width={50}
                                        height={50}
                                        src={exp.logo}
                                        alt={`${exp.company}-logo`}
                                        className="
                    w-[50px] h-[50px] rounded-full object-contain border-2 border-black
                    max-md:ml-[0.2rem] md:w-[80px] md:h-[80px]
                  "
                                    />
                                </a>
                            </div>


                            <div className="txt-cont">
                                <div
                                    className="
                  text-[25px] text-yellow-500 pl-[20px]
                  max-md:text-[1.3rem] max-md:translate-y-[6px] max-md:pb-[0.15rem] max-md:pl-1
                "
                                >
                                    {exp.company}
                                </div>

                                <div
                                    className="
                  text-[15px] font-bold text-white pl-[20px]
                  max-md:text-[0.7rem] max-md:pl-1
                "
                                >
                                    {exp.role}
                                </div>

                                <div
                                    className="
                  text-[15px] font-bold text-white pl-[20px]
                  max-md:text-[0.7rem] max-md:pl-1
                "
                                >
                                    {exp.duration}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="description w-full">
                                {exp.description.map((point, idx) => (
                                    <div
                                        key={idx}
                                        className="
                    pt-[15px] text-[15px] font-normal
                    max-md:pt-2 max-md:text-[0.7rem] max-md:mr-[5px]
                  "
                                    >
                                        {point}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Experience;
