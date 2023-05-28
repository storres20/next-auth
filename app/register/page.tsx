'use client'

import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const { data } = await axios.post('/api/register', {
        name,
        email,
        password,
      })

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="">
      <div className="">
        <div className="flex justify-center">
          <form
            className="border border-slate-300 rounded-2xl p-8"
            onSubmit={submitHandler}
          >
            <h1 className="mb-8 font-bold text-2xl">Register</h1>

            <div className="flex flex-col mb-4">
              <label className="form-label" htmlFor="name_field">
                Name
              </label>
              <input
                type="text"
                id="name_field"
                className="border border-slate-400 w-80 rounded-md text-slate-600 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label className="form-label" htmlFor="email_field">
                Email address
              </label>
              <input
                type="email"
                id="email_field"
                className="border border-slate-400 w-80 rounded-md text-slate-600 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col mb-8">
              <label className="form-label" htmlFor="password_field">
                Password
              </label>
              <input
                type="password"
                id="password_field"
                className="border border-slate-400 w-80 rounded-md text-slate-600 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full mb-4"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
