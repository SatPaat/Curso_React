import './App.css'

import { useState } from 'react';

import { Link, Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Outlet />
      </div>
  )
}

export default App
