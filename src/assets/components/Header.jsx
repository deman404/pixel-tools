import React, { useState } from "react";
import "./header.css";
import { IoBagHandle } from "react-icons/io5";
import useWindowSize from "../Hooks/useWindowSize";
import Login from "../pages/Login"; // Keep this as the Login component import
import { TbLayoutListFilled } from "react-icons/tb";
import DropDown from "./DropDown";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
import logo from "../images/logo.png";
import { useTheme } from "../Hooks/ThemeContext";

function Header() {
  const size = useWindowSize();
  const [isLoginVisible, setLoginVisible] = useState(false);
  const isPhone = size.width > 800;
  const [isVisible, setVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const background = theme === "light" ? "aliceblue" : "#121212";
  const color = theme === "light" ? "#000000" : "aliceblue";

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
            <p style={{ fontSize: 18, cursor: "pointer" }}>
              <a
                href="/"
                style={{
                  color: color,
                  textDecoration: "none",
                }}
              >
                SupraTools
              </a>
            </p>
            <div
              className="listNav"
              style={{ display: isPhone ? "flex" : "none" }}
            >
              <ul>
                <li>
                  <a href="#" style={{ color: color }}>
                    Product
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: color }}>
                    Developers
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: color }}>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: color }}>
                    Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            width: 130,
          }}
        >
          <div
            className="btn"
            style={{ display: isPhone ? "flex" : "none" }}
          >
            <a href="/login" style={{textDecoration:"none",color:"#ffffff"}}><p>Login</p></a> 
          </div>
          <div onClick={toggleTheme} style={{ cursor: "pointer" }}>
            {theme === "light" ? (
              <IoMoon color="#121212" size={20} />
            ) : (
              <IoMdSunny color="#ffffff" size={20} />
            )}
          </div>
        </div>

        <TbLayoutListFilled
          size={25}
          style={{
            cursor: "pointer",
            display: isPhone ? "none" : "flex",
            color: color,
          }}
          onClick={toggleDropdown}
        />
      </div>

      {isVisible && (
        <div
          style={{ marginTop: 80, position: "absolute", right: 10, zIndex: 10 }}
        >
          <DropDown />
        </div>
      )}
    </div>
  );
}

export default Header;
