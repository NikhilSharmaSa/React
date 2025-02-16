import React from 'react'
import './App.css'
import Dashboard from './components/Dashboard.jsx'
import Login from './components/Login.jsx'
import { UserContextProvider } from './context/UerContextProvider.jsx'
function App() {

  return (
  
     <UserContextProvider>
<Login/>
<Dashboard/>
     </UserContextProvider>
   
     
  
  )
}

export default App
