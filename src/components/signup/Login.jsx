import React, { useState } from 'react'
import { login } from '../config/Firebase'

export const Login = () => {

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const SubmitEvent = (e) => {
    e.preventDefault()
    login(email, password)
    alert("login the Account")
  }


  return (
    <div className='border max-w-md p-5 mx-auto mt-5 rounded-3xl' >
      <form action="" onSubmit={SubmitEvent} >
        <h1> Login Page  </h1>

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
       
         <button className='w-full py-2 px-4 my-4 bg-green-300 rounded-md ' > Submit </button>
      </form>
      
    </div>
   
  )
}
