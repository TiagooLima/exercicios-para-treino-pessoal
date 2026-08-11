import { useState } from "react"
import { frasesMotivacionais } from "../../data/frases"
import { FancyText } from "../FancyText"
import './style.css'
import { coresInspiracionais } from "../../data/cores"

export function Inspiration({children}: React.PropsWithChildren){
    const frases = frasesMotivacionais
    const cores = coresInspiracionais
    const [number, setNumber] = useState(0)
    const [corSimCorNao, setCorSimCorNao] = useState(false)

    const handleClickPhrase = () => {
        if(number>=(frases.length-1)){
            setNumber(0)
            setCorSimCorNao(true)
            return
        }

        setCorSimCorNao(true)

        setNumber(number + 0.5)
    }

    const handleClickColor = () => {
        if(number>=cores.length-1){
            setNumber(0)
            setCorSimCorNao(false)
            return
        }

        setCorSimCorNao(false)

        setNumber(number + 0.5)
    }

    return corSimCorNao ? (
    <>
        <p>Sua cor inspiracional é</p>
        <div id="color-div" style={{ backgroundColor: cores[Math.floor(number)].color }}></div>
        <button onClick={handleClickColor}>{children}</button>
    </>
    ) : (
    <>
        <p>Sua frase inspiracional é</p>
        <FancyText text={frases[Math.floor(number)].text} />
        <button onClick={handleClickPhrase}>{children}</button>
    </>
    );
}