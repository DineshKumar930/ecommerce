import { createSlice } from "@reduxjs/toolkit";

// Get user from localStorage if exists
const userFromStorage = JSON.parse(localStorage.getItem("user"));
const usersFromStorage = JSON.parse(localStorage.getItem("users")) || [];

const initialState = {
  user: userFromStorage || null,   // logged-in user
  users: usersFromStorage || [],   // registered users list
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      // ✅ sirf users list me add karo, auto-login mat karo
      const newUser = {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        profilePic: action.payload.profilePic || null,
      };

      state.users.push(newUser);
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    login: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (foundUser) {
        state.user = foundUser;
        localStorage.setItem("user", JSON.stringify(foundUser));
      } else {
        alert("Invalid email or password!");
      }
    },

    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },

    updateProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };

        // update in users list also
        state.users = state.users.map((u) =>
          u.email === state.user.email ? state.user : u
        );

        localStorage.setItem("user", JSON.stringify(state.user));
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },

    loadUser: (state) => {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        state.user = JSON.parse(savedUser);
      }
    },
  },
});

export const { login, logout, register, updateProfile, loadUser } =
  authSlice.actions;
export default authSlice.reducer;
