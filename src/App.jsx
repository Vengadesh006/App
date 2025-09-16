import { useState } from 'react'
import './App.css'
import { Nav } from './components/nav/Nav'
import { Message } from './components/message/Message'
import { SildeBar } from './components/Sildebar/SildeBar'
import { Routes, Route } from 'react-router-dom'
import { Login } from './components/signup/Login'
import { Signup } from './components/signup/Signup'
import { Home } from './components/home.jsx/Home'
import ChatApp from './components/chat/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
     
      <Routes>
        <Route path='/' element={<ChatApp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>



    </>




  
  )
}

export default App
