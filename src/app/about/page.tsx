import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import { personalInfo, experiences, education } from '@/data/portfolioData';
import { GraduationCap, Briefcase, Award, CheckCircle } from 'lucide-react';

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
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <h3 className="text-2xl font-bold text-slate-900">Background & Academic Profile</h3>
        <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
          {personalInfo.bio}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-100">
          <div>
            <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Degree Program</span>
            <strong className="text-slate-900 font-bold text-base">{education.degree}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Institution</span>
            <strong className="text-slate-900 font-bold text-base">{education.institution}</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-xs uppercase tracking-wider font-semibold">Cumulative GPA</span>
            <strong className="text-indigo-600 font-black text-xl">{education.cgpa}</strong>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
            <Briefcase className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Work & Internship Experience</h3>
        </div>

        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                <p className="text-indigo-600 font-semibold text-sm">{exp.company} • {exp.location}</p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 w-fit">
                {exp.period}
              </span>
            </div>

            <ul className="space-y-2 text-slate-600 text-sm sm:text-base leading-relaxed">
              {exp.description.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education & Coursework */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900">Education & Key Coursework</h3>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div>
            <h4 className="text-lg font-bold text-slate-900">{education.institution}</h4>
            <p className="text-slate-600 text-sm">{education.degree} ({education.period})</p>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Computer Science Subjects</h5>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course, idx) => (
                <span key={idx} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800">
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Highlights</h5>
            <ul className="space-y-2 text-sm text-slate-600">
              {education.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
