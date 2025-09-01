import "./Register.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../features/auth/authSlice";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Convert uploaded image to Base64
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // ✅ base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Create user object with picture
    const newUser = { name, email, password, profilePic };

    // Dispatch register action (sirf save karenge, login nahi karenge)
    dispatch(register(newUser));

    // ✅ Register hone ke baad login page pe bhejo
    navigate("/login");
  };

  return (
    <div className="auth-container-register">
      <form onSubmit={handleSubmit} className="auth-form-register">
        <h2 className="title-register">Create an Account</h2>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
          />
        </div>

        <div className="form-group">
          <label>Profile Picture</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {profilePic && (
            <img src={profilePic} alt="Preview" className="preview-img" />
          )}
        </div>

        <button type="submit" className="auth-btn-register-form">
          Register
        </button>

        {/* Already have an account link */}
        <p className="auth-text-register">
          Already have an account?{" "}
          <Link to="/login" className="auth-link-register">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
