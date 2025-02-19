import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/theme.js'
import Button from './components/Button.jsx'
import Card from './components/Card.jsx'
function App() {
  const [mode,setMode]=useState("light")
  const darkMode=()=>{
    setMode("dark")
  }
  const lightMode=()=>{
    setMode("light")
  }


  useEffect(()=>{
const html=document.querySelector('html').classList
html.remove("dark","light")
html.add(mode)
  },[mode])
  return (
    <ThemeProvider value={{mode,darkMode,lightMode}}>
   
      <Card/>
      <div className="card">
     <Button/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  )
}

export default App
