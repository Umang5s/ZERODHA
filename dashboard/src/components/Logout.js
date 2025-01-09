// frontend/src/components/Logout.jsx

import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3002/logout", // Replace with your backend URL if different
          {},
          {
            withCredentials: true, // Ensures cookies are included in the request
          }
        );

        if (response.status === 200 && response.data.success) {
          // Optionally, clear any frontend state or context related to user
          // For example, if you're using React Context or Redux, dispatch a logout action here

          // Redirect to the login page
          navigate("/login");
        } else {
          // Handle unsuccessful logout if needed
          console.error("Logout failed:", response.data.message);
        }
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  );
};

export default Logout;
