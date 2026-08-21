import { useState } from 'react'
import { InputPage } from './InputPage'
import './style.css'

export function NewInput(){
    const [inputPage, setInputPage] = useState(false)

    const handleClick = () => {
        setInputPage(prev => !prev)
    }

    return(
        <>
            <button className='newInputButton' onClick={handleClick}>Nova Tarefa +</button>
            {inputPage && <InputPage setInputPage={setInputPage} />}
        </>
    )
}