import React, { useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";




const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
  }

  const handleLogin = (e) => {
    console.log(email);
    console.log(password);

    navigate("/");
  }

  const handleSignup = (e) => {
    navigate("/");
  }
  

  return (

    <div style={{ textAlign: "center" }} class="loginBox">
      <h2>Login Form</h2>
      <form onSubmit={handleForm}>

      <div class="inputBox">
        <span><i class="fa fa-user" style={{fontSize:"16px",
          color: "white",
          position: "relative",
          top: "1px",
          left: "12px",}}></i></span>
					<input type="text" name="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)}/>
			</div>

				<div class="inputBox">
          <span><i class="fa fa-lock" style={{fontSize:"16px",
          color: "white",
          position: "relative",
          top: "1px",
          left: "12px",}}></i></span>
					<input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>				
				</div>
        
        <input
          name = "Login"
          type="submit"
          value="Log in"
          onClick={handleLogin}
        />
      
      </form>

        <p id = "or">or</p>

      <button
          type="submit"
          name="Sign Up"
          id = "signUp"
          onClick={handleSignup}
        >
          Sign Up
        </button>
    </div>
  );
};

export default Login;
