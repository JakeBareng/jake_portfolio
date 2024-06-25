import './App.css'
import Intro from './components/intro/intro'
import About from './components/about/about'
import MyServices from './components/myServices/myservices'
import Contact from './components/contact/contact'

function App() {
  return (
    <main>
      <Intro/>
      <About/>
      <MyServices/>
      
      {/* <Projects/> */}
      <Contact/>
     
    </main>
  )
}

export default App
