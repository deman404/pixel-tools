//react Dom
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// styles
import "./header.css";
//icons
import { IoBagHandle } from "react-icons/io5";
import { TbLayoutListFilled } from "react-icons/tb";
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";
//Hooks
import useWindowSize from "../Hooks/useWindowSize";
import { useTheme } from "../Hooks/ThemeContext";

//Models
import Login from "../pages/Login"; // Keep this as the Login component import
import DropDown from "./DropDown";
//Images
import logo from "../images/logo.png";

//btn handler changer
const LoginBtn = () => {
  return (
    <div className="btn">
      <a href="/Login" style={{ textDecoration: "none", color: "#ffffff" }}>
        <p>Login</p>
      </a>
    </div>
  );
};

const ProfileBtn = () => {
  return (
    <div className="btn">
      <a href="/Home" style={{ textDecoration: "none", color: "#ffffff" }}>
        <p>Profile</p>
      </a>
    </div>
  );
};

function Header() {
  const navigate = useNavigate();
  const size = useWindowSize();
  const [isLoginVisible, setLoginVisible] = useState(false);
  const isPhone = size.width > 800;
  const [isVisible, setVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const background = theme === "light" ? "aliceblue" : "#121212";
  const color = theme === "light" ? "#000000" : "aliceblue";

  const toggleDropdown = () => {
    setVisible(!isVisible);
  };

  //coockis handler
  const setCookie = (name, value, days) => {
    const expires = new Date(
      Date.now() + days * 24 * 60 * 60 * 1000
    ).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  const acceptCookies = () => {
    setCookie("LoginContent", "true", 30); // Set a cookie for 30 days
  };

  //use effect
  useEffect(() => {
    const consent = getCookie("LoginContent");
    if (!consent) {
      console.log("is not login in");
      setIsLoggedIn(false);
    } else {
      console.log("is onready login in");
      setIsLoggedIn(true);
      navigate("/Home")
    }
  }, []);

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
          {isLoggedIn ? <ProfileBtn /> : <LoginBtn />}
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
