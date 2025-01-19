import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'


function Github() {
const{gitid}=useParams();
const [foll,setFollower]=useState(0);
fetch(`https://api.github.com/users/${gitid}`)
.then((res)=>res.json())
.then((data)=> {
setFollower(data.followers)
}
)
    return (
        <h1>Github Followers:{foll}</h1>
    )
}

export default Github
