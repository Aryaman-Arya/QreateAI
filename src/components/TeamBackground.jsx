import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const TeamBackground = () => {
  const [isHovered, setIsHovered] = useState(false)

  const logos = [
    {
      name: 'National University of Singapore',
      filename: 'National University of Singapore.png',
      theme: 'blue'
    },
    {
      name: 'National Taiwan University',
      filename: 'National Taiwan University.png',
      theme: 'green'
    },
    {
      name: 'IIIT Delhi',
      filename: 'IIIT Delhi.png',
      theme: 'purple'
    },
    {
      name: 'Indian Institute of Science',
      filename: 'Indian Institute of Science.png',
      theme: 'pink'
    },
    {
      name: 'Samsung Research',
      filename: 'Samsung Research.png',
      theme: 'yellow'
    },
    {
      name: 'Hyperverge',
      filename: 'Hyperverge.png',
      theme: 'indigo'
    },
    {
      name: 'University of South Carolina',
      filename: 'University of South Carolina.png',
      theme: 'teal'
    }
  ]

  const getThemeClasses = (theme) => {
    const themeMap = {
      blue: 'hover:border-blue-500 hover:shadow-blue-500/20',
      green: 'hover:border-green-500 hover:shadow-green-500/20',
      purple: 'hover:border-purple-500 hover:shadow-purple-500/20',
      pink: 'hover:border-pink-500 hover:shadow-pink-500/20',
      yellow: 'hover:border-yellow-500 hover:shadow-yellow-500/20',
      indigo: 'hover:border-indigo-500 hover:shadow-indigo-500/20',
      teal: 'hover:border-teal-500 hover:shadow-teal-500/20'
    }
    return themeMap[theme] || 'hover:border-gray-500 hover:shadow-gray-500/20'
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  // Animation variants for individual logo items
  const logoVariants = {
    initial: { 
      scale: 1
    },
    animate: {
      scale: 1,
      transition: {
        duration: 0
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3
      }
    }
  }

  // Floating animation variants for different elements
  const floatingVariants = {
    float1: {
      y: 0,
      transition: {
        duration: 0
      }
    },
    float2: {
      y: 0,
      transition: {
        duration: 0
      }
    },
    float3: {
      y: 0,
      transition: {
        duration: 0
      }
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Team Background
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Our Experience
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto">
            Bringing together expertise from world-class institutions and leading tech companies
          </p>
        </motion.div>

        {/* Single Row Infinite Scroll Logo Carousel */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Single row of logos */}
          <div 
            className={`flex space-x-8 ${isHovered ? 'animate-pause' : 'animate-scroll'}`}
            style={{
              animationDuration: '15s',
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite'
            }}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                variants={logoVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="group cursor-pointer flex-shrink-0 w-96 h-48"
              >
                <motion.div
                  variants={floatingVariants}
                  animate={index % 3 === 0 ? "float1" : index % 3 === 1 ? "float2" : "float3"}
                  className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-transparent transition-all duration-300 h-full flex items-center justify-center ${getThemeClasses(logo.theme)}`}
                >
                  <div className="text-center">
                    <motion.div 
                      className="w-48 h-48 rounded-full flex items-center justify-center mb-0 mx-auto overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img 
                        src={`/team_background_images/${logo.filename}`}
                        alt={logo.name}
                        className="w-full h-full object-contain"
                        style={{
                          filter: 'brightness(0) invert(1)', // Make images white
                          opacity: 0.9
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamBackground
