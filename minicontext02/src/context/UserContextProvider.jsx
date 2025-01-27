import UserContext from "./Usercontext";
import React from "react";
import { useState } from "react";

const UserContextProvider=({children})=>{
    const [data,setData]=useState("");
    return (
        <UserContext.Provider value={{data,setData}}>
{children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;