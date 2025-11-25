"use client";

import Image from "next/image";
import Link from "next/link"
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
    <nav className="flex justify-between items-center mr-4 max-[770px]:mt-6 relative">
      <a href="#about">
        <Image width={100} height={100} src="/logo.png" alt="logo" className="max-md:w-[100px] max-[950px]:hidden" />
      </a>

      <ul className={`hidden md:flex list-none gap-12 text-center`}>
        <li>
          <Link href="/#experience" className="hover:text-white">Experience</Link>
        </li>

        <li>
          <Link href="/#projectsid" className="hover:text-white">Projects</Link>
        </li>

        <li>
          <Link href="/#skills" className="hover:text-white">Skills</Link>
        </li>

        <li>
          <Link href="/blogs" className="hover:text-white">Blogs</Link>
        </li>

        <li>
          <Link href="/#contact" className="hover:text-white">Contact Me</Link>
        </li>
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
