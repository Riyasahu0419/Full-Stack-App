// import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';

function Login() {
  const[email,setEmail]=useState("")
  const[pass,setPass]=useState("")

  const navigate = useNavigate();

  const handleLogin=()=>{
      const payload={
      email,pass
      }
      fetch('https://full-stack-backend-part.onrender.com/login',{
        method:'POST',
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(payload)
      }).then((res)=>res.json())
      .then((data)=>{
        alert(data.msg)
        localStorage.setItem("accessToken",data.token)
        navigate('products')
      })
      .catch((error)=>console.log(error))
  }

  
  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form">
        <input
          type="email"
          placeholder="Email"
          className="login-input"
          required
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          required
          onChange={(e)=>{setPass(e.target.value)}}
        />
        <button type="submit" className="login-button" onClick={handleLogin}>Login</button>
        <p className="login-footer-text">Dont have an account?{'  '}
          <button
            type="button"
            className="signup-link"
            onClick={() => navigate('/signup')}
          >
            Signup
          </button>
        </p>
      </form>
    </div>
  );
}

export default Login;
