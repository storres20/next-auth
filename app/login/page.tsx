'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className="flex justify-center">
      <form
        className="border border-slate-300 rounded-2xl p-8"
        onSubmit={submitHandler}
      >
        <h1 className="mb-8 font-bold text-2xl">Login</h1>

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
          />
        </div>

        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full mb-4"
        >
          Sign in
        </button>

        <div className="text-center">
          <p>
            Not a member?{' '}
            <Link href="/register" className="text-cyan-700">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login
