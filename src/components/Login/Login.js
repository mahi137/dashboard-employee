import React, { useState } from "react";
import "./style.css";
import loginLogo from "../../assets/login-logo.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "Admin") {
      navigate("/dashboard");
    }
    else{
      setError("Invalid Email or Password. (Email - admin@gmail.com , Password - Admin)");
    }
  };
  return (
    <div className="login">
      <div>
        <img src={loginLogo} alt="" />
      </div>
      <p style={{ color: "#36A546CC" }}>We are Electric</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleLogin}>Login</button>
        <p style={{ color: "red" }} >{error}</p>
        <p style={{ color: "#36A546CC" }}>Forgot Password</p>
      </form>
    </div>
  );
};

export default Login;
