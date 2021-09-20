import React from "react"
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function MuscularHeader() {
    return (
        <>   
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/"> Voltar </Link></li>
                        <li><Link to="/muscular"> CABEÇA </Link></li>
                        <li><Link to="/muscular"> PESCOÇO </Link></li>
                        <li><Link to="/muscular"> TRONCO </Link></li>
                        <li><Link to="/superiores"> SUPERIORES </Link></li>
                        <li><Link to="/muscular"> INFERIORES </Link></li>
                    </ul>
                </nav>        
            </header>
        </>
    )
}