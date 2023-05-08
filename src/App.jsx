import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CheckOut from './pages/CheckOut'
import Payment from './components/Payment'
import Orders from './pages/Orders'



function App() {
  return (
   
     <BrowserRouter>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/check-out' element={<CheckOut/>}/>
       <Route path='/payment' element={<Payment/>}/>
       <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </BrowserRouter>
     
    

   
  )
}

export default App
