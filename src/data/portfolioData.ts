import { Project, Experience, Education, SkillGroup } from '../types';

export const personalInfo = {
  name: 'G. Vyshnavi Yadav',
  title: 'DevOps & Full Stack Software Engineer',
  institution: 'IIT Goa',
  degree: 'B.Tech in Computer Science & Engineering',
  cgpa: '8.5 / 10',
  location: 'Goa / India',
  email: 'vyshnavi.yadav@iitgoa.ac.in',
  phone: '+91 98765 43210',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  bio: 'Computer Science undergraduate at IIT Goa with hands-on experience in cloud infrastructure, Jenkins CI/CD pipeline optimization, Docker containerization, and modern full-stack web development (React, Next.js, Python/Django REST, PostgreSQL). Passionate about reliable deployment systems and scalable software architectures.',
};

export const featuredProjects: Project[] = [
  {
    id: 'codequest',
    title: 'CodeQuest — Online Judge & Compiler',
    description: 'High-throughput code execution engine supporting C++, Python, and JavaScript with sandboxed Docker execution, time/memory limit enforcement, and dynamic test case validation.',
    longDescription: 'CodeQuest is an end-to-end online judge application built for competitive programming and academic assessments. It executes user code inside isolated, disposable Docker containers to guarantee sandboxed security against malicious system calls, memory leaks, and infinite loops.',
    category: 'Full Stack',
    tags: ['React.js', 'Node.js', 'Docker', 'Express', 'Tailwind CSS', 'C++', 'Python'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    architectureHighlights: [
      'Isolated Docker container runner per code submission with strict memory limits (128MB) & CPU quotas',
      'Asynchronous task queue using Redis for non-blocking submission polling',
      'Real-time leaderboards, execution runtime analytics, and test case result visualizer',
      'Custom syntax highlighting and Monaco editor integration'
    ],
    pipelineSteps: [
      'Client submits source code via WebSocket / REST',
      'Node.js queue spawns isolated ephemeral Docker container',
      'Sub-second test-case evaluation with diff checker',
      'Aggregated execution metrics saved to database & streamed to client'
    ]
  },
  {
    id: 'note-nexus',
    title: 'Note Nexus — Knowledge Management Hub',
    description: 'Full-stack collaborative markdown note-taking workspace featuring live tag indexing, search capabilities, relational note linking, and automated cloud sync.',
    longDescription: 'Note Nexus combines the speed of local plain-text markdown editing with cloud persistence and graph-like relational tagging. Designed with Django REST Framework and PostgreSQL for robust backend data integrity.',
    category: 'Full Stack',
    tags: ['Next.js', 'TypeScript', 'Django REST', 'PostgreSQL', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    architectureHighlights: [
      'Django REST Framework backend with JWT authorization & granular user permissions',
      'PostgreSQL full-text search index for sub-10ms tag and content queries',
      'Auto-saving client-side markdown editor with instant live render preview',
      'Export notes to PDF, HTML, or raw Markdown bundles'
    ]
  },
  {
    id: 'devops-pipeline',
    title: 'Release Engineering & Jenkins CI/CD Automation',
    description: 'Automated release management pipeline engineered during Cognam Technologies internship, cutting execution time from ~3 hours to ~30 seconds with zero-downtime AWS EC2 deployment.',
    longDescription: 'Engineered an end-to-end automated deployment pipeline incorporating GitHub webhooks, multi-stage Jenkins declarative pipelines, automated unit/integration testing, Docker image building, and Amazon ECR pushing.',
    category: 'DevOps & Cloud',
    tags: ['Jenkins', 'Docker', 'AWS EC2', 'AWS ECR', 'GitHub Actions', 'Linux', 'Shell'],
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    architectureHighlights: [
      'Multi-branch Jenkinsfile pipeline with automated Slack/Email alert notifications on build status',
      'Docker layer caching strategy reducing Docker build duration by 85%',
      'Automated staging rollback on healthcheck failure during EC2 deployment',
      'Infrastructure as Code (IaC) setup with Shell scripts and Ansible playbooks'
    ]
  },
  {
    id: 'iitgoa-portal',
    title: 'IIT Goa Academic Portal Companion',
    description: 'Centralized student utility portal for course tracking, GPA estimation, assignment deadlines, and peer study resource distribution.',
    longDescription: 'Built to streamline academic workflow for CSE students at IIT Goa. Features responsive schedule planner, PDF syllabus parser, and assignment reminder system.',
    category: 'Systems / Utilities',
    tags: ['TypeScript', 'React.js', 'Tailwind CSS', 'Vite', 'Local Database'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    architectureHighlights: [
      'Client-side state persistence with fast local searching',
      'Dynamic GPA & SGPA estimator with grade weight customizer',
      'Light/Dark mode accessibility compliance with WCAG AA standards'
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: 'Cognam Technologies',
    role: 'DevOps Intern',
    location: 'Remote / India',
    period: '18 May 2026 – 17 July 2026',
    type: 'Internship',
    description: [
      'Engineered a release management pipeline using Jenkins CI/CD, reducing build execution and deployment time from ~3 hours down to ~30 seconds.',
      'Automated build status notifications via webhooks to Slack channels, increasing engineering feedback speed across the software team.',
      'Containerized backend services using Docker and orchestrated image pushes to Amazon ECR and AWS EC2 runtime environments.'
    ],
    technologies: ['Jenkins', 'Docker', 'AWS EC2', 'AWS ECR', 'Shell Scripting', 'Git']
  }
];

export const education: Education = {
  institution: 'Indian Institute of Technology Goa (IIT Goa)',
  degree: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
  period: '2023 – 2027',
  cgpa: '8.5 / 10.0',
  coursework: [
    'Data Structures & Algorithms',
    'Operating Systems',
    'Computer Networks',
    'Database Management Systems (DBMS)',
    'Software Engineering',
    'Object-Oriented Programming (C++)',
    'Computer System Architecture'
  ],
  achievements: [
    'Active Member & Contributor at CSE Technical Club, IIT Goa',
    'Secured top percentile in JEE Advanced to secure admission at IIT Goa',
    'Led technical workshops on Git, Docker, and CI/CD fundamentals for junior batches'
  ]
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages & Core',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'Python', level: 85 },
      { name: 'SQL', level: 82 },
      { name: 'HTML5 / CSS3', level: 95 }
    ]
  },
  {
    category: 'DevOps & Cloud',
    skills: [
      { name: 'Jenkins CI/CD', level: 88 },
      { name: 'Docker & Containers', level: 86 },
      { name: 'AWS EC2 & S3', level: 80 },
      { name: 'GitHub Actions', level: 84 },
      { name: 'Linux / Bash Scripting', level: 88 },
      { name: 'Git & Version Control', level: 92 }
    ]
  },
  {
    category: 'Frontend & Backend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js (App Router)', level: 88 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'Node.js & Express', level: 84 },
      { name: 'Django REST Framework', level: 80 },
      { name: 'PostgreSQL', level: 82 }
    ]
  }
];
