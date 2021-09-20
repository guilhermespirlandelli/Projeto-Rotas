import React from "react"
import Title from "../Title/Title"
import MuscularSuperioresCutaneos from "../../Imagens/MuscularSuperioresCutaneos.jpg"

import './Cultaneos.css'
import CultaneosHeader from './CultaneosHeader'

export default function Cultaneos() {
    return (
        <>
            <CultaneosHeader />
            <Title texto="CUTÂNEOS" />
            <div className="cursos">
                <figure>
                    <img id="MuscularSuperioresCutaneos" src={MuscularSuperioresCutaneos} align="center" alt="Muscular Superiores Cutaneos" />
                </figure>
            </div>
        </>
    )
}