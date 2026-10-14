'use client'

export default function Experience() {
  const experience = {
    title: 'Web Developer / Software Developer',
    company: 'American College of Technology (ACT)',
    location: 'Addis Ababa, Ethiopia',
    period: '2023 – Present',
    description: [
      'Develop, maintain and enhance institutional websites and web-based applications.',
      'Contribute to educational platforms, recruitment systems and business-oriented digital solutions.',
      'Integrate Telebirr payments for school fee and course payments on ACT web platforms (act.edu.et, actacademy.et, actjobs.et, fidelacademy.et).',
      'Implement website features, interface improvements and application functionality based on organizational requirements.',
      'Develop mobile applications using Flutter and React Native.',
      'Support application deployment, website maintenance, debugging and production troubleshooting.',
      'Work with application code, databases, hosting environments and server configuration to support reliable operation.',
      'Support institutional digital services, including online learning platforms and web-based operational systems.',
      'Collaborate with colleagues to deliver and maintain technology solutions for institutional and business processes.',
    ],
  }

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6" />
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800" />
          
          <div className="relative ml-16">
            <div className="relative pb-12">
              <div className="absolute left-[-16px] top-0 w-8 h-8 bg-primary-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg" />
              
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 ml-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                    Current
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                  <span>{experience.location}</span>
                  <span className="mx-1">•</span>
                  <span>{experience.company}</span>
                </div>
                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{experience.period}</span>
                </div>
                
                <ul className="space-y-3">
                  {experience.description.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                      <svg className="w-5 h-5 text-primary-500 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}