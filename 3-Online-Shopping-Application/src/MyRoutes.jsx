import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import  Home  from './Pages/Home'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default MyRoutes