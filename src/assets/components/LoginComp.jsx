import React from "react";
import { useState, useEffect } from "react";
//suprabase imports
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
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

function LoginComp() {
  const size = useWindowSize();
  const isPhone = size.width > 800;
  const isTablet = size.width > 1300;
  //theme constant
  const { theme } = useTheme();
  const background = theme === "light" ? "aliceblue" : "#121212";
  const backgroundCompt = theme === "light" ? "#ffffff" : "#242424";
  const color = theme === "light" ? "#000000" : "aliceblue";
  const border = theme === "light" ? "#ededed" : "#333";

  // login logic
  const SUPABASE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkcmJzcmdvb2hrYnBod2JybnJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkyMDM3OTMsImV4cCI6MjA0NDc3OTc5M30.GO2EfYQIDV5WHrJL5Bu67Yyw_L59HPOuv9mpgmGY7ZI";
  const SUPABASE_URL = "https://hdrbsrgoohkbphwbrnrq.supabase.co";
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  // login with google
  const loginWithGoogle = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        console.error("Login error:", error.message);
        return;
      }

      console.log("OAuth login successful:", data);
      // add navigation to a new page
    } catch (error) {
      console.error("Unexpected error during login:", error);
    }
  };

  // login with gitHub
  const loginWithGithub = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });

      if (error) {
        console.error("Login error:", error.message);
        return;
      }

      console.log("OAuth login successful:", data);
      setSuccessMessage("Sign-up successful! please wait...");

      // add navigation to a new page
    } catch (error) {
      console.error("Unexpected error during login:", error);
      setErrorMessage(error.message);
    }
  };

  const LogoutFromGoogle = async () => {
    const { error } = await supabase.auth.signOut();
  };

  //create account with email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const signUpNewUser = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setSuccessMessage("Sign-up successful! Please check your email.");
    }
  };

  return (
    <>
      <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
        <div
          style={{
            width: isTablet ?  "35%" :"100%",
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
                  onClick={loginWithGoogle}
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
                  onClick={loginWithGithub}
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
            display:isTablet ? "flex" :"none",
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
