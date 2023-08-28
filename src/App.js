import React from 'react'
import LandingPage from './LandingPage'
import { Route, Routes } from 'react-router-dom'
import Header from './pages/Header'
import Footer  from "./pages/Footer"
import DetailPage from './pages/DetailPage'
import SideBar from './pages/SideBar'
import Register from './Register'
import Login from "./Login"
import Cart from './pages/Cart'


const App = () => {
  return (
    <div className='App'>
      <Header/>
     
      <Routes>
        <Route path='/' element={ <LandingPage/>}/>
        <Route path="/search/:query" element={ <LandingPage/>}/>


        <Route path='/products/:id' element={<DetailPage/>}/>
        <Route path="/search/:query/products/:id" element={ <DetailPage/>}/>

        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>




      </Routes>
    <Footer/>
    </div>
  )
}

export default App