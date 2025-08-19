// rfce command for the basic bollier plate for reactapp
import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import { Routes,Route } from 'react-router-dom'
import Courses from './pages/Courses'
import Register from './pages/Register'
import Login from './pages/Login'
import MyBooking from './pages/MyBooking'
import CoursesDetail from './pages/CoursesDetail'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mybooking" element={<MyBooking/>} />
        <Route path="/coursdetils/:id" element ={<CoursesDetail />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
