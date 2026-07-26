import type { Metadata } from 'next';
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
