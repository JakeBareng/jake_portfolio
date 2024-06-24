import './App.css'
import Intro from './components/intro/intro'
import About from './components/about/about'
import TechStack from './components/techstack/techstack'

function App() {
  return (
    <main>
      <Intro/>
      <About/>
      <TechStack/>
      {/* 
      <Projects/>
      <Contact/>
      */}
    </main>
  )
}

export default App
