import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { store } from '../src/app/store'
import { addTodo } from '../src/features/todo/todoSlice'


function Addtodo() {
    const dispatch=useDispatch()
    const [input,setInput]=useState('')
    const handleSubmit=()=>{
        dispatch(addTodo(input))
    }
    return (
        <>
             <input type="text" placeholder='Enter Your Data'  value={input} onChange={(e)=>setInput(e.target.value)}/>
             <button onClick={handleSubmit}>Add Todo</button>
        </>
   
    )
}

export default Addtodo
