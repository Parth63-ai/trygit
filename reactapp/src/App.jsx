import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Sample from './Components/Sample.jsx'
import Navbar from './Components/Navbar.jsx'
import Homepage from './Components/Homepage.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [menu, setMenu] = useState("Sports")
  const [abc, setAbc] = useState("Entertainment")

  return (
    <>
      <Navbar list={menu} />
      <Navbar list={abc} />
      <Sample />
      <Homepage />
    </>
  )
}

export default App
