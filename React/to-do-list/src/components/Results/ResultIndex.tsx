import { useState } from "react"
import { ResultEdit } from "./ResultEdit"

export function ResultIndex({description, datetime}){
    const [checked, setChecked] = useState(false) // Se item ta marcado
    const [editPhase, setEditPhase] = useState(false)

    // puxar o array do localstorage -> procurar com um for o indice do array que é o objeto -> deletar -> inserir no localstorage dnv
    function handleDelete(e){
        const arrayLocalStorage = JSON.parse(localStorage.getItem('tasks-list'))
        const divPai = e.target.parentElement.parentElement
        const descriptionSearch = divPai.querySelector('.description-index').textContent
        for(let contador = 0; contador<arrayLocalStorage.length; contador++){
            if(arrayLocalStorage[contador].description.includes(descriptionSearch)){
                arrayLocalStorage.splice(contador, 1)
                break
            }
        }
        
        localStorage.setItem('tasks-list', JSON.stringify(arrayLocalStorage))
       window.location.reload() 
    }

    //puxar o array do localstorage -> procurar com um for o indice do array que é o objeto -> editar as variaveis -> inserir no localstorage dnv

    return(
        <div className="result">
            <input type="checkbox" onChange={() => {setChecked(prev => !prev)}} />
            <h3 className="description-index">{checked ? <del>{description}</del> : description}</h3>
            <p>{datetime}</p>
            {editPhase && <ResultEdit/>}
            <div>
                <button onClick={handleDelete} >Deletar</button>
                <button onClick={() => {setEditPhase(prev => !prev)}}>Editar</button>
            </div>
        </div>
    )
}