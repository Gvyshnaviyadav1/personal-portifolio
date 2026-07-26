import { CodeFile } from '../types';

export const nextProjectFiles: CodeFile[] = [
  {
    path: 'app/layout.tsx',
    folder: 'app',
    filename: 'layout.tsx',
    language: 'typescript',
    description: 'Root layout component with Next.js Metadata, Navbar, main view wrapper, and Footer.',
    content: `import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'G. Vyshnavi Yadav - DevOps & Full Stack Engineer | IIT Goa',
  description: 'Personal portfolio of G. Vyshnavi Yadav, showcasing CodeQuest, Note Nexus, DevOps pipelines, and CSE coursework at IIT Goa built with Next.js App Router and Tailwind CSS.',
  keywords: ['Portfolio', 'DevOps', 'Jenkins', 'Docker', 'React', 'Django', 'IIT Goa', 'G. Vyshnavi Yadav'],
  authors: [{ name: 'G. Vyshnavi Yadav' }],
  openGraph: {
    title: 'G. Vyshnavi Yadav | Portfolio',
    description: 'DevOps & Full Stack Software Engineer at IIT Goa',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900 min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
`
  },
  {
    path: 'app/page.tsx',
    folder: 'app',
    filename: 'page.tsx',
    language: 'typescript',
    description: 'Home page TypeScript component featuring Hero intro, Featured Projects, Key Skills summary, and Contact CTA.',
    content: `import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import { featuredProjects, personalInfo } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'G. Vyshnavi Yadav | DevOps & Full Stack Engineer',
  description: 'Welcome to my portfolio! Check out CodeQuest, Note Nexus, and my DevOps engineering work at IIT Goa.',
};

export default function HomePage() {
  return (
    <div className="space-y-20 sm:space-y-28">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-10 sm:pt-16 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          B.Tech CSE @ {personalInfo.institution} • CGPA {personalInfo.cgpa}
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
          Building Scalable Apps & <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-700 bg-clip-text text-transparent">
            Automated CI/CD Pipelines
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Hi, I&apos;m <strong className="text-slate-900">{personalInfo.name}</strong>. I specialize in cloud infrastructure, Jenkins release engineering, Docker containerization, and modern full-stack web applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/projects">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              View All Projects
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-10">
        <SectionHeader
          badge="Featured Work"
          title="Engineered Projects & Systems"
          subtitle="Explore selected full-stack applications and DevOps CI/CD automation pipelines built with modern frameworks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredProjects.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
`
  },
  {
    path: 'app/about/page.tsx',
    folder: 'app',
    filename: 'page.tsx',
    language: 'typescript',
    description: 'About me page detailing background story, skills breakdown, and work history timeline in TypeScript.',
    content: `import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import { personalInfo, experiences, education, skillGroups } from '@/data/portfolioData';

export const metadata: Metadata = {
  title: 'About Me | G. Vyshnavi Yadav',
  description: 'Learn about my CSE background at IIT Goa, DevOps internship at Cognam Technologies, and software engineering experience.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 max-w-5xl mx-auto">
      <SectionHeader
        badge="About Me"
        title="Engineering Student & Cloud Enthusiast"
        subtitle="Passionate about reliable deployment pipelines, containerized architectures, and modern web applications."
      />

      {/* Profile Summary Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Background & Education</h3>
        <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
          {personalInfo.bio}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-sm">
          <div>
            <span className="text-slate-400 block text-xs uppercase tracking-wider font-medium">Degree</span>
            <strong className="text-slate-800 font-semibold">{education.degree}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-xs uppercase tracking-wider font-medium">Institution</span>
            <strong className="text-slate-800 font-semibold">{education.institution}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-xs uppercase tracking-wider font-medium">Academic CGPA</span>
            <strong className="text-indigo-600 font-bold">{education.cgpa}</strong>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Work Experience</h3>
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                <p className="text-indigo-600 font-medium text-sm">{exp.company} • {exp.location}</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 w-fit">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2 list-disc list-inside text-slate-600 text-sm sm:text-base leading-relaxed">
              {exp.description.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
`
  },
  {
    path: 'app/projects/page.tsx',
    folder: 'app',
    filename: 'page.tsx',
    language: 'typescript',
    description: 'Projects index page featuring search filtering and interactive modal deep-dives.',
    content: `'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import ProjectCard from '@/components/ProjectCard';
import { featuredProjects } from '@/data/portfolioData';

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'DevOps & Cloud', 'Full Stack', 'Systems / Utilities'];

  const filteredProjects = filter === 'All'
    ? featuredProjects
    : featuredProjects.filter((p) => p.category === filter);

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      <SectionHeader
        badge="Portfolio Projects"
        title="Software & Cloud Infrastructure"
        subtitle="Browse all software projects, compiler architectures, and CI/CD pipelines developed during coursework and internships."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={\`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer \${
              filter === cat
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }\`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
`
  },
  {
    path: 'app/contact/page.tsx',
    folder: 'app',
    filename: 'page.tsx',
    language: 'typescript',
    description: 'Contact form page with client-side TypeScript validation and submission state.',
    content: `'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { personalInfo } from '@/data/portfolioData';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-12 max-w-3xl mx-auto">
      <SectionHeader
        badge="Get In Touch"
        title="Let's Connect & Collaborate"
        subtitle="Interested in hiring, collaboration, or discussing DevOps pipelines? Send a message below."
      />

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs">
        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
            <p className="text-slate-600">Thank you for reaching out, {formData.name}. I will respond shortly.</p>
            <Button variant="outline" onClick={() => setSubmitted(false)}>Send Another Message</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
              <textarea
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your opportunity or project..."
              />
            </div>
            <Button variant="primary" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
`
  },
  {
    path: 'styles/globals.css',
    folder: 'styles',
    filename: 'globals.css',
    language: 'css',
    description: 'Global stylesheet importing Tailwind CSS v4 and base custom scrollbars.',
    content: `@import "tailwindcss";

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: #f8fafc;
    color: #0f172a;
  }
}
`
  },
  {
    path: 'tsconfig.json',
    folder: 'root',
    filename: 'tsconfig.json',
    language: 'json',
    description: 'TypeScript compiler configuration for Next.js App Router.',
    content: `{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
`
  },
  {
    path: 'package.json',
    folder: 'root',
    filename: 'package.json',
    language: 'json',
    description: 'Next.js project package configuration file with standard scripts.',
    content: `{
  "name": "vyshnavi-yadav-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000 -H 0.0.0.0",
    "build": "next build",
    "start": "next start -p 3000 -H 0.0.0.0",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.460.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.0.0",
    "@tailwindcss/postcss": "^4.0.0",
    "tailwindcss": "^4.0.0"
  }
}
`
  }
];
