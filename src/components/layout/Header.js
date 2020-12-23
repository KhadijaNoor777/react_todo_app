import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
       <header style={hStyle}>
           <h1>TodoList</h1>
           <Link to='/' style={linkStyle} >Home</Link> | 
           <Link to='/about' style={linkStyle} > About</Link>
       </header>
    )
}

const hStyle = {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}


export default Header;

