import React, { useState } from "react";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  async function register(ev){
    ev.preventDefault();
    const response= await fetch('http://localhost:4000/register',{
        method: 'POST',
        body: JSON.stringify({username,password}),
        headers:{'Content-Type': 'application/json'}
    });
    if(response.status===200){
      alert('Registration successful');
    }
    else{
      alert('Registration failed');
    }
  } 
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        value={username}
        onChange={(ev) => {
          setUsername(ev.target.value);
        }}
        placeholder="Username"
      />

      <input
        type="password"
        value={password}
        onChange={(ev) => {
          setPassword(ev.target.value);
        }}
        placeholder="Password"
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
