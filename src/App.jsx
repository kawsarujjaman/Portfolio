import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componants/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />  
    </div>
  )
}

export default App
