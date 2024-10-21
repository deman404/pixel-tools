import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//icons
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { TbBrandGithubFilled } from "react-icons/tb";
//image
import logo from "../images/logo.png";
import profile from "../images/profile.jpg";

//Hooks
import { useTheme } from "../Hooks/ThemeContext";
import useWindowSize from "../Hooks/useWindowSize";

//Modals
import AlertModal from "./AlertModal";
import CoockisModal from "./CoockisModal";
//firebase
import { auth, googleProvider, githubProvider,db } from "../../../firebase";
import { signInWithPopup } from "firebase/auth";
import { ref, set } from 'firebase/database';

function LoginComp() {
  const navigate = useNavigate();
  const size = useWindowSize();
  const isPhone = size.width > 800;
  const isTablet = size.width > 1300;
  //theme constant
  const { theme } = useTheme();
  const background = theme === "light" ? "aliceblue" : "#121212";
  const backgroundCompt = theme === "light" ? "#ffffff" : "#242424";
  const color = theme === "light" ? "#000000" : "aliceblue";
  const border = theme === "light" ? "#ededed" : "#333";
  const [isLogiedIn, setLogin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  // login logic
  // login with google
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Extract user details
      const userId = user.uid;
      const name = user.displayName;
      const email = user.email;
      const profilePicture = user.photoURL;

      // Push user data to Realtime Database
      await set(ref(db, 'users/' + userId), {
        userId,
        name,
        email,
        profilePicture,
      });

      console.log("User loged in");
      acceptCookies();
      navigate("/")

    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  // login with gitHub
  const signInWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, githubProvider);
      console.log("User loged in");
      const user = result.user;

      // Extract user details
      const userId = user.uid;
      const name = user.displayName;
      const email = user.email;
      const profilePicture = user.photoURL;

      // Push user data to Realtime Database
      await set(ref(db, 'users/' + userId), {
        userId,
        name,
        email,
        profilePicture
      });
      acceptCookies();
      navigate("/")
    } catch (error) {
      console.error("GitHub sign-in error:", error);
    }
  };
  useEffect(() => {
    const consent = getCookie("LoginContent");
    if (!consent) {
      console.log("is not login in");
      
    } else {
      setLogin(true);
      console.log("is onready login in");
      navigate("/")

    }
  }, []);

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
        <div
          style={{
            width: isTablet ? "35%" : "100%",
            height: "100%",
            background: isTablet ? backgroundCompt : background,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "display 1s ease-in-out",
            overflow: "hidden",
            borderRight: "solid 2px #333",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 10,
            }}
          >
            <img src={logo} alt="Logo" style={{ width: 30, height: 30 }} />
            <p style={{ color: color, fontWeight: "bold" }}>SupraTools</p>
          </div>
          <div
            style={{
              width: "100%",
              borderRadius: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ color: color, margin: 0 }}>Welcome back</h1>
            <p style={{ color: color, margin: 0 }}>Sign in to your account</p>
            <div
              style={{
                width: "70%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 10,
              }}
            >
              <div
                style={{
                  marginTop: 10,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FcGoogle
                  size={25}
                  style={{
                    background: "#ededed",
                    padding: 8,
                    borderRadius: 5,
                    cursor: "pointer",
                    width: "100%",
                    margin: 4,
                  }}
                  onClick={signInWithGoogle}
                />
                <TbBrandGithubFilled
                  size={25}
                  style={{
                    background: "#ededed",
                    padding: 8,
                    borderRadius: 5,
                    color: "#181920",
                    cursor: "pointer",
                    width: "100%",
                    margin: 4,
                  }}
                  onClick={signInWithGithub}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "70%",
            height: "100%",
            background: background,
            display: isTablet ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            transition: "display 1s ease-in-out",
            overflow: "hidden",
            borderRight: "solid 2px #333",
          }}
        >
          <div
            style={{
              width: 200,
              height: 200,
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: border,
              borderRadius: 10,
              background: backgroundCompt,
              margin: 5,
              gap: 20,
              padding: 10,
            }}
          >
            <div style={{ width: 200, height: 50, display: "flex" }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
              >
                <img
                  src={profile}
                  style={{ width: "100%", height: "100%", borderRadius: 50 }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 150,
                  justifyContent: "center",
                  paddingLeft: 10,
                }}
              >
                <h3 style={{ fontSize: 15, margin: 0, color: color }}>
                  Ayman Azhar
                </h3>
                <p style={{ fontSize: 13, margin: 0, color: color }}>Founder</p>
              </div>
            </div>
            <div style={{ width: "100%" }}>
              <blockquote className="quote" style={{ color: color }}>
                Every time i know , I know that i known nothing
              </blockquote>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              padding: "5px 15px",
              backgroundColor: "#333",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Documentation
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComp;
