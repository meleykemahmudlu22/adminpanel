import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './assets/components/admin/Admin'
import Home from './assets/Home/Home'

const App = () => {
  return (
    <div>
    
     
      <Routes>
        <Route  path='admin' element={<Admin/>}/>
        <Route  path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
