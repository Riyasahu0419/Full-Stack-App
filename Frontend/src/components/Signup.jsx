// // import React from 'react';
// import { useState } from 'react';
// import './Signup.css'; // Import the CSS file
// import { Link, Navigate } from 'react-router-dom';


// function Signup() {
//   const [name,setName]=useState("")
//   const [email,setEmail]=useState("")
//   const [pass,setPass]=useState("")

//   const handleSignup=()=>{
//     const payload={

//       name,
//       email,
//       pass
//     }

//     fetch("https://full-stack-backend-part.onrender.com/users",{
//       method:"POST",
//       headers:{
//           "Content-type": "application/json"
//       },
//       body:JSON.stringify(payload)
//     }).then((res)=>res.json())
//     .then((data)=>{
//       alert(data.msg || 'Registration successful' )
    
//       Navigate('/login')
//     })
//     .catch((error)=>console.log("Something went wrong. Please try again later.",error))

    
//   }

    
//   return (
//     <>
//     {/* <h2>Please regiter yourself!</h2> */}
//     <div className="signup-container">
//       <form className="signup-form">
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           className="signup-input"
//           required
//           onChange={(e)=>{setName(e.target.value)}}
          
//           />
//         <input
//           type="text"
//           placeholder="Email"
//           value={email}
//           className="signup-input"
//           required
//           onChange={(e)=>{setEmail(e.target.value)}}
//           />
//         <input
//           type="text"
//           placeholder="Password"
//           value={pass}
//           className="signup-input"
//           required
//           onChange={(e)=>{setPass(e.target.value)}}
//           />
//         <button type="submit" className="signup-button" onClick={handleSignup} >
//           Signup
//         </button>
//         <p className="signup-footer-text">
//           Already have an account?{' '}
//           <Link to='/login'>
//           <button
//             type="button"
//             className="login-button"
//             onClick={() => alert('Redirect to login page')}
//             >
//             Login
//           </button>
//         </Link>
          

//         </p>
//       </form>
//     </div>
//             </>
//   );
// }

// export default Signup;




// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Signup.css'; // Import the CSS file

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const navigate = useNavigate(); // Use useNavigate instead of Navigate component

//   const handleSignup = async () => {
//     // e.preventDefault(); // Prevent default form submission

//     const payload = { name, email, pass };

//     try {
//       const response = await fetch("https://full-stack-backend-part.onrender.com/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(payload)
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert(data.msg || "Registration successful!");
//         navigate('/login'); // Correct way to navigate
//       } else {
//         alert(data.msg || "Registration failed. Try again.");
//       }
//     } catch (error) {
//       console.log("Signup Error:", error);
//       alert("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <form className="signup-form" >
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           className="signup-input"
//           required
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email" // Changed from "text" to "email"
//           placeholder="Email"
//           value={email}
//           className="signup-input"
//           required
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password" // Changed from "text" to "password"
//           placeholder="Password"
//           value={pass}
//           className="signup-input"
//           required
//           onChange={(e) => setPass(e.target.value)}
//         />
//         <button type="submit" className="signup-button" onSubmit={handleSignup}>
//           Signup
//         </button>
//         <p className="signup-footer-text">
//           Already have an account?{" "}
//           <Link to="/login">
//             <button type="button" className="login-button">
//               Login
//             </button>
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }

// export default Signup;



import { useState } from "react"

const Signup = () =>{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleRegister = () => {
        const payload = {
            name, 
            email,
            pass
        }

        fetch("https://full-stack-backend-part.onrender.com/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload),
        }).then((res)=>res.json())
        .then((data)=>{
            alert(data.msg)
        })
        .catch((error)=>console.log(error))
    }
    return (
        <>
            <h2>Please regiter yourself!</h2>
            <input type="text" placeholder="Enter name..." value={name} onChange = {(e)=>{setName(e.target.value)}}/>
            <input type="text" placeholder="Enter email..." value={email} onChange = {(e)=>{setEmail(e.target.value)}}/>
            <input type="text" placeholder="Enter the Password..." value={pass} onChange = {(e)=>{setPass(e.target.value)}}/>
            <button onClick = {handleRegister}>Regiter!</button>
        </>
    )
}

export default Signup