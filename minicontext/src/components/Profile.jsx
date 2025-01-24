import React from 'react'
import UserContext from '../context/Usercontext'
import { useContext } from 'react'
function Profile() {
    const{data}=useContext(UserContext);
   console.log(data);
   if(!data) return <div>Please Enter UserName</div>
   return <div>Welcome {data}</div>
}

export default Profile
