import React from 'react'
import { useSelector } from 'react-redux'
function List() {
    const {todos} = useSelector((state) =>state.todos);
    return (
        <>
          {
            todos.map((todo)=>
                (
                <h1 key={todo.id}>{todo.text}</h1>
            )
              
            )
        }
        <h1></h1>
        </>
      
    )
}

export default List
