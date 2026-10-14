'use client'

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />
            
            <div className="relative lg:ml-16">
              <div className="relative pb-12 last:pb-0">
                <div className="hidden lg:block absolute left-[-16px] top-0 w-8 h-8 bg-primary-600 rounded-full border-4 border-white dark:border-slate-900 shadow-lg" />
                
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 lg:ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">BSc in Information Systems</h3>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                      2023
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>University of Gondar</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Completed Bachelor of Science in Information Systems with focus on software development,
                    database systems, and web technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-primary-50 dark:bg-primary-900/30 p-6 rounded-xl border border-primary-100 dark:border-primary-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Languages
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg">
                <span className="font-medium text-gray-900 dark:text-white">Amharic</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                  Fluent
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-lg">
                <span className="font-medium text-gray-900 dark:text-white">English</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                  Working Proficiency
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Current Role
            </h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p className="font-medium text-gray-900 dark:text-white">Web Developer / Software Developer</p>
              <p>American College of Technology (ACT)</p>
              <p>2023 – Present</p>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}