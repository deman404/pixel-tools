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
import DropDown from "./DropDown";
import TopProfile from "./TopProfile";
//Images
import logo from "../images/logo.png";

function ProfileSection() {
  const navigate = useNavigate();
  const size = useWindowSize();
  const isPhone = size.width > 800;
  const { theme, toggleTheme } = useTheme();
  const background = theme === "light" ? "aliceblue" : "#121212";
  const backgroundCompt = theme === "light" ? "#ffffff" : "#242424";
  const color = theme === "light" ? "#000000" : "aliceblue";
  const border = theme === "light" ? "#ededed solid 1px" : "#333 solid 1px";
  //styles
  const ProfileBody = {
    width: "100vw",
    background: background,
    height: "100vh",
    paddingTop: 80,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const ProfileFrame = {
    width: "70%",
    height: "100%",
    background: backgroundCompt,
    border: border,
    borderRadius: 20,
    padding: 0,
  };

  return (
    <>
      <div style={ProfileBody}>
        <div style={ProfileFrame}>
          <TopProfile/>
        </div>
      </div>
    </>
  );
}

export default ProfileSection;
