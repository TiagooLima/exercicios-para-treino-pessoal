import { useState } from "react"
import { NewTab } from "./NewTab"

export function NewInput(){
    const [newTabActive, setNewTabActive] = useState(false)

    function handleClick(){
        setNewTabActive(prev => !prev)
    }

    return (
        <>
            <button onClick={handleClick}>Nova tarefa</button>
            {newTabActive && <NewTab />}
        </>
    )
}