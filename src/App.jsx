import { useState } from 'react'
import Main from './components/Main'
import Sidenav from './components/Sidenav'
import Work from './components/Work'
import WorkItem from './components/WorkItem'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom' 
import Dashboard from './pages/Dashboard'

function App() {
  

  return (
    <>
    <Sidenav />
    <Routes >

    <Route path='/' element={<Dashboard />} /> 
    <Route path='/contact' element={<Contact />} />

    </Routes>
    </>
  )
}

export default App
