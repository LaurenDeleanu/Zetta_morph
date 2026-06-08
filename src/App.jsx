import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solution from './components/Solution'
import Features from './components/Features'
import UseCases from './components/UseCases'
import ROI from './components/ROI'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <Navbar />
      <Hero openModal={openModal} />
      <Solution />
      <Features />
      <UseCases />
      <ROI openModal={openModal} />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default App
