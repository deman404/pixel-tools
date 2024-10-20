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
import { LuAppWindow } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { RiNotification4Fill } from "react-icons/ri";
//Hooks
import useWindowSize from "../Hooks/useWindowSize";
import { useTheme } from "../Hooks/ThemeContext";

//Models
import Login from "../pages/Login"; // Keep this as the Login component import
import DropDown from "./DropDown";
//Images
import logo from "../images/logo.png";

function HeaderHome() {
  const navigate = useNavigate();
  const size = useWindowSize();
  const isPhone = size.width > 800;
  const [isVisible, setVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const background = theme === "light" ? "aliceblue" : "#121212";
  const backgroundCompt = theme === "light" ? "#ffffff" : "#242424";
  const color = theme === "light" ? "#000000" : "aliceblue";
  const border = theme === "light" ? "#ededed" : "#333";

  const toggleDropdown = () => {
    setVisible(!isVisible);
  };
  const IconBtn = {
    margin: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: backgroundCompt,
    padding: "5px 10px",
    borderRadius: 10,
    width: 50,
    cursor: "pointer",
  };
  const inputatyles = {
    background: backgroundCompt,
    padding: 8,
    borderRadius: 5,
    cursor: "text",
    height:25,
    border: border,
    borderWidth: 1,
    borderStyle: "solid",
    width: 350,
    margin: 10,
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
              className="SearchBar"
              style={{ display: isPhone ? "flex" : "none" }}
            >
              <input
                type="text"
                name="Search"
                id="search"
                placeholder="Searsh..."
                style={inputatyles}
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
          <div className="apps" style={IconBtn}>
            <LuAppWindow size={20} />
            <p style={{ margin: 0, fontSize: 15 }}>Apps</p>
          </div>
          <div className="Tools" style={IconBtn}>
            <BsTools size={20} />
            <p style={{ margin: 0, fontSize: 15 }}>Tools</p>
          </div>
          <div className="Plan" style={IconBtn}>
            <BsFillCreditCardFill size={20} />
            <p style={{ margin: 0, fontSize: 15 }}>Plans</p>
          </div>
          <div className="Profile" style={IconBtn} onClick={() => navigate("/Profile")}>
            <FaUserTie size={20} />
            <p style={{ margin: 0, fontSize: 15 }}>Profile</p>
          </div>
          <div className="Notify" style={IconBtn}>
            <RiNotification4Fill size={20} />
            <p style={{ margin: 0, fontSize: 15 }}>Notify</p>
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

export default HeaderHome;
