import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const vantaRef = useRef(null)
  const vantaEffect = useRef(null)
  const [vantaStatus, setVantaStatus] = useState('initializing')

  useEffect(() => {
    console.log('Hero component mounted, initializing Vanta effect...')
    console.log('Window object:', window)
    console.log('VANTA object:', window.VANTA)
    
    const initVanta = () => {
      try {
        console.log('Checking if VANTA is available...', !!window.VANTA)
        console.log('VANTA methods:', Object.keys(window.VANTA || {}))
        
        if (window.VANTA && window.VANTA.CLOUDS) {
          console.log('VANTA.CLOUDS found, initializing effect...')
          
          if (vantaRef.current) {
            console.log('vantaRef.current found:', vantaRef.current)
            
            vantaEffect.current = window.VANTA.CLOUDS({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              skyColor: 0xffe6e6,
              cloudColor: 0xfa9da4,
              cloudShadowColor: 0x2a1111,
              speed: 1.0
            })
            
            console.log('Vanta effect initialized successfully!', vantaEffect.current)
            setVantaStatus('active')
          } else {
            console.error('vantaRef.current is null')
            setVantaStatus('error')
          }
        } else {
          console.log('VANTA not available yet, retrying in 100ms...')
          setVantaStatus('retrying')
          setTimeout(initVanta, 100)
        }
      } catch (error) {
        console.error('Error initializing Vanta effect:', error)
        setVantaStatus('error')
      }
    }

    // Start initialization
    initVanta()

    return () => {
      console.log('Cleaning up Vanta effect...')
      if (vantaEffect.current && vantaEffect.current.destroy) {
        vantaEffect.current.destroy()
        vantaEffect.current = null
      }
    }
  }, [])

  const stats = [
    { label: 'AI/ML/Computer Vision', value: 'Advanced algorithms and neural networks' },
    { label: '3,000+', value: 'Projects completed' }
  ]

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Vanta.js Clouds Background */}
      <div 
        ref={vantaRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          zIndex: 0,
          backgroundColor: '#ffe6e6' // Fallback color
        }}
      >
        {/* Debug indicator */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded text-xs">
            Vanta Status: {vantaStatus}
          </div>
        )}
      </div>
      
      {/* Background Wavy Lines */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10" style={{ zIndex: 1 }}>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative" style={{ zIndex: 2 }}>
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
                Too niche. Too bold. Too bad.
                <br />
                <span className="relative">
                  We build it anyway.
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-2 left-0 h-1 bg-red-700 rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, #B22222 0%, #DC2626 100%)'
                    }}
                  />
                </span>
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
