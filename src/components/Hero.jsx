import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const TypewriterText = ({ text, className, delay = 0, speed = 80 }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [currentIndex, text, speed])

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setCurrentIndex(0)
      setDisplayText('')
    }, delay * 1000)

    return () => clearTimeout(startTimer)
  }, [delay])

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-1 h-12 bg-current ml-1"
      />
    </span>
  )
}

const Hero = () => {
  const stats = [
    { label: 'Vision. Language. Intelligence.', value: 'Solving problems across modalities.' },
    { label: '10+ Projects/Partnerships', value: 'From early-stage startups to enterprises globally' }
  ]

  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)
  const [vantaStatus, setVantaStatus] = useState('initializing')
 
  useEffect(() => {
    console.log('Hero component mounted, initializing Vanta birds effect...')
    console.log('Window object:', window)
    console.log('VANTA object:', window.VANTA)
    
    const loadVanta = () => {
      try {
        console.log('Attempting to load Vanta birds effect...')
        
        if (window.VANTA && window.VANTA.BIRDS) {
          console.log('VANTA.BIRDS found, initializing effect...')
          
          if (vantaRef.current) {
            console.log('vantaRef.current found:', vantaRef.current)
            
            const effect = window.VANTA.BIRDS({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              backgroundColor: 0xffffff
            })
            
            console.log('Vanta birds effect initialized successfully!', effect)
            setVantaEffect(effect)
            setVantaStatus('active')
          } else {
            console.error('vantaRef.current is null')
            setVantaStatus('error')
          }
        } else {
          console.log('VANTA.BIRDS not available yet, retrying in 500ms...')
          console.log('Available VANTA methods:', Object.keys(window.VANTA || {}))
          setVantaStatus('retrying')
          setTimeout(loadVanta, 500)
        }
      } catch (error) {
        console.error("Failed to load Vanta.js birds effect:", error)
        setVantaStatus('error')
      }
    }
    
    // Wait a bit longer for scripts to load
    const initTimer = setTimeout(() => {
      loadVanta()
    }, 1000)

    return () => {
      clearTimeout(initTimer)
      console.log('Cleaning up Vanta birds effect...')
      if (vantaEffect) {
        vantaEffect.destroy()
      }
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Vanta.js Birds Background */}
      <div 
        ref={vantaRef} 
        className="absolute inset-0 w-full h-full"
        style={{ 
          zIndex: -1,
          backgroundColor: '#ffffff' // Fallback white background
        }}
      >
        {/* Debug indicator */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs z-10">
            Vanta Birds Status: {vantaStatus}
          </div>
        )}
      </div>
      
      {/* Background Wavy Lines */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-5" style={{ zIndex: 0 }}>
        <svg className="w-full h-full" viewBox="0 0 400 800" fill="none">
          <path
            d="M400 0C300 100 200 200 300 300C400 400 300 500 200 600C100 700 0 800 100 800"
            stroke="#B22222"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M350 100C250 200 150 300 250 400C350 500 250 600 150 700"
            stroke="#B22222"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative" style={{ zIndex: 1 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-gray-900 leading-tight"
              >
                <div className="relative">
                  <TypewriterText 
                    text="Too niche. Too bold. Too bad. We build it anyway." 
                    delay={0.4}
                    speed={80}
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 3.5 }}
                    className="absolute bottom-2 left-0 h-1 bg-red-700 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #B22222 0%, #DC2626 100%)'
                    }}
                  />
                </div>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Your trusted partner for building cutting-edge AI and LLM-powered software solutions
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-700 text-white text-lg font-semibold rounded-lg hover:bg-red-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://calendly.com/qareailabs', '_blank')}
              >
                Start Your Project
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                className="text-center lg:text-right"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-lg text-gray-600 font-medium">
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
