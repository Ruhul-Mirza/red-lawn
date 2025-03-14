import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Home from './home/Home'
import { CartProvider } from './context/CartContext'
import Footer from './components/Footer'

function App() {
  
  return (
    <CartProvider>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </CartProvider>
  )
}

export default App
