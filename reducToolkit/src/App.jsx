import { useState } from 'react'

import './App.css'
import Addtodo from '../components/Addtodo.jsx'
import List from '../components/List.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import UsersList from '../components/Userlist.jsx'

function App() {

  return (
    <Provider store={store}>
    <Addtodo/>
    <List/>
    <UsersList/>
    </Provider>
  )
}

export default App
