import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "What all services does Qreate AI offer?",
      answer: "Comprehensive AI/ML solutions including Computer Vision, Reinforcement Learning, ETL Pipelining, and Audio/Speech processing. Development stack covers React frontends, FastAPI backends, and cloud deployment on GCP/AWS.",
      accentColor: "blue"
    },
    {
      question: "How long does a typical software development project take?",
      answer: "Simple integrations: 2-4 weeks, comprehensive AI applications: 8-16 weeks. Detailed timelines provided during initial consultation.",
      accentColor: "purple"
    },
    {
      question: "What does the broader process look like?",
      answer: "Three key phases: Ideation (understanding vision and goals), Development (designing and building solution), and Launch (deploying and providing ongoing support). Close collaboration maintained throughout.",
      accentColor: "green"
    },
    {
      question: "What kind of quality assurance do we have? Do we offer maintenance?",
      answer: "Comprehensive testing protocols and quality assurance measures throughout development. Ongoing maintenance and support services provided to ensure optimal performance and technology updates.",
      accentColor: "pink"
    }
  ]

  const getAccentColorClasses = (accentColor) => {
    const colorMap = {
      blue: 'hover:border-blue-500 hover:shadow-blue-100',
      purple: 'hover:border-purple-500 hover:shadow-purple-100',
      green: 'hover:border-green-500 hover:shadow-green-100',
      pink: 'hover:border-pink-500 hover:shadow-pink-100'
    }
    return colorMap[accentColor] || 'hover:border-gray-500 hover:shadow-gray-100'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 opacity-80 backdrop-blur-sm"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            FAQs
          </h2>
        </motion.div>

        {/* FAQ Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-transparent transition-all duration-300 ${getAccentColorClasses(faq.accentColor)}`}>
                {/* Question Row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-2xl"
                >
                  <h3 className="text-xl font-serif font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <svg 
                      className="w-6 h-6 text-gray-600 group-hover:text-red-700 transition-colors duration-200" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                {/* Answer Section */}
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="border-t border-gray-200 pt-6">
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
