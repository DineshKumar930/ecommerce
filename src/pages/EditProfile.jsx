import "./EditProfile.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../features/auth/authSlice";

export default function EditProfile() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState(user?.profilePic || null);
  const [preview, setPreview] = useState(user?.profilePic || null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setProfilePic(reader.result); // save base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ name, email, password, profilePic }));
    alert("Profile updated successfully!");
  };

  return (
    <div className="edit-profile-container">
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <h2>Edit Profile</h2>

        {/* Profile Picture */}
        <div className="profile-pic-section">
          {preview ? (
            <img src={preview} alt="Preview" className="profile-pic-preview" />
          ) : (
            <div className="profile-placeholder">👤</div>
          )}
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>

        {/* Name */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        {/* Email */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        {/* Password */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New password (optional)"
        />

        <button type="submit" className="save-btn">
          Save Changes
        </button>
      </form>
    </div>
  );
}
