import React, { useState } from 'react'
import { useContext } from 'react'
import { userContext } from '../context/UserContext'
function Login() {
    const {setUser}=useContext(userContext)
const [inputData,setInput]=useState("")
    const handleSubmit=()=>{
        console.log(inputData)
        setUser(inputData)
    }
    return (
        <>
          <input type="text" placeholder='Enter The Value Here' onChange={e=>setInput(e.target.value)} />
          <button onClick={handleSubmit} onKeyDown={handleSubmit}>Submit</button>

        </>
    )
}

export default Login
