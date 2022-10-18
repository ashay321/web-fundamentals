import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';
import {useStateValue} from './StateProvider';

function TodoList() {
  const [{ todos }, dispatch] = useStateValue();
  
  return (   
    <div>
        {Object.entries(todos).map(([key, value]) => (
          <TodoItem key={key} todo={value} id={key}/>
        ))}
    </div>
  )
}

export default TodoList