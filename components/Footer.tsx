'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Hailu Ayalew</h3>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Developer | Web Developer | Software Developer
              based in Addis Ababa, Ethiopia. Building reliable web applications
              and digital solutions since 2023.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-primary-400 transition-colors">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-primary-400 transition-colors">About</a>
              <a href="#experience" className="block text-gray-400 hover:text-primary-400 transition-colors">Experience</a>
              <a href="#projects" className="block text-gray-400 hover:text-primary-400 transition-colors">Projects</a>
              <a href="#skills" className="block text-gray-400 hover:text-primary-400 transition-colors">Skills</a>
              <a href="#contact" className="block text-gray-400 hover:text-primary-400 transition-colors">Contact</a>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="space-y-2">
              <a href="mailto:hailuayaleweshete@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
              <a href="tel:+251900923596" className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Phone
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Hailu Ayalew. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}