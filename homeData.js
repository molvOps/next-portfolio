import askuslogo from "./public/logo-ask-us.png";
import tplogo from "./public/techpedialogo.jpg";

export const experiences = [
  {
    logo: askuslogo,
    company: "AskUs Solutions",
    role: "Software Engineer",
    duration: "Mar 2024 — June 2024",
    link: "https://www.askussolution.tech/",
    description: [
      "Built and maintained enterprise-level React applications, implementing reusable components and optimized UI workflows to improve performance and scalability.",
      "Developed a Schedule Generator system using Python, Pandas, and Streamlit, automating complex scheduling tasks and reducing manual effort by over 70%.",
      "Created a fully functional e-commerce platform using React (frontend) and Django (backend), including product management, authentication, and integrated order workflows.",
      "Utilized Git for version control, collaborating using branches, pull requests, and structured workflows to maintain clean and stable releases.",
    ],
  },
  {
    logo: tplogo,
    company: "TechPedia",
    role: "iOS Engineer",
    duration: "June 2025 — Nov 2025",
    link: "https://techpedia.co.uk/",
    description: [
      "Designed and implemented programmatic UI components, animations, and advanced features, enhancing app interactivity and overall user experience.",
      "Learned key concepts of Concurrency, Asynchronous Programming and Apple Core Frameworks.",
      "Applied MVC architecture and integrated third-party libraries to accelerate development and ensure maintainable, scalable code.",
      "Built an AI-powered cleaner app for managing user data, including similar/duplicate/blurry media and email cleanup, enhancing cleanup functions by 90%.",
      "Developed a creative design and editing app with features like customizable templates, Undo/Redo systems, and multi-format support, improving user productivity by 80%",
    ],
  },
];

export const projects = [
  {
    Name: "AI Cleaner",
    source: "/ai-cleaner.png",
    picLink: "https://apps.apple.com/sn/developer/muhammad-rehan-khan/id1803580164",
    github: "",
    type: "Mobile",
    description: [
      "Built an AI-powered cleaner app in Swift using UIKit, EventKit, and CNContacts to remove duplicate, similar, blurry, and unwanted media.",
      "Integrated Core ML models to enhance on-device media classification and boost cleanup accuracy.",
      "Implemented RESTful API integration to fetch users’ Gmail data, enabling efficient viewing and deletion of unnecessary emails.",
      "Developed an image cleanup system using Laplacian Filter (blur detection) and Perceptual Hashing (duplicate/similar image detection).",
      "Engineered a real-time analysis interface with DPCharts, delivering ideal visual feedback.",
    ],
    skills: ["Swift", "UIKit", "Core ML", "EventKit", "CNContacts", "GMAIL REST API", "DPCharts"],
  },
  {
    Name: "Logo Maker",
    source: "/logo-maker.png",
    picLink: "https://apps.apple.com/us/app/logo-maker-desgin-generator/id6736828262",
    github: "",
    type: "Mobile",
    description: [
      "Implemented advanced image editing features using Core Graphics for drawing, Mantis for cropping, and Core Image for custom filter effects.",
      "Integrated StoreKit-2 to enable In-App Purchases and added support for Dark, Light, and System themes for improved UI personalization.",
      "Integrated Firebase Authentication and Firestore Storage for secure sign-in and efficient cloud asset management.",
      "Added Speech-to-Text voice search using the Speech framework to improve accessibility and user experience.",
      "Enhanced the Save-to-Draft feature using Realm, ensuring all Artboard slots and design states are fully preserved and restored.",
    ],
    skills: ["Swift", "UIKit", "Core Graphics", "Mantis", "Core Image", "StoreKit-2", "Firebase Auth", "Realm", "Speech"],
  },
  {
    Name: "Upthyme",
    source: "/upthyme-web.png",
    picLink: "upthyme.com",
    github: "",
    type: "Web",
    description: [
      "Developed the frontend of an Employee Shift Management system using React and Tailwind CSS, delivering a responsive and structured UI.",
      "Implemented global state management using Zustand to efficiently handle employee shift data across components.",
      "Enabled employees to view assigned shifts, complete tasks, and track progress in real-time with a user-friendly interface.",
      "Designed reusable components for task cards, shift schedules, and progress tracking, improving maintainability and scalability.",
      "Optimized frontend performance with lazy loading and minimized re-renders to provide a smooth user experience.",
    ],
    skills: ["React", "Tailwind CSS", "Zustand", "Vercel"],
  },
  {
    Name: "Shalimar Optical",
    source: "/shalimar.png",
    picLink: "https://shalimar-optical.vercel.app/",
    github: "https://github.com/molvOps/lense-bold",
    type: "Web",
    description: [
      "Developed a full-featured eCommerce website using React for frontend and Django for backend.",
      "Implemented product listing, filtering, cart, and checkout functionality for seamless shopping experience.",
      "Integrated user authentication, profile management, and order tracking for enhanced user engagement.",
      "Built a secure backend with Django REST Framework to handle orders, payments, and product inventory efficiently.",
      "Optimized frontend performance using component-based architecture and reusable UI elements.",
    ],
    skills: ["React", "Django", "REST API", "DjangoRestFramework", "PostgreSQL", "Vercel"],
  },
  
  {
    Name: "Schedule Generator",
    source: "/streamlit.png",
    picLink: "",
    github: "",
    type: "Web, AI",
    description: [
      "Developed a web-based schedule generator using Python, Pandas, and Streamlit for schools to efficiently create class-wise and teacher-wise schedules.",
      "Enabled users to upload Excel timetables and automatically process them into aggregated schedules for all teachers.",
      "Implemented automated PDF generation of schedules for easy distribution and printing.",
      "Designed an intuitive Streamlit interface to allow users to customize inputs, view schedules interactively, and download results.",
      "Optimized data processing and scheduling logic for accuracy and speed using Pandas and Python scripting."
    ],
    skills: ["Python", "Pandas", "Streamlit", "Numpy"]
  }



];


export const skillsData = [
  {
    title: "Languages",
    items: [
      { name: "HTML", src: "/html-logo.png" },
      { name: "CSS", src: "/css-logo.png" },
      { name: "JavaScript", src: "/js-logo.png" },
      { name: "Python", src: "/python-logo.png" },
      { name: "C++", src: "/cpp-logo.png" },
      { name: "Swift", src: "/swift.png"},
      { name: "TypeScript", src: "/typescript.png"}
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", src: "/react-logo.png" },
      { name: "Django", src: "/django-logo.png" },
      { name: "Tailwind", src: "/tailwind-logo.png" },
      {name: "NextJS", src: "/nextjs.png"},
      { name: "UIKit", src: "/uikit.png"}
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", src: "/postgre.png" },
      { name: "MongoDB", src: "/mongodb.png" },
      {name: "Firebase", src: "/firebase.png"}
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", src: "/git-logo.png" },
      { name: "GitHub", src: "/github-logo.png" },
      { name: "Docker", src: "/docker-logo.png" },
    ],
  },
]
