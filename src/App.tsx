import './App.css'
import Intro from './components/intro/intro'
import About from './components/about/about'
import MyServices from './components/myServices/myservices'
import TechStack from './components/techstack/techstack'
import Navbar from './components/navbar/navbar'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'

function App() {
  return (
    <main>
      <Navbar/>
      <Intro/>
      <About/>
      <TechStack/> 
      <MyServices/>
      <Projects/>
      <Contact/> 
    </main>
  )
}

export default App
