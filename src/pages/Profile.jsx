import "./Profile.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Profile() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (!auth.user) {
    return (
      <div className="profile-container">
        <p className="not-logged">⚠️ Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2 className="profile-title">👤 My Profile</h2>

      {/* Profile Info */}
      <div className="profile-card">
        <div className="avatar-wrap">
          <img
            src={auth.user.profilePic || "/default-avatar.png"} // ✅ fixed
            alt="Profile"
            className="profile-avatar"
          />
        </div>
        <h3 className="username">{auth.user.name}</h3>
        <p className="email">{auth.user.email}</p>

        <button
          className="edit-btn"
          onClick={() => (window.location.href = "/edit-profile")}
        >
          ✏️ Edit Profile
        </button>
      </div>

      {/* Logout */}
      <button className="logout-btn" onClick={() => dispatch(logout())}>
        🚪 Logout
      </button>
    </div>
  );
}
