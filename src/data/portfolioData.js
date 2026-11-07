export const portfolioData = {
  personal: {
    name: "Suyog Shinde",
    role: "Full Stack Developer | Python & Django | React.js",
    tagline: "Building scalable backend architectures and high-performance interactive web interfaces.",
    bio: "Computer Science and Engineering graduate specializing in Full Stack Python Development. Experienced in designing robust RESTful APIs with Django and developing responsive, reactive single-page applications with React.js and modern database systems.",
    location: "Pune, India",
    email: "suyogshinde74@gmail.com",
    phone: "+91 7414901527",
    resumeUrl: "/Suyog_Shinde_Resume.pdf",
    socials: {
      github: "https://github.com/suyogshinde-dev",
      linkedin: "https://www.linkedin.com/in/suyogshinde72/",
      email: "mailto:suyogshinde74@gmail.com"
    }
  },

  skills: {
    languages: ["Python", "JavaScript (ES6+)", "Java", "C++", "SQL"],
    frontend: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "Recharts"],
    backend: ["Django", "Django REST Framework", "RESTful APIs", "JWT Authentication"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Vite"]
  },

  internships: [
    {
      id: 1,
      role: "Android Developer Virtual Internship",
      organization: "EduSkills",
      duration: "10 weeks"
    },
    {
      id: 2,
      role: "Data Analytics Summer Internship",
      organization: "IBM SkillsBuild",
      duration: "2 months"
    },
    {
      id: 3,
      role: "Data Engineering Virtual Internship",
      organization: "EduSkills",
      duration: "10 weeks"
    }
  ],

  projects: [
    {
      id: 1,
      title: "Student Management System",
      description: "A full-stack management platform engineered to streamline student profiles, course registrations, attendance tracking, and academic records with structured database integrity.",
      techStack: ["Python", "Django", "React.js", "REST APIs", "MySQL"],
      highlights: [
        "Built modular Django RESTful APIs for complete CRUD operations across student and course entities",
        "Created an intuitive React.js interface with real-time search, filters, and dynamic record editing",
        "Engineered relational database schema in MySQL for optimized query retrieval and data consistency"
      ],
      githubUrl: null, // Marked pending per instructions
      demoUrl: null,   // Marked pending per instructions
      status: "Production Ready / Repositories Upon Request"
    },
    {
      id: 2,
      title: "Expense Tracker & Financial Analytics",
      description: "A comprehensive financial intelligence application that allows users to record personal expenditures, manage budget categories, and inspect analytical visualizations.",
      techStack: ["Python", "Django REST Framework", "React.js", "MySQL", "JWT", "Recharts"],
      highlights: [
        "Implemented secure JWT (JSON Web Token) authentication for protected user sessions and endpoints",
        "Built backend analytics logic in Django REST Framework to aggregate monthly spending trends",
        "Rendered interactive visualization dashboards using React and Recharts with responsive data views"
      ],
      githubUrl: null, // Marked pending per instructions
      demoUrl: null,   // Marked pending per instructions
      status: "Production Ready / Repositories Upon Request"
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Dnyanshree Institute of Engineering & Technology, Satara",
      duration: "2022 – 2025",
      grade: "CGPA: 6.5"
    },
    {
      id: 2,
      degree: "Diploma in Computer Engineering",
      institution: "Abhaysinhraje Bhonsle Institute of Technology, Satara",
      duration: "2019 – 2021",
      grade: "Percentage: 88%"
    }
  ],

  training: {
    title: "Full Stack Python Development",
    institution: "Kiran Academy, Pune",
    technologies: ["Python", "Django", "React.js", "HTML", "CSS", "JavaScript", "SQL"],
    focus: "Hands-on application development, RESTful API architecture, full-stack integration, and relational database management."
  },

  certifications: [
    {
      id: 1,
      title: "Introduction to Front-End Development",
      issuer: "Meta (Coursera)",
      domain: "Frontend Architecture"
    },
    {
      id: 2,
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM (Coursera)",
      domain: "Artificial Intelligence"
    },
    {
      id: 3,
      title: "Java Programming: Solving Problems with Software",
      issuer: "Duke University (Coursera)",
      domain: "Object-Oriented Programming"
    },
    {
      id: 4,
      title: "Data Science: R Programming Complete Diploma",
      issuer: "Professional Certification",
      domain: "Data Analysis & Statistics"
    }
  ]
};

