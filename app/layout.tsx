import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hailu Ayalew - Full-Stack Developer Portfolio',
  description: 'Portfolio of Hailu Ayalew, Full-Stack Developer at American College of Technology. Expert in React/Next.js, PHP/Laravel, Node.js, Flutter, React Native, and Telebirr payment integration.',
  keywords: ['Full-Stack Developer', 'Web Developer', 'Software Developer', 'React', 'Next.js', 'Laravel', 'Node.js', 'Flutter', 'React Native', 'Telebirr', 'Ethiopia'],
  authors: [{ name: 'Hailu Ayalew' }],
  openGraph: {
    title: 'Hailu Ayalew - Full-Stack Developer',
    description: 'Portfolio of Hailu Ayalew, Full-Stack Developer at American College of Technology',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 dark:bg-slate-900">{children}</body>
    </html>
  )
}