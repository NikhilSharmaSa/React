import React from "react"

import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <>
    <Header/>
 <Outlet/>
    <Footer/>
    </>
  )
}

export default App
