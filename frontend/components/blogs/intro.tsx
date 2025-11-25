"use client";
import { useState, useEffect } from "react";


const categories = [
    "All",
    "AI",
    "Mobile",
    "Web",
    "CyberSecurity",
    "Backend",
    "Cloud"
];

export default function Intro() {

    const [selected, setSelected] = useState("All");

    useEffect(() => {
        console.log("Selected category:", selected);

    }, [selected])

    const handleSelect = (cat: string) => {
        setSelected(cat);
    };

    return (
        <div className="w-full flex flex-col items-center mt-10">

            {/* Title */}
            <h1 className="text-white text-[60px] max-md:text-[3rem] text-center max-md:leading-[1.2]">
                Welcome to <span className="text-yellow-500">molvOps'</span> blogs
            </h1>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search for blogs..."
                className="mt-6 w-[40vw] max-md:w-[220px] px-4 py-2 rounded-[50px] 
                   bg-gray-900 text-white  font-normal
                   text-[25px] max-md:text-[0.7rem]
                   placeholder:text-gray-400 text-center"
            />

            {/* Categories */}
            <div className="flex gap-4 flex-wrap justify-center mt-6">
                {categories.map((cat) => {
                    const isSelected = selected === cat;

                    return (
                        <div
                            key={cat}
                            onClick={() => handleSelect(cat)}
                            className={`
              font-bold px-4 py-2 rounded-lg cursor-pointer
              text-[15px] max-md:text-[0.7rem] transition
              border

              ${isSelected
                                    ? "bg-yellow-500 text-black border-yellow-500"
                                    : "text-white border-yellow-500 hover:text-yellow-500"
                                }
            `}
                        >
                            {cat}
                        </div>
                    );
                })}
            </div>

        </div>
    );
}
