import React from "react"
import { Link } from 'react-router-dom'

import '../Header/Header.css'

export default function CultaneosHeader() {
    return (
        <>   
            <header className="menu2">
                <nav className="navMenu2">
                    <ul>
                        <li><Link to="/superiores"> Voltar </Link></li>
                        <li><Link to="/cultaneos"> MEDIAL </Link></li>
                        <li><Link to="/cultaneos"> LATERAL </Link></li>
                        <li><Link to="/cultaneos"> TENDÕES </Link></li>
                        <li><Link to="/cultaneos"> EXTENSOR </Link></li>  
                        <li><Link to="/cultaneos"> ROTADORES </Link></li>                       
                    </ul>
                </nav>        
            </header>
        </>
    )
}