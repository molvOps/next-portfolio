"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const listRef = useRef<HTMLUListElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const closeOnOutsideClick = (event: Event) => {
      if (listRef.current && !listRef.current.contains(event.target as Node) && btnRef.current && !btnRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const events: (keyof DocumentEventMap)[] = ["mousedown", "touchstart", "scroll"];
    events.forEach((ev) => document.addEventListener(ev, closeOnOutsideClick));

    return () => {
      events.forEach((ev) => document.removeEventListener(ev, closeOnOutsideClick));
    };
  }, []);

  return (
    <nav className="flex justify-between  items-center mr-5 max-md:mr-0 relative mt-4">
      <a href="#about">
        <Image width={150} height={150} src="/logo.png" alt="logo" className="max-md:w-[100px] max-[950px]:hidden" />
      </a>

      <ul className={`hidden md:flex list-none gap-12 text-center`}>
        <li><a className="hover:text-white" href="#experience">Experience</a></li>
        <li><a className="hover:text-white" href="#projectsid">Projects</a></li>
        <li><a className="hover:text-white" href="#skills">Skills</a></li>
        <li><a className="hover:text-white" href="/Resume.pdf" target="_blank">Resume</a></li>
        <li><a className="hover:text-white" href="#contact">Contact Me</a></li>
      </ul>

      <button ref={btnRef} onClick={handleMenu} className="hidden max-md:block mr-4 mt-[4px] bg-transparent border-none text-2xl">
        {isOpen ? "✖" : "☰"}
      </button>

      <ul
        ref={listRef}
        className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-1 absolute right-4 top-10 bg-yellow-400 p-3 rounded-[10px] shadow-md z-[100] opacity-90 md:hidden`}
      >
        <li>
          <a
            className="text-black text-base font-medium px-3 py-1 block"
            href="#experience"
          >
            Experience
          </a>
        </li>
        <li>
          <a className="text-black text-base font-medium px-3 py-1 block" href="#projectsid">
            Projects
          </a>
        </li>
        <li>
          <a className="text-black text-base font-medium px-3 py-1 block" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a
            className="text-black text-base font-medium px-3 py-1 block"
            href="/Resume.pdf"
            target="_blank"
          >
            Resume
          </a>
        </li>
        <li>
          <a className="text-black text-base font-medium px-3 py-1 block" href="#contact">
            Contact Me
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;
