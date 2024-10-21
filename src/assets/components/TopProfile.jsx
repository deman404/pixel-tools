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
import { FaSquareInstagram } from "react-icons/fa6";
import { BsThreadsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

//Hooks
import useWindowSize from "../Hooks/useWindowSize";
import { useTheme } from "../Hooks/ThemeContext";

//Models
import Login from "../pages/Login"; // Keep this as the Login component import
import DropDown from "./DropDown";
//Images
import logo from "../images/logo.png";

//firebase 
import { auth, db } from '../../../firebase';
import { ref, onValue,update } from 'firebase/database';

function TopProfile({UserName}) {
  const navigate = useNavigate();
  const size = useWindowSize();
  const isPhone = size.width > 800;
  const [isVisible, setIsVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const background = theme === "light" ? "aliceblue" : "#121212";
  const backgroundCompt = theme === "light" ? "#ffffff" : "#242424";
  const color = theme === "light" ? "#000000" : "aliceblue";
  const border = theme === "light" ? "#ededed solid 1px" : "#333 solid 1px";
  const banerImage =
    "https://i.pinimg.com/564x/a5/27/c6/a527c6ba82174cfc93e031a1c2297c09.jpg";
  const profileUser =
    "https://i.pinimg.com/enabled/564x/0b/1d/ab/0b1dab370e8d4239ef1dad7027755712.jpg";

  //styles
  const ImageBanner = {
    width: "100%",
    height: 130,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottom: "solid 1px #333",
  };
  const baner = {
    width: "100%",
    height: "100%",
    aspectRatio: 16 / 9,
    resizeMode: "cover",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  };
  const Profle = {
    width: "100%",
    height: "100%",
    borderRadius: 180,
  };
  const imageProfile = {
    width: 100,
    height: 100,
    borderRadius: 180,
    position: "relative",
    left: 25,
    top: -60,
    border: border,
  };

  const [userData, setUserData] = useState(null);


  // Get the current logged-in user
  const user = auth.currentUser;

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
    setIsVisible(false);
  };

  useEffect(() => {
    if (user) {
      // Fetch user data from Realtime Database
      const userRef = ref(db, 'users/' + user.uid);
      
      onValue(userRef, (snapshot) => {
        if (snapshot.exists()) {
          setUserData(snapshot.val());
        } else {
          console.log("No data available");
        }
      });
    }
    const consent = getCookie("LoginContent");
    if (!consent) {
      console.log("is not login in");
      navigate("/")      
    } else {
      console.log("is onready login in");

    }
  }, [user]);

  if (!user) {
    console.log("login first");
    navigate("/")
  }


  return (
    <>
      <div
        style={{ width: "100%", height: 200, borderBottom: "solid 1px #333" }}
      >
        <div className="banner" style={ImageBanner}>
          <img src={banerImage} alt="" style={baner} />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 70,
          }}
        >
          <div className="Profile" style={imageProfile}>
            <img src={userData.profilePicture} alt="" style={Profle} />
          </div>
          <div
            style={{
              width: "80%",
              marginLeft: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ color: color }}>{"@" + userData.name}</h1>
            {/* Social Media Icons */}
            <div style={{ display: "flex",gap:10 }}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: color, textDecoration: "none" }}
              >
                <FaGithub
                  size={50}
                  style={{ width: "30px", margin: "0 5px", color: color }}
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: color, textDecoration: "none" }}
              >
                <BsThreadsFill
                  size={50}
                  style={{ width: "30px", margin: "0 5px", color: color }}
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: color, textDecoration: "none" }}
              >
                <FaSquareInstagram
                  size={50}
                  style={{ width: "30px", margin: "0 5px", color: color }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopProfile;
