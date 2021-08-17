import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <nav className="navbar p-0">
                <Link to="/" style={{textDecoration: 'none' }}>
                    <span className="logo">Sock Drive</span>
                </Link>
                <div className="navbar-links">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                        <li>
                            <Link to="/stats">Stats</Link>
                        </li>
                        <li>
                            <Link to="/info">Info</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
