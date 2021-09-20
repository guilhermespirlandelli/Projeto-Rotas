import React from "react"
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function SuperioresHeader() {
    return (
        <>   
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/muscular"> Voltar </Link></li>
                        <li><Link to="/superiores"> BÍCEPS </Link></li>
                        <li><Link to="/superiores"> TRICEPIS </Link></li>
                        <li><Link to="/cultaneos"> CUTÂNEOS </Link></li>
                        <li><Link to="/superiores"> PROFUNDOS </Link></li>                        
                    </ul>
                </nav>        
            </header>
        </>
    )
}