import { useCallback } from 'react';
import Header from './components/header'
import Search from './components/Search'
function App() {


  return (
    <>
    <div className='flex flex-col gap-24'>
    <Header/>
    <Search/>
    </div>
    </>
  )
}

export default App
