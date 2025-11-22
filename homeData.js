import askuslogo from './public/logo-ask-us.png'
import tplogo from './public/techpedialogo.jpg'


export const experiences = [
  {
    logo: askuslogo,
    company: 'AskUs Solutions',
    role: 'Software Engineer',
    duration: 'Mar 2024 — June 2024',
    link: 'https://www.askussolution.tech/',
    description: [
      'Built and maintained enterprise-level React applications, implementing reusable components and optimized UI workflows to improve performance and scalability.',
      'Developed a Schedule Generator system using Python, Pandas, and Streamlit, automating complex scheduling tasks and reducing manual effort by over 70%.',
      'Created a fully functional e-commerce platform using React (frontend) and Django (backend), including product management, authentication, and integrated order workflows.',
      'Utilized Git for version control, collaborating using branches, pull requests, and structured workflows to maintain clean and stable releases.'
    ]
  },
  {
    logo: tplogo,
    company: 'TechPedia',
    role: 'iOS Engineer',
    duration: 'June 2025 — Nov 2025',
    link: 'https://techpedia.co.uk/',
    description: [
        'Designed and implemented programmatic UI components, animations, and advanced features, enhancing app interactivity and overall user experience.',
        'Learned key concepts of Concurrency, Asynchronous Programming and Apple Core Frameworks.',
        'Applied MVC architecture and integrated third-party libraries to accelerate development and ensure maintainable, scalable code.',
        'Built an AI-powered cleaner app for managing user data, including similar/duplicate/blurry media and email cleanup, enhancing cleanup functions by 90%.',
        'Developed a creative design and editing app with features like customizable templates, Undo/Redo systems, and multi-format support, improving user productivity by 80%'
    ]
  }
]
