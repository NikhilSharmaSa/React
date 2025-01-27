
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <>
<UserContextProvider>
<Login/>
<Dashboard/>
</UserContextProvider>
  
    </>
  )
}

export default App
