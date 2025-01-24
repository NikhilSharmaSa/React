import React from 'react'
import UserContext from '../context/Usercontext'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
function Login() {
const [userName,setUser]=useState("")
    const{setData}=useContext(UserContext);
    useEffect(()=>{
setData(userName)
    },[userName])
    return (
        <div>
            <input type="text" placeholder='Enter UserName' value={userName}  onChange={e=>setUser(e.target.value)}/>
        </div>
    )
}

export default Login
