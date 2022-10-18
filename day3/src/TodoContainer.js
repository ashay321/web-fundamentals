import React, { useEffect } from 'react'
import AddTodo from './AddTodo'
import './TodoContainer.css'
import TodoList from './TodoList'

function TodoContainer() {

  return (
    <div className="app-body">
      <div className='todo-container'>
        
        <div className="todo-container-header-main">
          <div className="todo-container-header-title">
            Tasks
          </div>

          {/* Create new User Button*/}
          <AddTodo />
        </div>
        
        {/* Todo List Display */}
        <TodoList />

      </div>
    </div>
  )
}

export default TodoContainer