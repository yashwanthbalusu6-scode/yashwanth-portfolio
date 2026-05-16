import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nav from './components/Nav'
import NeuralBackground from './components/NeuralBackground'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="min-h-screen relative">
      <NeuralBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
