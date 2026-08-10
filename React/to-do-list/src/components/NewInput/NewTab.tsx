import './styles.css'

export function NewTab(){
    function handleSubmit(e){
        e.preventDefault()

        const form = document.getElementById('new-task-form')
        const data = new FormData(form)

        const description = data.get('description')
        const datetime = data.get('datetime')

        const arrayReservado = localStorage.getItem('tasks-list') ? JSON.parse(localStorage.getItem('tasks-list')) : [];

        const newTask = {
            id: arrayReservado.length,
            description: description,
            datetime: datetime
        }

        arrayReservado.push(newTask)
        localStorage.setItem('tasks-list', JSON.stringify(arrayReservado))
        
        window.location.reload()
    }

    return(
        <div id="new-task">
            <h1>Nova tarefa</h1>
            <form action="" id="new-task-form" onSubmit={handleSubmit}>
                <label htmlFor="description">Descrição: </label>
                <input type="text" name="description" id='description' maxLength={20}/>
                <label htmlFor="datetime">Data: </label>
                <input type="datetime" name="datetime" id='datetime'/>
                <button type="submit">Enviar</button>
            </form>
        </div>
        
    )
}