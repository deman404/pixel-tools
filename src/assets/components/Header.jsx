import React, { useState } from "react";
import "./header.css";
import logo from "../images/logo.png";
import { IoBagHandle } from "react-icons/io5";
import useWindowSize from "../Hooks/useWindowSize";
import Login from "./Login"; // Assuming the Login component is in the parent folder

function Header() {
  const size = useWindowSize();
  const [isLoginVisible, setLoginVisible] = useState(false);

  // Function to toggle the visibility of the Login component
  const toggleLogin = () => {
    setLoginVisible((prev) => !prev);
  };

  return (
    <div>
      <div
        className="header blur fadeDownAnimation"
        style={{
          width: size.width > 800 ? "100%" : "100%",
          justifyContent: size.width > 800 ? "space-around" : "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="logo" className="logo" />
            <p style={{ color: "#ffffff", fontSize: 18, cursor: "pointer" }}>
              <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
                SupraTools
              </a>
            </p>
            <div className="listNav">
              <ul>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Developers</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Docs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="btn" onClick={toggleLogin}>
          <p>Login</p>
        </div>
      </div>

      {/* Conditionally render the Login component based on isLoginVisible */}
      {isLoginVisible && <Login onClose={() => setLoginVisible(false)} />}
    </div>
  );
}

export default Header;
