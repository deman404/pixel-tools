import React, { useState } from "react";
import "./header.css";
import logo from "../images/logo.png";
import { IoBagHandle } from "react-icons/io5";
import useWindowSize from "../Hooks/useWindowSize";
import Login from "./Login"; // Assuming the Login component is in the parent folder
import { TbLayoutListFilled } from "react-icons/tb";
import DropDown from "./DropDown";

function Header() {
  const size = useWindowSize();
  const [isLoginVisible, setLoginVisible] = useState(false);
  const isPhone = size.width > 800;
  const [isVisible, setVisible] = useState(false);

  const toggleLogin = () => {
    setLoginVisible((prev) => !prev);
  };
  const toggleDropdown = () => {
    setVisible(!isVisible);
  };

  return (
    <div>
      <div
        className="header blur fadeDownAnimation"
        style={{
          width: size.width > 800 ? "100%" : "100%",
          justifyContent: "space-around",
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
            <div
              className="listNav"
              style={{ display: isPhone ? "flex" : "none" }}
            >
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

        <div
          className="btn"
          onClick={toggleLogin}
          style={{ display: isPhone ? "flex" : "none" }}
        >
          <p>Login</p>
        </div>
        <TbLayoutListFilled
          size={25}
          style={{ cursor: "pointer", display: isPhone ? "none" : "flex" }}
          onClick={toggleDropdown}
        />
      </div>

      {/* Conditionally render the Login component based on isLoginVisible */}
      {isLoginVisible && <Login onClose={() => setLoginVisible(false)} />}
      {isVisible && (
        <div style={{marginTop:80,position:'absolute',right:10,zIndex:10}}>
          <DropDown />
        </div>
      )}
    </div>
  );
}

export default Header;
