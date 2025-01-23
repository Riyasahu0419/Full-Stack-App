// import React from 'react';
import { useState } from 'react';
import './Signup.css'; // Import the CSS file
import { Link, Navigate } from 'react-router-dom';


function Signup() {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")

  const handleClick=()=>{
    const payload={

      name,
      email,
      pass
    }

    fetch("http://localhost:8000/users",{
      method:"POST",
      headers:{
          "Content-type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then((res)=>res.json())
    .then((data)=>{
      // alert(data.msg)
      alert('Registration successful: ',data.msg)
      Navigate('/login')
    })
    .catch((error)=>console.log(error))

    
  }

    
  return (
    <div className="signup-container">
      <form className="signup-form">
        <input
          type="name"
          placeholder="Name"
          value={name}
          className="signup-input"
          required
          onChange={(e)=>{setName(e.target.value)}}
          
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="signup-input"
          required
          onChange={(e)=>{setEmail(e.target.value)}}
        />
        <input
          type="password"
          placeholder="Password"
          value={pass}
          className="signup-input"
          required
          onChange={(e)=>{setPass(e.target.value)}}
        />
        <button type="submit" className="signup-button" onClick={handleClick} >
          Signup
        </button>
        <p className="signup-footer-text">
          Already have an account?{' '}
          <Link to='/login'>
          <button
            type="button"
            className="login-button"
            onClick={() => alert('Redirect to login page')}
            >
            Login
          </button>
        </Link>
          

        </p>
      </form>
    </div>
  );
}

export default Signup;
