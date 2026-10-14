'use client'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              <span className="mr-2">🇪🇹</span>
              Based in Addis Ababa, Ethiopia
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Hailu Ayalew
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <span className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                Full-Stack Developer
              </span>
              <span className="text-primary-600 dark:text-primary-400">|</span>
              <span className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                Web Developer
              </span>
              <span className="text-primary-600 dark:text-primary-400">|</span>
              <span className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                Software Developer
              </span>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Web and software developer at American College of Technology (ACT) since 2023,
              building, maintaining and deploying websites and web-based applications for education,
              recruitment, institutional operations and business services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/25"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              >
                View Projects
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hailuayaleweshete@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+251 900 923 596</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/30 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400">2023</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Since</div>
                </div>
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/30 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400">4+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/30 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400">8</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Platforms</div>
                </div>
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/30 rounded-xl">
                  <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}