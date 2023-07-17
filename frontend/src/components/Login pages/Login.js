import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/login", { email, password })
      .then((res) => {
        console.log("login: " + res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputs">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputs">
              <label htmlFor="email">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="form-control rounded-0"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="footer">
              <button type="submit" className="button">
                Login
              </button>
            </div>
          </form>
          <div className="footer">
            <p>Don't have an account?</p>
            <Link to="/register" className="link">
              Click Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
