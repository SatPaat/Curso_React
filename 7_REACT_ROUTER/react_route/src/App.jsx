import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Outlet } from 'react-router-dom'

// 5 - Link entre paginas 
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <p>Footer</p>
    </div>
  )
}

export default App
