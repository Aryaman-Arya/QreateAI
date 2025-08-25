import { motion } from 'framer-motion'

const Portfolio = () => {
  const projects = [
    {
      category: 'Computer Vision',
      title: 'Vehicle Tracking & Re-Identification',
      description: 'Advanced AI system for tracking and re-identifying vehicles across multiple junction points using state-of-the-art computer vision algorithms.',
      technologies: 'Object Tracking, Re-ID, Junction Analysis',
      links: [
        { name: 'Presentation', url: 'https://docs.google.com/presentation/d/1BIQGH3oxoDyldU-Rh_-rGFmZJGT9XjVRAB3KPWh63IA/edit?usp=sharing', external: true },
        { name: 'GitHub', url: 'https://github.com/harshp77/Phase-1-The-Bengaluru-Mobility-Challenge-2024', external: true }
      ],
      status: null,
      videoUrl: '/Project_video_files/1.mp4'
    },
    {
      category: 'Pattern Recognition',
      title: 'Vehicle Pattern Recognition',
      description: 'Intelligent pattern recognition system analyzing vehicle behavior and traffic patterns at junction intersections for smart traffic management.',
      technologies: 'Pattern Analysis, Traffic AI, Smart Systems',
      links: [
        { name: 'Presentation', url: 'https://docs.google.com/presentation/d/1NW70dMrwo3I1b9Mvd3uoLGFgT67USRUboYVCpbX9MJY/edit?usp=sharing', external: true },
        { name: 'GitHub', url: 'https://github.com/harshp77/Phase-2-The-Bengaluru-Mobility-Challenge-2024', external: true }
      ],
      status: null,
      videoUrl: '/Project_video_files/2.mp4'
    },
    {
      category: 'AI Assistant',
      title: 'DoQ AI Assistant',
      description: 'Intelligent intake assistant powered by advanced AI to streamline data collection and user interaction processes with natural language understanding.',
      technologies: 'NLP, AI Assistant, Automation',
      links: [
        { name: 'Live Product', url: 'https://qareai.in', external: true }
      ],
      status: null,
      videoUrl: '/Project_video_files/3.mp4'
    },
    {
      category: 'Environmental AI',
      title: 'AQI & Heatwave Forecasting',
      description: 'Advanced environmental forecasting system for tier 2 and 3 cities using Federated Learning, Transfer Learning, and Convolution Multiplication of non-image data for accurate AQI and heatwave predictions.',
      technologies: 'Federated Learning, Transfer Learning, Environmental AI',
      links: [
        { name: 'Live Demo', url: 'https://aqiheatwave.netlify.app/', external: true }
      ],
      status: null,
      videoUrl: '/Project_video_files/4.mp4'
    },
    {
      category: 'Supply Chain AI',
      title: 'Supply Chain Optimization',
      description: 'Advanced supply chain redistribution optimization using Deep Deterministic Policy Gradient (DDPG) Reinforcement Learning for intelligent logistics and resource allocation.',
      technologies: 'DDPG, Reinforcement Learning, Supply Chain',
      links: [],
      status: 'Confidential Project'
    },
    {
      category: 'Quantum AI',
      title: 'Quantum Neural Networks',
      description: 'True Random modeling comparing Quantum-initialized Bayesian Neural Networks with Probabilistic Neural Networks for semantic segmentation against noise.',
      technologies: 'Quantum ML, Bayesian NN, Segmentation',
      links: [],
      status: 'Confidential Project'
    },
    {
      category: 'AI + Audio Content',
      title: 'Lobo AI – Personalized Podcast MVP',
      description: 'AI-powered personalized podcast platform for stock market investors. Users select stocks (up to 20) and receive daily audio briefings with news, summaries, and voice conversion, accessible via a clean web interface.',
      technologies: 'Web Frontend, Backend Automation, Database, News Aggregation, NLP, Generative AI, Text-to-Speech, Cloud Hosting',
      links: [
        { name: 'Live Product', url: 'https://joinlobo.com', external: true }
      ],
      status: null
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Project Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Our AI Solutions in Action
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            Showcasing cutting-edge AI applications across computer vision, environmental forecasting, supply chain optimization, and intelligent systems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-50 hover:shadow-2xl hover:border-red-100 transition-all duration-500 h-full group-hover:scale-[1.02] flex flex-col">
                {/* Video or Placeholder */}
                {project.videoUrl ? (
                  <div className="relative h-56 bg-gradient-to-br from-gray-900 to-gray-700 overflow-hidden">
                    <video
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {/* Enhanced overlay with better gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>

                    {/* Category badge on video */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-red-700 shadow-lg">
                        {project.category}
                      </span>
                    </div>

                    {/* Play indicator */}
                    <div className="absolute bottom-4 right-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-56 bg-gradient-to-br from-red-500 via-red-600 to-red-700 overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse"></div>
                    </div>

                    <div className="relative z-10 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl">
                          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                        </div>
                        <p className="text-white font-semibold text-sm tracking-wide">{project.category}</p>
                        <p className="text-white/80 text-xs mt-1">Coming Soon</p>
                      </div>
                    </div>

                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  {/* Category for non-video cards only */}
                  {!project.videoUrl && (
                    <div className="mb-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 text-red-700 border border-red-100">
                        {project.category}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 leading-tight group-hover:text-red-700 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm flex-grow min-h-[4rem]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links or Status */}
                  <div className="pt-4 border-t border-gray-100">
                    {project.status ? (
                      <div className="inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-xl text-sm font-medium shadow-sm">
                        <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        {project.status}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {project.links.map((link, linkIndex) => (
                          <motion.a
                            key={linkIndex}
                            href={link.url}
                            target={link.external ? "_blank" : "_self"}
                            rel={link.external ? "noopener noreferrer" : ""}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className={`inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md ${
                              linkIndex === 0
                                ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
                                : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-red-200 hover:bg-red-50 hover:text-red-700'
                            }`}
                          >
                            {link.name}
                            {link.external && (
                              <svg className="w-3.5 h-3.5 ml-2 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            )}
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
