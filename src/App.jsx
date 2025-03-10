import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Home from './home/Home'
import { CartProvider } from './context/CartContext'

function App() {
  
  return (
    <CartProvider>
    <Navbar/>
    <Outlet/>
    {/* <Home/> */}
    </CartProvider>
  )
}

export default App
