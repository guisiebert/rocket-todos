import style from './TodoForm.module.css'
import plus from '../assets/plus-icon.svg'
import { useState } from 'react'



export function TodoForm({onCreate}) {

    const [newTodo, setNewTodo] = useState('')

    function handleChange() {
        setNewTodo(event.target.value)
    }

    function handleCreate() {
        event.preventDefault()
        onCreate(newTodo)
        setNewTodo('')
    }

    return (
        <form className={style.form}>
            <input
                placeholder="Adicione uma nova tarefa"
                name='newTodo'
                value={newTodo}
                onChange={handleChange}
            />
                
            <button
                onClick={handleCreate}
            >
                Criar
                <img src={plus} />
            </button>
        </form>
    )
}