import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from './page/Home.page'
import AddPage from './page/Add.page'

const App = () => {
  return (
    <div className=' bg-slate-500 w-full h-[932px]'>
      <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/add' element={<AddPage/>} />
      </Routes>
    </div>
  )
}

export default App