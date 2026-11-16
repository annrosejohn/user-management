import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Details from './components/Details'
import './App.css'



function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
