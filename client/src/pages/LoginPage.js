import React, { useContext } from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext);

  async function login(ev){
    ev.preventDefault();
    const response= await fetch('http://localhost:4000/login',{
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers:{'Content-Type': 'application/json'},
      credentials: 'include',

    });
    if(response.ok){
      response.json().then(userInfo =>{
        setUserInfo(userInfo);
        setRedirect(true);
      })
    }
    else{
      alert('wrong credentials');
    }
  }

  if(redirect){
    return <Navigate to ={'/'}/>
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