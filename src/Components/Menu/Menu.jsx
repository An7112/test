import React from 'react'
import '../../index.css'
const Menu = () => {
    return (
        <nav className='sidebar'>

            <a className='btn' href='/'>Home</a>

            <a className='btn' href='/Services'>Services</a>

            <a className='btn' href='/News'>News</a>

            <a className='btn' href='/Blog'>Blog</a>

            <a className='btn' href='/Contact'>Contact</a>
        </nav>
    )
}

export default Menu