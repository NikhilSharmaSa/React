import React, { useEffect, useState } from "react";
import "./App.css";

import Card from "./components/Card.jsx";
import ThemeBtn from "./components/ThemeBtn.jsx";
import { ThemeProvider } from "./context/Theme.js";
function App() {
const [themeMode,setThememode]=useState("light")

const lightTheme=()=>{
  setThememode("light")
}

const darkTheme=()=>{
  setThememode("dark")
}

useEffect(()=>{
document.querySelector('html').classList.remove("light","dark");
document.querySelector("html").classList.add(themeMode)
console.log(themeMode)
},[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
<ThemeBtn/>
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>

        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
