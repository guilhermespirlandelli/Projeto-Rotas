import React from "react"
import Title from "../Title/Title.js"
import HomeAnatomia from "../../Imagens/HomeAnatomia.jpg"

import './Home.css'

export default function Home() {
    return (
        <>
            <Title texto="ANATOMIA HUMANA" />
            <div className="cursos">
                {/* <button id="confirmar">Confirmar</button>
                <button id="salvar" onClick={() => {alert('Clicado')}}>Salvar</button> */}
                <figure>
                    <img id="HomeAnatomia" src={HomeAnatomia} align="center" alt="Home Anatomia" />
                </figure>
            </div>

        </>
    )
}