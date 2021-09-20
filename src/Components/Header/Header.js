import React from "react"
import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <header className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/"> ESQUELÉTICO </Link></li>
                    <li><Link to="/"> ARTICULAR </Link></li>
                    <li><Link to="/muscular"> MUSCULAR </Link></li>
                    <li><Link to="/"> CARDIOVASCULAR </Link></li>
                    <li><Link to="/"> RESPIRATÓRIO </Link></li>                    
                </ul>
            </nav>
        </header>
    )
}