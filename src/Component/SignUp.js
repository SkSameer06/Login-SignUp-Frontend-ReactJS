import React, { useState } from "react";
import "../css/signup.css";
import { useNavigate } from "react-router-dom";




const SignUp = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");


  const handleForm = (e) => {
    e.preventDefault();
  }

  const handleSignup = (e) => {
    console.log(email);
    console.log(password);
    console.log(number);
    console.log(name);

    navigate("/login");
  }

  const handleLogin = (e) => {
    navigate("/login");
  }
  

  return (

    <div style={{ textAlign: "center" }} class="signUpBox">
      <h2>Sign Up</h2>
      <form onSubmit={handleForm}>

      <div class="inputBox">
        <span><i class="fa fa-user" style={{fontSize:"16px",
          color: "white",
          position: "relative",
          top: "1px",
          left: "12px",}}></i></span>
					<input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
			</div>

      <div class="inputBox">
        <span><i class="fa fa-envelope" style={{fontSize:"16px",
          color: "white",
          position: "relative",
          top: "1px",
          left: "12px",}}></i></span>
					<input type="text" name="email" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)}/>
			</div>

      <div class="inputBox">
        <span><i class="fa fa-address-book" style={{fontSize:"16px",
          color: "white",
          position: "relative",
          top: "1px",
          left: "12px",}}></i></span>
					<input type="text" name="number" placeholder="Number" value={number} onChange={(e) => setNumber(e.target.value)}/>
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
          name = "signup"
          type="submit"
          value="Sign Up"
          onClick={handleSignup}
        />
      
      </form>

        <p id = "or">or</p>

      <button
          type="submit"
          name="Login"
          id = "login"
          onClick={handleLogin}
        >
          Login
        </button>
    </div>
  );
};

export default SignUp;
