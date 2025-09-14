import React, { useState } from 'react'
import { signup } from '../config/Firebase'

export const Signup = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const SubmitEvent = async (e) => {
      e.preventDefault()
      signup(username, email, password)
      console.log(username);
      console.log(password);
      console.log(email);
    
  }


  return (
    <div className='border max-w-md p-5 mx-auto mt-5 rounded-3xl' >
      <form action="" onSubmit={SubmitEvent} >
        <h1> Signup Page  </h1>
        <div className="form-group">
          <label htmlFor="username" className='block my-2 text-sm font-semibold tracking-wide' > Username : </label>
          <input type="text"
          className='w-full py-2 px-4  rounded-md bg-gray-300 outline-none'
          name='username'
          id='username'
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='block my-2 text-sm font-semibold tracking-wide' > password : </label>
          <input type="password"
          className='w-full py-2 px-4  rounded-md bg-gray-300 outline-none'
          name='password'
          id='password'
          placeholder='password'
          onChange={(e) => setPassword(e.target.value) }
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className='block my-2 text-sm font-semibold tracking-wide' > email : </label>
          <input type="email"
          className='w-full py-2 px-4  rounded-md bg-gray-300 outline-none'
          name='email'
          id='email'
          placeholder='email'
          onChange={(e) => setEmail(e.target.value)}
          />
         
        </div>
         <button className='w-full py-2 px-4 my-4 bg-green-300 rounded-md ' > Submit </button>
      </form>
      
    </div>
  )
}
