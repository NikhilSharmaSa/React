import React from 'react'
import UserContext from '../context/Usercontext'
import { useContext } from 'react'


function Profile() {

    const {data}=useContext(UserContext)
    return (
        <h1>{data}</h1>
    )
}

export default Profile
