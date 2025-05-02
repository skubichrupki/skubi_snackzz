import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside>
      <nav className="sidebar-nav">
        <Link to="/">Home</Link>
        <Link to="/music">Music</Link>
      </nav>
    </aside>
  )
}

export default Sidebar