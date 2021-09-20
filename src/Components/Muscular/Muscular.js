import React from "react"
import Title from "../Title/Title"
import MuscularFoto from "../../Imagens/Muscular.jpg"

import './Muscular.css'
import MuscularHeader from './MuscularHeader'

export default function Muscular() {
    return (
        <>
            <MuscularHeader />
            <Title texto="MUSCULAR" />
            <div className="cursos">
                <figure>
                    <img id="MuscularFoto" src={MuscularFoto} align="center" alt="MuscularFoto" />
                </figure>
            </div>
        </>
    )
}