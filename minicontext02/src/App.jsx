
import './App.css'
import Documents from './components/Documents'
import Login from './components/Login'

import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <>
  <UserContextProvider>
  <Login/>
  <Documents/>
  </UserContextProvider>
    
    </>
  )
}

export default App
