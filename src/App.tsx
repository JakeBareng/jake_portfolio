import './App.css'
import Intro from './components/intro/intro'
import About from './components/about/about'
import MyServices from './components/myServices/myservices'

function App() {
  return (
    <main>
      <Intro/>
      <About/>
      <MyServices/>
      {/* 
      <Projects/>
      <Contact/>
      */}
    </main>
  )
}

export default App
