import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['About', 'Services', 'Portfolio', 'Team']

  // 3D Background Elements
  const backgroundElements = [
    { type: 'circle', size: 'w-3 h-3', delay: 0, duration: 8 },
    { type: 'square', size: 'w-4 h-4', delay: 2, duration: 10 },
    { type: 'triangle', size: 'w-3 h-3', delay: 4, duration: 12 },
    { type: 'circle', size: 'w-2 h-2', delay: 1, duration: 9 },
    { type: 'square', size: 'w-3 h-3', delay: 3, duration: 11 },
    { type: 'triangle', size: 'w-4 h-4', delay: 5, duration: 7 }
  ]

  const renderShape = (type, size) => {
    switch (type) {
      case 'circle':
        return <div className={`${size} bg-red-200/30 rounded-full`} />
      case 'square':
        return <div className={`${size} bg-blue-200/30 rounded-md rotate-45`} />
      case 'triangle':
        return (
          <div className={`${size} bg-purple-200/30`} style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }} />
        )
      default:
        return <div className={`${size} bg-gray-200/30 rounded-full`} />
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {backgroundElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${20 + (index * 15)}%`,
              top: `${10 + (index * 8)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: element.duration,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {renderShape(element.type, element.size)}
          </motion.div>
        ))}
        
        {/* Additional floating elements */}
        <motion.div
          className="absolute right-20 top-8 w-6 h-6 bg-gradient-to-br from-red-300/40 to-pink-300/40 rounded-full"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute left-32 top-12 w-4 h-4 bg-gradient-to-br from-blue-300/40 to-cyan-300/40 rounded-md rotate-45"
          animate={{
            y: [0, 12, 0],
            rotate: [45, 225, 405],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute right-40 top-16 w-3 h-3 bg-gradient-to-br from-purple-300/40 to-indigo-300/40"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
          }}
          animate={{
            y: [0, -8, 0],
            x: [0, 5, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-serif font-bold text-red-700">
              Qreate AI
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-300 rounded-md font-medium"
              onClick={() => window.open('https://calendly.com/qareailabs', '_blank')}
            >
              Get in Touch
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-red-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-700 hover:text-red-700 transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full px-6 py-2 border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-300 rounded-md font-medium"
              onClick={() => window.open('https://calendly.com/qareailabs', '_blank')}
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header
