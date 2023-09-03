import React from 'react'
import { useState } from 'react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function login(ev){
    ev.preventDefault();
    await fetch('http://localhost:4000/login',{
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers:{'Content-Type': 'application/json'}

    });
  }

  return (
    <form className='login' onSubmit={login}>
        <h1>Login</h1>
        <input 
          type="text"
          values = {username}
          onChange={e=>{
            setUsername(e.target.value)
          }}
          placeholder='Username' />

        <input
          type="password"
          values = {password}
          onChange={e=>{
            setPassword(e.target.value)
          }}
          placeholder='Password'
          />
        <button>Login</button>
    </form>
  )
}

export default LoginPage