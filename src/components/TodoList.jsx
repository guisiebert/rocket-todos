import style from './TodoList.module.css'
import {TodoItem} from './TodoItem.jsx'

export function TodoList({todoData, onDelete, onToggle}) {

    const countAllTodos = todoData.length
    const completeTodos = todoData.filter(item => item.complete == true)
    const countCompleteTodos = completeTodos.length

    return (
        <div>
            <header className={style.statusBar}>
                <strong className={style.tasksCreated}>Tarefas criadas</strong>
                <span className={style.createdNumber}>{countAllTodos}</span>
                <strong className={style.tasksComplete}>Concluídas</strong>
                <span className={style.completeNumber}>{countCompleteTodos} de {countAllTodos}</span>
            </header>

            <div className={style.list}>
                {todoData.map( item => <TodoItem 
                    todoName={item.name} 
                    complete={item.complete}
                    id={item.id}
                    key={item.id} 
                    onDelete={onDelete}
                    onToggle={onToggle}
                /> )}
            </div>
        </div>
    )
}
