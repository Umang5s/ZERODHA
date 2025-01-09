import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        { email, password },
        { withCredentials: true }
      );

      if (data.success) {
        toast.success(data.message);
        setTimeout(() => navigate("/"), 1000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Login failed!");
    }
  };

  return (
    <div className="form_container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={(e) => {
                setShowPassword(!showPassword);
              }}
              style={{ transform: "scale(1.5)" }}
            />{" "}
            &nbsp; Show Passwordr
          </label>
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );  
};

export default Login;
