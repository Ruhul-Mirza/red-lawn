import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Home from './home/Home'


function App() {
  
  return (
    <>
    <Navbar/>
    <Outlet/>
    {/* <Home/> */}
    </>
  )
}

export default App
