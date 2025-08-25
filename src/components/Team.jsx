import { motion } from 'framer-motion'

const Team = () => {
  const teamMembers = [
    {
      name: 'Aryaman',
      role: 'Co-Founder & CEO',
      description: 'Leading our vision',
      image: '/founder_images/Aryaman.jpeg',
      linkedin: 'https://www.linkedin.com/in/aryaman-arya/'
    },
    {
      name: 'Harsh',
      role: 'Co-Founder & CTO',
      description: 'Driving our technical innovation',
      image: '/founder_images/Harsh_Pandey.jpeg',
      linkedin: 'https://www.linkedin.com/in/harsh-pandey-27013a202/'
    },
    {
      name: 'Subhanshu',
      role: 'Co-Founder & CPO',
      description: 'Shaping our product strategy',
      image: '/founder_images/Subhanshu_Arya.jpeg',
      linkedin: 'https://www.linkedin.com/in/subhanshu-arya-3a7017186/'
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
    <section id="team" className="py-24 bg-gray-50">
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
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the founders behind Qreate AI
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-6 flex justify-center"
                >
                  <div className="group-hover:from-red-300 group-hover:to-red-400 transition-all duration-300">
                    <img 
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 group-hover:border-red-300 transition-all duration-300"
                    />
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                
                <p className="text-red-700 font-semibold mb-4">
                  {member.role}
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
                
                {/* LinkedIn Button */}
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-10 h-10 text-red-700 hover:text-red-800 transition-all duration-300 mt-4"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team
