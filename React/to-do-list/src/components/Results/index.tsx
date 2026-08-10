import { ResultIndex } from './ResultIndex'
import './styles.css'

export function Results(){
    const tasksList = JSON.parse(localStorage.getItem('tasks-list'))
    if(!tasksList){
        return <p>Nenhuma tarefa registrada</p>
    }

    const tasksListJSX = tasksList.map(task => (
        <ResultIndex key={task.id} description={task.description} datetime={task.datetime} />
    ))
    
    return(
        <div id="results-box">
            {tasksListJSX}
        </div>
    )
}