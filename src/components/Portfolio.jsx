import { motion } from 'framer-motion'

const Portfolio = () => {
  const projects = [
    {
      category: 'Computer Vision',
      title: 'Vehicle Tracking & Re-Identification',
      description: 'Advanced AI system for tracking and re-identifying vehicles across multiple junction points using state-of-the-art computer vision algorithms.',
      technologies: 'Object Tracking, Re-ID, Junction Analysis',
      links: [
        { name: 'Presentation', url: 'https://docs.google.com', external: true },
        { name: 'GitHub', url: 'https://github.com', external: true }
      ],
      status: null
    },
    {
      category: 'Pattern Recognition',
      title: 'Vehicle Pattern Recognition',
      description: 'Intelligent pattern recognition system analyzing vehicle behavior and traffic patterns at junction intersections for smart traffic management.',
      technologies: 'Pattern Analysis, Traffic AI, Smart Systems',
      links: [
        { name: 'Presentation', url: 'https://docs.google.com', external: true },
        { name: 'GitHub', url: 'https://github.com', external: true }
      ],
      status: null
    },
    {
      category: 'AI Assistant',
      title: 'DoQ AI Assistant',
      description: 'Intelligent intake assistant powered by advanced AI to streamline data collection and user interaction processes with natural language understanding.',
      technologies: 'NLP, AI Assistant, Automation',
      links: [
        { name: 'Live Product', url: 'https://example.com', external: true }
      ],
      status: null
    },
    {
      category: 'Environmental AI',
      title: 'AQI & Heatwave Forecasting',
      description: 'Advanced environmental forecasting system for tier 2 and 3 cities using Federated Learning, Transfer Learning, and Convolution Multiplication of non-image data for accurate AQI and heatwave predictions.',
      technologies: 'Federated Learning, Transfer Learning, Environmental AI',
      links: [
        { name: 'Live Demo', url: 'https://example.com', external: true }
      ],
      status: null
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
      links: [],
      status: 'MVP Development'
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
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full">
                {/* Category */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-red-700 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 leading-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Technologies:</span> {project.technologies}
                  </p>
                </div>

                {/* Links or Status */}
                <div className="mt-auto">
                  {project.status ? (
                    <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium">
                      <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      {project.status}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-3">
                      {project.links.map((link, linkIndex) => (
                        <motion.a
                          key={linkIndex}
                          href={link.url}
                          target={link.external ? "_blank" : "_self"}
                          rel={link.external ? "noopener noreferrer" : ""}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="inline-flex items-center px-4 py-2 border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-300 rounded-lg text-sm font-medium"
                        >
                          {link.name}
                          {link.external && (
                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          )}
                        </motion.a>
                      ))}
                    </div>
                  )}
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
