import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sample from './Components/Sample.jsx'
import Navbar from './Components/Navbar.jsx'
import Homepage from './Components/Homepage.jsx'
import Contact from './Components/Contact.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [menu, setMenu] = useState("Sports")
  const [abc, setAbc] = useState("Entertainment")

  return (
    <>
     <Routes>
        
        <Route path="/" element={<><Navbar list={menu} /><Homepage /></>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sample" element={<><Sample /></>} />
      </Routes>
      
    </>
  )
}

export default App
