import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
    return (
        <div>
            <nav className="navbar p-0">
                <Link to="/" style={{textDecoration: 'none' }}>
                    <span className="logo">Sock Drive</span>
                </Link>
                <span className="logo ml-0 mr-0"></span>
                <div className="navbar-links">
                    <ul>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
