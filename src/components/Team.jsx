import { motion } from 'framer-motion'

const Team = () => {
  const teamMembers = [
    {
      name: 'Aryaman',
      role: 'Co-Founder & CEO',
      description: 'Leading our vision and strategic direction',
      image: '/founder_images/Aryaman.jpeg'
    },
    {
      name: 'Harsh',
      role: 'Co-Founder & CTO',
      description: 'Driving our technical innovation',
      image: '/founder_images/Harsh Pandey.jpeg'
    },
    {
      name: 'Subhanshu',
      role: 'Co-Founder & CPO',
      description: 'Shaping our product strategy',
      image: '/founder_images/Subhanshu Arya.jpeg'
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Team
