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
      name: "Learn HTML",
      complete: true,
      id: uuidv4()
    },
    {
      name: "Learn CSS",
      complete: true,
      id: uuidv4()
    },
    {
      name: "Learn Node.JS",
      complete: true,
      id: uuidv4()
    },
    {
      name: "Learn React.JS",
      complete: false,
      id: uuidv4()
    },
    {
      name: "Learn TypeScript",
      complete: false,
      id: uuidv4()
    },
    {
      name: "Learn Next.JS",
      complete: false,
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

  function toggleComplete(changedTodoId) {
    setTodoData( prevTodos => prevTodos.map( todo => {
      return todo.id == changedTodoId ? {...todo, complete: !todo.complete} : todo
    }) )

    console.log(changedTodoId)
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

