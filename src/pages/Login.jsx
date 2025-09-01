import "./Login.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../features/auth/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    navigate("/");
  };

  return (
    <div className="auth-container-login">
      <form className="auth-form-login" onSubmit={handleSubmit}>
        <h2 className="title-login">Login</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="auth-btn-login-form">
          Login
        </button>

        {/* Register link */}
        <p className="auth-text-login">
          Don’t have an account?{" "}
          <Link to="/register" className="auth-link-login">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}
