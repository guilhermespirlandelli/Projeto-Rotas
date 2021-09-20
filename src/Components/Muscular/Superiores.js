import React from "react"
import Title from "../Title/Title"
import MuscularSuperiores from "../../Imagens/MuscularSuperiores.jpg"

import './Superiores.css'
import SuperioresHeader from './SuperioresHeader'

export default function Superiores() {
    return (
        <>
            <SuperioresHeader />
            <Title texto="SUPERIORES" />
            <div className="cursos">
                <figure>
                    <img id="MuscularSuperiores" src={MuscularSuperiores} align="center" alt="Muscular Superiores" />
                </figure>
            </div>
        </>
    )
}