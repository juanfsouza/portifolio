
import './App.css'
import Navbar from './components/Pages/NavBar'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Conquest from './components/Pages/Conquest'
import Projects from './components/Pages/Projects'
import Contact from './components/Pages/Contact'
import ScrollToTop from './components/ScrollTop'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Conquest />
      <Projects />
      <Contact />
      <ScrollToTop />
    </>
  )
}

export default App
