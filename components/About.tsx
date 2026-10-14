'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Web and software developer with experience building and maintaining institutional
            web platforms, integrating payment systems, and developing mobile applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Professional Summary
            </h3>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Web and software developer at American College of Technology (ACT) since 2023,
                building, maintaining and deploying websites and web-based applications for education,
                recruitment, institutional operations and business services.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Works with HTML/CSS, JavaScript/TypeScript, React/Next.js, PHP/Laravel, Node.js,
                Flutter, React Native and MySQL/MariaDB, and supports Moodle and ERPNext platforms.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                BSc in Information Systems, University of Gondar (2023).
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 mt-10">
              Career Objective
            </h3>
            <div className="bg-primary-50 dark:bg-primary-900/30 p-6 rounded-xl border border-primary-100 dark:border-primary-800">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Seeking a Full-Stack Developer position where I can apply my practical web development
                experience, expand my technical skills and help build and maintain reliable software products.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Personal Information
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span>Location</span>
                  <span className="font-medium text-gray-900 dark:text-white text-right sm:text-left">Addis Ababa, Ethiopia</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span>Phone</span>
                  <span className="font-medium text-gray-900 dark:text-white text-right sm:text-left truncate">+251 900 923 596 / +251 992 027 3743</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span>Email</span>
                  <span className="font-medium text-gray-900 dark:text-white text-right sm:text-left truncate">hailuayaleweshete@gmail.com</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                  <span>Languages</span>
                  <span className="font-medium text-gray-900 dark:text-white text-right sm:text-left">Amharic (Fluent), English (Working proficiency)</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Education
              </h3>
              <div className="space-y-3">
                <div className="border-l-2 border-primary-500 pl-4">
                  <div className="font-medium text-gray-900 dark:text-white">BSc in Information Systems</div>
                  <div className="text-sm text-primary-600 dark:text-primary-400">University of Gondar</div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}