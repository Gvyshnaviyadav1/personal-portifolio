import { Project, Experience, Education, SkillGroup } from '../types';
import ss1 from "../../assets/ss1.png";
import ss2 from "../../assets/ss2.png";
export const personalInfo = {
  name: 'G. Vyshnavi Yadav',
  title: 'Computer Science Undergraduate | DevOps & Full Stack Developer',
  institution: 'Indian Institute of Technology Goa',
  degree: 'B.Tech in Computer Science & Engineering',
  cgpa: '8.26 / 10',
  location: 'Chinnapanahalli, Bangalore',
  email: 'vyshnavi.yadav.23031@iitgoa.ac.in',
  phone: '+91 9741911034',
  github: 'https://github.com/Gvyshnaviyadav1',
  linkedin: 'www.linkedin.com/in/g-vyshnavi-yadav',
  bio: 'Fourth-year Computer Science undergraduate at IIT Goa with experience in DevOps, CI/CD automation, cloud deployment, and full-stack web development. Passionate about building scalable applications, automating software delivery, and solving real-world engineering problems.',
};

export const featuredProjects: Project[] = [
  {
    id: 'codequest',
    title: 'CodeQuest — Online Judge Platform',
    description:
      'Full-stack Online Judge supporting C++, Java, and Python with secure Docker-based execution and AI-powered coding assistance.',
    longDescription:
      'Developed and deployed a complete Online Judge platform using React, Django REST Framework, PostgreSQL, and Docker. Implemented secure isolated code execution and integrated Gemini AI for hints, sample solutions, and complexity analysis.',
    category: 'Full Stack',
    tags: [
      'React',
      'Django REST',
      'PostgreSQL',
      'Docker',
      'AWS EC2',
      'Gemini API'
    ],
    image: ss2,
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    architectureHighlights: [
      'Docker-based isolated compiler execution',
      'Supports C++, Java and Python',
      'Gemini AI integration for hints and code correction',
      'Automatic time and space complexity analysis'
    ],
    pipelineSteps: [
      'User submits source code',
      'Docker container securely compiles and executes',
      'Test cases are evaluated',
      'Results are stored and displayed in real time'
    ]
  },
  {
    id: 'note-nexus',
    title: 'Note Nexus — Multi-Client Task & Messaging Server',
    description:
      'Python TCP socket-based messaging and task management server supporting multiple authenticated clients.',
    longDescription:
      'Built a client-server application enabling messaging, task tracking, calendar synchronization, and collaborative diary editing with real-time updates.',
    category: 'Systems / Utilities',
    tags: [
      'Python',
      'Socket Programming',
      'TCP',
      'Multi-threading'
    ],
    image:
      ss1,
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    architectureHighlights: [
      'Multi-client TCP socket server',
      'User authentication',
      'Collaborative diary editing',
      'Real-time synchronization'
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: 'Cognam Technologies',
    role: 'DevOps Intern',
    location: 'Remote',
    period: 'May 2026 – July 2026',
    type: 'Internship',
    description: [
      'Developed and enhanced Jenkins-based CI/CD pipelines for production applications.',
      'Architected an automated build notification framework for developers and QA engineers.',
      'Integrated Jenkins with Email and GitHub workflows.',
      'Engineered an automated Release Management Pipeline reducing release time from nearly 3 hours to about 30 seconds.'
    ],
    technologies: [
      'Jenkins',
      'Docker',
      'Git',
      'GitHub',
      'Linux'
    ]
  },
  {
    company: 'Bluestock Fintech',
    role: 'Software Development Engineer Intern',
    location: 'Remote',
    period: 'May 2025 – June 2025',
    type: 'Internship',
    description: [
      'Contributed to a production-level IPO web application.',
      'Developed REST APIs using Django.',
      'Managed PostgreSQL databases.',
      'Built responsive ReactJS frontend following Figma designs.'
    ],
    technologies: [
      'ReactJS',
      'Django',
      'PostgreSQL',
      'JavaScript',
      'Tailwind CSS'
    ]
  }
];


export const education: Education = {
  institution: 'Indian Institute of Technology Goa (IIT Goa)',
  degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
  period: '2023 – 2027',
  cgpa: '8.26 / 10.0',
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Computer Networks',
    'Machine Learning ',
    'Artificial Intelligence',
    'Computer System Architecture'
  ],
  achievements: [
    'Amazon ML Challenge - Top 250 among 20,000+ teams',
    'Solved 300+ algorithmic problems',
    'Qualified for IIWPC Quarter Finals'

  ]
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages & Core',
    skills: [
      { name: 'C++' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'HTML5 / CSS3' }
    ]
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'Jenkins CI/CD' },
      { name: 'Docker & Containers' },
      { name: 'AWS EC2 ' },
      { name: 'GitHub Actions' },
      { name: 'Shell Scripting' },
      { name: 'Git & Version Control' }
    ]
  },
  {
    category: 'Frontend & Backend',
    skills: [
      { name: 'React.js' },
      { name: 'Next.js ' },
      { name: 'Tailwind CSS' },
      { name: 'Django REST Framework' },
      { name: 'PostgreSQL' }
    ]
  }
];
