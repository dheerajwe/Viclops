import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Framework from './components/Framework'
import About from './components/About'
import Services from './components/Services'
import Differentiators from './components/Differentiators'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Framework />
        <About />
        <Services />
        <Differentiators />
        <Process />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
