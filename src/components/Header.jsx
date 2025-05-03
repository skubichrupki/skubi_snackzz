import React from 'react'
import logo from '../assets/logo.gif'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <Link to="/">
            <img src={logo} className="logo react" alt="React logo" />
        </Link>
    </>
  )
}

export default Header