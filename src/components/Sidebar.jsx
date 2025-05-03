import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
      <nav className="sidebar-nav">
        <Link to="/music">Music</Link>
      </nav>
  )
}

export default Sidebar