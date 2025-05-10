import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import { assets } from './assets/assets'
import AboutMe from './components/AboutMe'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import CertificationSection from './components/CertificationSection'
import ProjectSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'

function App() {
  useEffect(() => {
    document.body.style.cursor = `url(${assets.cursor}), auto`
  }, [])

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Sections with ID for scrolling */}
      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="certification">
        <CertificationSection />
      </section>

      <section id="projects">
        <ProjectSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
    </div>
  )
}

export default App
