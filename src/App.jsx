import './global.css'
import style from './App.module.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TodoForm } from './components/TodoForm'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'



function App() {
  
  const [todoData, setTodoData] = useState([
    {
      name: "Regar as plantas",
      complete: false,
      id: uuidv4()
    },
    {
      name: "Tomar 2 litros de água",
      complete: false,
      id: uuidv4()
    },
    {
      name: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
      complete: true,
      id: uuidv4()
    },
    {
      name: "Comprar frango",
      complete: true,
      id: uuidv4()
    },
    {
      name: "Verificar meus emails",
      complete: true,
      id: uuidv4()
    },
    
  ])

  function deleteTodo(todoToDelete) {
    const todoListWithoutDeletedOne = todoData.filter(todo => todo.id != todoToDelete)
    setTodoData(todoListWithoutDeletedOne)
  }

  function createTodo(newTodo) {
    setTodoData([
      ...todoData,
      {
        name: newTodo,
        complete: false,
        id: uuidv4()
      }
    ])
  }

  function toggleComplete(todoId) {
    setTodoData([
      ...todoData,
      todoData.find(todo => todo.id === todoId).complete = true
    ])
  }
  
  return (
    <div>
      <Header/>
      <div className={style.wrapper}>
        
        <TodoForm 
          onCreate={createTodo}
        />

        <TodoList 
          todoData={todoData}
          onDelete={deleteTodo}
          onToggle={toggleComplete}
        />

      </div>
    </div>
  )
}

export default App

