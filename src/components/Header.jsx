import React from 'react'
import logo from '../assets/logo.gif'

const Header = () => {
  return (
    <>
        <a href="https://github.com/skubichrupki" target="_blank">
            <img src={logo} className="logo react" alt="React logo" />
        </a>
    </>
  )
}

export default Header