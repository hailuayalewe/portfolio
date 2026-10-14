'use client'

export default function Projects() {
  const projects = [
    {
      name: 'ACT Institutional Website',
      url: 'https://act.edu.et',
      description: 'Develop and maintain the institutional website of the American College of Technology, including Telebirr payment integration.',
      tags: ['React/Next.js', 'Telebirr', 'Payment Integration'],
    },
    {
      name: 'ACTAcademy',
      url: 'https://actacademy.et',
      description: 'Contribute to a digital education platform supporting online learning services, including Telebirr payment integration.',
      tags: ['React/Next.js', 'Online Learning', 'Telebirr'],
    },
    {
      name: 'ACT Jobs',
      url: 'https://actjobs.et',
      description: 'Contribute to a job and recruitment platform, including Telebirr payment integration.',
      tags: ['React/Next.js', 'Recruitment', 'Telebirr'],
    },
    {
      name: 'Fidel Academy',
      url: 'https://fidelacademy.edu.et',
      description: 'Work on an educational website and digital learning project, including Telebirr payment integration.',
      tags: ['React/Next.js', 'Education', 'Telebirr'],
    },
    {
      name: 'Tsedal Design',
      url: 'https://tsedaldesign.com',
      description: 'Develop and maintain a business website for a design and fashion-oriented brand, including deployment and troubleshooting.',
      tags: ['React/Next.js', 'Business', 'Deployment'],
    },
    {
      name: 'Website Monitoring System (WMS)',
      url: 'https://wms.act.edu.et',
      description: 'Contribute to a web-based system for website monitoring and operational oversight.',
      tags: ['React/Next.js', 'Monitoring', 'Operations'],
    },
    {
      name: 'Ethiopian Trade Exchange (ETE)',
      url: 'https://ete.actacademy.et',
      description: 'Contribute to a trade-oriented digital platform supporting Ethiopian trade-related activities.',
      tags: ['React/Next.js', 'Trade Platform', 'Digital Services'],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Selected Web Development Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Key projects developed and maintained during my tenure at American College of Technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.name}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20"
                    aria-label={`Visit ${project.name}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}