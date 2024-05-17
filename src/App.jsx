import React from 'react'
import User from './components/User'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <Routes>   
        <Route path="/" element={<SideBar/>} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Toaster />
    </Router>

  )
}

export default App