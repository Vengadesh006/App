import { useState } from 'react'
import './App.css'
import { Nav } from './components/nav/Nav'
import { Message } from './components/message/Message'
import { SildeBar } from './components/Sildebar/SildeBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center p-4">
        <div className="w-[92%] h-[680px] max-w-full min-h-full shadow-xl flex " >
          <Nav />
          <Message />
          <SildeBar />
        </div>

      </div>
    </>
  )
}

export default App
