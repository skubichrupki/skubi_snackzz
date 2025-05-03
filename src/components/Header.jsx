import React from 'react'
import logo from '../assets/logo.gif'

const Header = () => {
  return (
    <>
        <a href="https://github.com/skubichrupki" target="_blank" title='my github'>
            <img src={logo} className="logo react tooltip" alt="React logo" />
        </a>
    </>
  )
}

export default Header