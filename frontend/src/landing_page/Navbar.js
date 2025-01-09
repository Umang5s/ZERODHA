import React, { useState,useRef,useEffect } from "react";
import "./CSS/NavBar.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  useEffect(() => {
    console.log("Dropdown state changed. isOpen:", isProfileDropdownOpen);
  }, [isProfileDropdownOpen]);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav class="navbar navbar-expand-lg bg-body-light border">
      <div class="container">
        <Link class="navbar-brand ms-5 mt-1 mb-2" to="/">
          <img
            src="Media\Images\logo.svg"
            alt="logo"
            style={{ width: "22%" }}
            className="ms-3"
          />
        </Link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link me-4 link" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link me-3 link" to="/about">
                About
              </Link>
            </li>

            <li class="nav-item ">
              <Link class="nav-link ms-4 link" to="/product">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link ms-4 link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link ms-4 link" to="/support">
                Support
              </Link>
            </li>
            <li className="ms-4 links" onClick={handleProfileClick}>
              <i className="fa-solid fa-bars"></i>
              {isProfileDropdownOpen && (
                <div className="profile-dropdown" ref={dropdownRef}>
                  <ul>
                    <li>
                      <Link to="http://localhost:3002/">kite</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
