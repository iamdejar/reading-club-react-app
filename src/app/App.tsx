import React from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from 'pages/Main/Main'
import Login from 'pages/Login/Login'
import Admin from 'pages/Admin/Admin'
import Error from 'pages/Error/Error'
import Header from 'components/Header/Header'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/404" element={<Error />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
