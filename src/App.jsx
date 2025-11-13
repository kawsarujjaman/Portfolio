import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componants/Navbar/Navbar'
import Home from './componants/Home/Home' 
import About from './componants/About/About'
import Experience from './componants/Experience/Experience'
import Projects from './componants/Projects/Projects';
import Footer from './componants/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />  
      <Home />
      <About />
      <Experience /> 
      <Projects />
      <Footer />

    </div>
  )
}

export default App
