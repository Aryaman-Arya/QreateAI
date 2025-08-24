import { motion } from 'framer-motion'

const Footer = () => {
  const footerSections = [
    {
      title: 'Company Info',
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Qreate AI is your trusted partner for building cutting-edge AI and LLM-powered software solutions that drive innovation and growth.
          </p>
        </div>
      )
    },
    {
      title: 'Services',
      links: [
        { name: 'AI/ML Services', href: '#services' },
        { name: 'Development Stack', href: '#services' },
        { name: 'Specialized Solutions', href: '#services' },
        { name: 'Computer Vision', href: '#services' },
        { name: 'LLM Fine-tuning', href: '#services' },
        { name: 'Agentic AI', href: '#services' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Team', href: '#team' },
        { name: 'Partnerships', href: '#portfolio' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { name: 'LinkedIn', href: '#' },
        { name: 'Twitter', href: '#' },
        { name: 'GitHub', href: '#' },
        { name: 'Blog', href: '#' }
      ]
    }
  ]

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              
              {section.content ? (
                section.content
              ) : (
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                      >
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 QareAI Labs. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
