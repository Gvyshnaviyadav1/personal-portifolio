import type { Metadata } from 'next';
import Link from 'next/link';
import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import SectionHeader from '@/components/SectionHeader';
import { featuredProjects, personalInfo, skillGroups } from '@/data/portfolioData';
import { ArrowRight, Terminal, Cpu, Cloud, CheckCircle2, FileCode } from 'lucide-react';

export const metadata: Metadata = {
  title: 'G. Vyshnavi Yadav',
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
          Hi, I&apos;m <strong className="text-slate-900">{personalInfo.name}</strong>. Fourth-year Computer Science undergraduate at IIT Goa passionate about full-stack development, DevOps. Experienced in building production-ready web applications with React, Django, PostgreSQL, Docker, and Jenkins, with a strong interest in scalable software systems
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link href="/projects">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              View All Projects <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Get In Touch
            </Button>
          </Link>

        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center space-y-2 shadow-2xs">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3">
            <Cpu className="w-6 h-6" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">8.26 / 10</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">CGPA @ IIT Goa CSE</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center space-y-2 shadow-2xs">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
            <Cloud className="w-6 h-6" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">3hrs ➔ 30s</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Jenkins Build Optimization</p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center space-y-2 shadow-2xs">
          <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mx-auto mb-3">
            <Terminal className="w-6 h-6" />
          </div>
          <p className="text-3xl font-extrabold text-slate-900">2+ Major</p>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Full Stack & Systems Projects</p>
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

        <div className="text-center pt-4">
          <Link href="/projects">
            <Button variant="outline" size="md">
              View All Portfolio Projects <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="space-y-10 max-w-5xl mx-auto">
        <SectionHeader
          badge="Technical Toolkit"
          title="Core Skills & Technologies"
          subtitle="Proficient in modern full-stack development tools, containerization, and cloud deployment engines."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-2xs">
              <h3 className="font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      {skill.name}
                    </span>

                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
