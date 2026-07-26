'use client';

import React, { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { nextProjectFiles } from '@/data/nextProjectCode';
import { Code2, Copy, Check, Download, Folder, FileText } from 'lucide-react';

export default function CodePage() {
  const [selectedFile, setSelectedFile] = useState(nextProjectFiles[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    const blob = new Blob([selectedFile.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = selectedFile.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      <SectionHeader
        badge="Source Code Inspector"
        title="Next.js App Router Source Files"
        subtitle="Explore clean TypeScript (.tsx) files, layout structures, and dependency definitions for direct local development."
      />

      {/* Main Inspector Layout */}
      <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
        {/* Left Sidebar: File Tree */}
        <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-800 p-4 bg-slate-950/60 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-400">
            <span className="flex items-center gap-2">
              <Folder className="w-4 h-4 text-indigo-400" /> Project File Tree
            </span>
            <span className="text-slate-500">{nextProjectFiles.length} Files</span>
          </div>

          <div className="space-y-1">
            {nextProjectFiles.map((file) => {
              const isSelected = selectedFile.path === file.path;
              return (
                <button
                  key={file.path}
                  onClick={() => setSelectedFile(file)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600/20 text-indigo-300 font-bold border border-indigo-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span className="flex items-center gap-2 font-mono truncate">
                    <FileText className={`w-4 h-4 shrink-0 ${isSelected ? 'text-indigo-400' : 'text-slate-500'}`} />
                    {file.path}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                    {file.language}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Area: Code Viewer */}
        <div className="md:col-span-8 flex flex-col bg-slate-900">
          {/* File Action Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/40">
            <div>
              <p className="text-xs font-mono font-bold text-slate-200">{selectedFile.path}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{selectedFile.description}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Copied' : 'Copy'}
              </button>

              <button
                onClick={handleDownloadFile}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Download
              </button>
            </div>
          </div>

          {/* Code Content Box */}
          <div className="p-6 overflow-x-auto flex-1 font-mono text-xs leading-relaxed text-slate-300 bg-slate-950/80">
            <pre>
              <code>{selectedFile.content}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
