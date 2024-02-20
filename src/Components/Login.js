import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email:"",
    password:"",
  });
  
  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password === loggeduser.password){
      navigate("/");
    }else{
      alert("Wrong Email and Password");
    }
  };

  return(
    <>
      <div className="wrapper">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <div className="input-box">
        <input type="text" placeholder="Enter your email" name="email" defaultValue={input.email} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })} />
      </div>
      <div className="input-box">
        <input type="password" placeholder="Enter Password" name="password" defaultValue={input.password} onChange={(e) => 
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            })} />
      </div>
      <div className="input-box button">
        <input type="Submit" defaultValue="Login" />
      </div>
    </form>
  </div>
    </>
    );
};

export default Login;