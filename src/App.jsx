import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import './App.css'
import Home from './pages/Home'
import Music from './pages/Music'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

    <div className='Container'>
      <Header />
      <div className='Content'>
        <Sidebar />
        <div className='PageContent'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  )
}

export default App
