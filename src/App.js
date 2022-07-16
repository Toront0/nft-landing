import React, { lazy } from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/404'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
