// Sample CV content for download
export const cvData = {
  personalInfo: {
    name: "Alex Johnson",
    title: "Creative Developer & Designer",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "www.alexjohnson.dev"
  },
  summary: "Passionate creative developer with 3+ years of experience creating stunning digital experiences that blend beautiful design with cutting-edge technology. Specializing in modern web development, 3D interactions, and user-centered design.",
  skills: [
    "React & Next.js",
    "TypeScript",
    "Three.js & WebGL",
    "UI/UX Design",
    "Node.js",
    "Python",
    "Figma & Adobe Creative Suite",
    "3D Modeling & Animation"
  ],
  experience: [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      responsibilities: [
        "Led development of interactive web applications using React and Three.js",
        "Collaborated with design team to create immersive user experiences",
        "Improved website performance by 40% through optimization techniques"
      ]
    },
    {
      company: "Digital Agency Pro",
      position: "Full Stack Developer",
      period: "2021 - 2022",
      responsibilities: [
        "Developed responsive websites for clients across various industries",
        "Implemented modern design systems and component libraries",
        "Mentored junior developers on best practices"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2017 - 2021"
    }
  ],
  projects: [
    {
      name: "AI-Powered E-commerce Platform",
      description: "3D product visualization with AI recommendations",
      technologies: ["React", "Three.js", "Python", "TensorFlow"]
    },
    {
      name: "Interactive Portfolio Website",
      description: "Immersive 3D portfolio with WebGL animations",
      technologies: ["React", "Three.js", "Framer Motion", "TypeScript"]
    }
  ]
};

// Function to generate and download CV as PDF-like text file
export const downloadCV = () => {
  const cvContent = `
${cvData.personalInfo.name}
${cvData.personalInfo.title}

Contact Information:
Email: ${cvData.personalInfo.email}
Phone: ${cvData.personalInfo.phone}
Location: ${cvData.personalInfo.location}
Website: ${cvData.personalInfo.website}

PROFESSIONAL SUMMARY
${cvData.summary}

TECHNICAL SKILLS
${cvData.skills.join(' • ')}

PROFESSIONAL EXPERIENCE

${cvData.experience.map(exp => `
${exp.position} | ${exp.company}
${exp.period}
${exp.responsibilities.map(resp => `• ${resp}`).join('\n')}
`).join('\n')}

EDUCATION
${cvData.education.map(edu => `
${edu.degree}
${edu.school} | ${edu.period}
`).join('\n')}

FEATURED PROJECTS
${cvData.projects.map(project => `
${project.name}
${project.description}
Technologies: ${project.technologies.join(', ')}
`).join('\n')}
  `;

  const blob = new Blob([cvContent], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Alex_Johnson_CV.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
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
  github: "https://github.com/alexjohnson", // Replace with actual GitHub
  linkedin: "https://linkedin.com/in/alexjohnson", // Replace with actual LinkedIn
  email: "mailto:alex.johnson@example.com", // Replace with actual email
  website: "https://alexjohnson.dev" // Replace with actual website
};