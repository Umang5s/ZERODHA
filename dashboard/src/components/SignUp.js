import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify styles

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!email || !username || !password) {
      toast.error("Please fill out all fields!", { position: "bottom-left" });
      return;
    }

    try {
      const response = await axios.post(
        "https://zerodha-backend-4u4v.onrender.com/signup", // Replace with your backend URL
        { email, username, password },
        { withCredentials: true } // Include cookies if necessary (e.g., JWT)
      );

      if (response.data.success) {
        toast.success("Signup successful!", { position: "bottom-right" });
        setTimeout(() => navigate("/login"), 1000); // Redirect to login page after 1 second
      } else {
        toast.error(response.data.message, { position: "bottom-left" });
      }
    } catch (error) {
      console.error("Error during signup:", error); // Log error details
      toast.error("Something went wrong. Please try again later!", {
        position: "bottom-left",
      });
    }
  };

  return (
    <div className="form_container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)} // Toggle password visibility
              style={{ transform: "scale(1.5)" }}
            />
            &nbsp;Show Password
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
      <ToastContainer /> {/* For toast notifications */}
    </div>
  );
};

export default SignUp;
