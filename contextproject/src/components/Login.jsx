import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const {setData}=useContext(UserContext);
    const [input,setInput]=useState("");
    const submitVal=()=>{
        
        setData(input);
    }
    return (
    <>
    <input type="text" placeholder='Enter Data' value={input} onChange={e=>setInput(e.target.value)} />
    <button onClick={submitVal}>Submit</button>
    </> 
    )
}

export default Login
