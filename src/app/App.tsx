import React from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from 'pages/Main/Main'
import Login from 'pages/Login/Login'
import Admin from 'pages/Admin/Admin'
import Header from 'components/Header/Header'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
