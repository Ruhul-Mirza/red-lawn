import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './home/Home'
import Login from './components/LoginForm.jsx'
import SignUp from './components/SignUp.jsx'
import CartItem from './components/CartItem.jsx'
import NewArrival from './newarrival/NewArrival.jsx'
import BestSeller from './bestseller/BestSeller.jsx'
import Contact from './contact/Contact.jsx'
import About from "./about/About.jsx"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path="/cart-item" element={<CartItem />} />
      <Route path="/new-arrival" element={<NewArrival />} />
      <Route path="/best-seller" element={<BestSeller />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
