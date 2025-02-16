import React, { useContext } from 'react'
import { userContext } from '../context/UserContext'

function Dashboard() {
    const{user}=useContext(userContext)
    if(!user) return (
    <>
    <h1>No Data Found!</h1>
    </>
    )
    return (
        <h1>{user}</h1>
    )
}

export default Dashboard
