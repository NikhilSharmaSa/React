import React, { useContext } from 'react'
import UserContextProvider from '../context/UserContextProvider'
import { useState } from 'react'
import UserContext from '../context/Usercontext'
function Login() {

    const [inputData,setInput]=useState("Enter Data")
    const {setData}=useContext(UserContext);

    const addValue=()=>setData(inputData);

    return (

       <>
        <input type="text" name="" id="" value={inputData} onChange={e=>setInput(e.target.value)} />
        <button onClick={addValue}>Click to Set</button>
       </>
    )
}

export default Login
