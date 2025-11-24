import Navbar from "@/components/home/navbar";
import Intro from "@/components/home/intro";
import Experience from "@/components/home/experience";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
