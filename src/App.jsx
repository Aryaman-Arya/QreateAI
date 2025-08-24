import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import TeamBackground from './components/TeamBackground'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Team />
        <TeamBackground />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
