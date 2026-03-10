import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import About from './components/About'
// import './App.css

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default App
