import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen'>
    <Navbar/>
    
    </div>
  )
}

export default App
