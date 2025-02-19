import { useTheme } from "../contexts/theme";
import React from 'react'

function Button() {
    const {mode,darkMode,lightMode}=useTheme()
const handleChange=()=>{
    if(mode==="light"){
        darkMode()
    }else{
        lightMode()
    }
}
    return (
        <button onClick={handleChange}>Click Me! to change Color of the Theme</button>
    )
}

export default Button
