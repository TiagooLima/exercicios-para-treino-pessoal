
export function ResultEdit(){
    const handleSubmit = e => {

        e.preventDefault()

        const arrayLocalStorage = JSON.parse(localStorage.getItem('tasks-list'))
        const descriptionSearch = e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling
        console.log(descriptionSearch)

        const form = document.getElementById('edit-task-form')
        const data = new FormData(form)
        const description = data.get('description')
        const datetime = data.get('datetime')

        for(let contador = 0; contador<arrayLocalStorage.length; contador++){
            if(arrayLocalStorage[contador].description.includes(descriptionSearch.textContent)){
                arrayLocalStorage[contador].description = description
                arrayLocalStorage[contador].datetime = datetime
                break
            }
        }
        
        localStorage.setItem('tasks-list', JSON.stringify(arrayLocalStorage))
        window.location.reload() 
    }

    return(
        <form action="" id="edit-task-form" onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td><label htmlFor="">Descrição: </label></td>
                    <td><input type="text" className="inputs" name="description"/></td>
                </tr>
                
                <tr>
                    <td><label htmlFor="">Data: </label></td>
                    <td><input type="datetime" className="inputs" name="datetime"/></td>
                </tr>
                
            </table>
            <button type="submit" style={{marginLeft: '40px'}}>Enviar</button>
        </form>
    )
}