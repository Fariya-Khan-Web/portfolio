import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Banner/>
    <AboutMe/>
    <Skills/>
    <Footer/>
    </>
  )
}

export default App
