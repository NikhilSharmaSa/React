import { Header,Footer } from "./components"
import {Outlet} from "react-router-dom"
function App() {

  return (
    <>
    <div className="flex flex-col justify-between items-center w-full h-sreen">

 
    <Header/>
    <Outlet/>
    
    <Footer/>
    </div>
    </>
  )
}

export default App
