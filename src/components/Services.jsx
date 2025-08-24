import { motion } from 'framer-motion'

const Services = () => {
  const serviceCategories = [
    {
      title: 'AI/ML Services',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      services: [
        {
          title: 'LLM Fine-tuning',
          description: 'Custom model training for specific domains and use cases'
        },
        {
          title: 'Computer Vision',
          description: 'Object detection, image classification, and visual AI solutions'
        },
        {
          title: 'NLP & Text Processing',
          description: 'Sentiment analysis, text generation, and language understanding'
        },
        {
          title: 'Audio/Speech AI',
          description: 'Speech recognition, synthesis, and audio processing'
        }
      ]
    },
    {
      title: 'Development Stack',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      services: [
        {
          title: 'Frontend',
          description: 'React, JSX with Vite, Modern UI/UX'
        },
        {
          title: 'Backend & API',
          description: 'FastAPI, Python, JavaScript, RESTful APIs'
        },
        {
          title: 'Database',
          description: 'Firebase, Redis, Data management'
        },
        {
          title: 'Cloud & Deployment',
          description: 'GCP, AWS, Netlify, Render'
        }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      services: [
        {
          title: 'Agentic AI',
          description: 'Complete agentic workflow from n8n to prompt chaining'
        },
        {
          title: 'Data Analytics',
          description: 'ETL pipelines, data visualization, and insights'
        },
        {
          title: 'Automation',
          description: 'Workflow automation and process optimization'
        },
        {
          title: 'Custom AI Models',
          description: 'Tailored AI solutions for specific business needs'
        }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="services" className="py-24 bg-white">
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
            Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            What We Offer
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto">
            From AI/ML solutions to full-stack development - comprehensive services for modern applications
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category, index) => (
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
                {/* Category Icon */}
                <div className="text-red-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>

                {/* Category Title */}
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  {category.title}
                </h3>

                {/* Individual Services */}
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border-l-2 border-gray-200 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
