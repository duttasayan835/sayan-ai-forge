// Sample CV content for download
export const cvData = {
  personalInfo: {
    name: "Sayan Dutta",
    title: "AI/LLM Builder & CSE Student",
    email: "duttasayan835@gmail.com",
    phone: "+91 (XXX) XXX-XXXX",
    location: "West Bengal, India",
    website: "www.sayandutta.dev"
  },
  summary: "Passionate AI/LLM builder and 3rd-year Computer Science Engineering student with expertise in developing intelligent automation tools and real-world AI applications. Currently working on Savitr-AI, an intelligent delivery optimization system with advanced RAG capabilities.",
  skills: [
    "Python",
    "LangChain",
    "OpenAI API",
    "React & JavaScript",
    "MongoDB",
    "AI/ML",
    "RAG Systems",
    "Node.js"
  ],
  experience: [
    {
      company: "Savitr-AI Project",
      position: "AI/LLM Developer",
      period: "2024 - Present",
      responsibilities: [
        "Developing intelligent delivery system with advanced RAG capabilities",
        "Implementing multi-modal AI interactions for logistics optimization",
        "Building scalable AI agents for real-time decision making"
      ]
    },
    {
      company: "Road Safety Project",
      position: "Data Analyst Intern",
      period: "2023 - 2024",
      responsibilities: [
        "Built comprehensive analytics dashboard for traffic safety monitoring",
        "Developed predictive insights using data analysis techniques",
        "Created interactive visualizations using React and D3.js"
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      school: "University Institute of Technology, Burdwan",
      period: "2022 - 2026",
      cgpa: "8.79"
    }
  ],
  projects: [
    {
      name: "Savitr-AI",
      description: "Intelligent delivery system with advanced RAG capabilities and multi-modal AI interactions",
      technologies: ["Python", "LangChain", "OpenAI API", "MongoDB"]
    },
    {
      name: "Cyberpunk Chatbot",
      description: "Interactive AI chatbot with futuristic cyberpunk theme and real-time responses",
      technologies: ["React", "Node.js", "WebSocket", "Gemini API"]
    },
    {
      name: "Road Safety Dashboard",
      description: "Comprehensive analytics platform for traffic safety monitoring in India",
      technologies: ["React", "D3.js", "Python", "Qlik Sense"]
    }
  ]
};

// Resume URLs
export const resumeLinks = {
  download: "https://drive.google.com/uc?export=download&id=1OowilWEGQrAwYwNCTb9BvVEYWekmzFzr",
  preview: "https://drive.google.com/file/d/1OowilWEGQrAwYwNCTb9BvVEYWekmzFzr/view?usp=drive_link"
};

// Smooth scroll to section function
export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Account for navbar height
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

// Social media links (replace with actual URLs)
export const socialLinks = {
  github: "https://github.com/duttasayan835",
  linkedin: "https://www.linkedin.com/in/dutta-sayan835/",
  email: "mailto:duttasayan835@gmail.com",
  website: "https://sayandutta.dev"
};