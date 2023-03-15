import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate  } from "react-router-dom";
import {auth} from "./firebase";
function Login() {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const login = (event) =>{
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
      // logged in , redirect to home page
      navigate('/');
    })
    .catch(e=>alert(e.message));
    
  }
  const register = (event) =>{
  
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      //created a user then logged in
      navigate('/');
    })
    .catch(e=>alert(e.message));
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form onSubmit={(e) =>e.preventDefault()}>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="text" />
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          <button type="submit" onClick={()=>login()} className="login__signInButton">Sign In</button>
        </form>
        <p>
          By Signing-in you agree to my Conditions of Service Agreement. For more info see our privacy Notice, our cookies Notice and gather data.
        </p>
        <button onClick={()=>register()} className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
