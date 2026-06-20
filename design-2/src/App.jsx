import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Framework from './components/Framework'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Framework />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
