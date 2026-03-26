import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Sutorium — AI-powered Audience Intelligence',
  description: 'Turn your audience comments into actionable insights with Sutorium.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="font-sans antialiased bg-[#0A0E1A] text-slate-200" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
