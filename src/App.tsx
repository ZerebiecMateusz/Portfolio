import './App.css'
import SpotlightCard from './components/SpotlightCard'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Header from './components/Header'

function App() {

  return (
    <div className="main-container">
      <Header />
      <SpotlightCard /> {/* id="home" */}
      <AboutMe />       {/* id="about" */}
      <Projects />      {/* id="projects" */}
      {/* kolejne sekcje */}
    </div>
  )
}

export default App
