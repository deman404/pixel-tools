import React from "react";
//icon
import { FaSquareInstagram } from "react-icons/fa6";
import { BsThreadsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
//Hooks
import { useTheme } from "../Hooks/ThemeContext";

//images
import logo from "../images/logo.png";

const Footer = () => {
  const { theme } = useTheme();
  const background = theme === "light" ? "aliceblue" : "#121212";
  const backgroundCompt = theme === "light" ? "#ffffff" : "#242424";
  const color = theme === "light" ? "#000000" : "aliceblue";
  const border = theme === "light" ? "#ededed" : "#333";
  return (
    <footer
      style={{
        backgroundColor:background ,
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <div style={footerContentStyle}>
        {/* Logo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="Logo" style={{ width: 30, height: 30 }} />
          <p style={{ color: color }}>SupraTools</p>
        </div>

        {/* Social Media Icons */}
        <div style={socialMediaStyle}>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            style={{ color: color, textDecoration: "none" }}
          >
            <FaGithub
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
              style={{ width: "30px", margin: "0 5px", color: color }}
            />
          </a>
          {/* Add more social media icons as needed */}
        </div>

        {/* Obligatory Sections */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul style={listStyle}>
            <li>
              <a
                href=""
                style={{
                  color: color,
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href=""
                style={{
                  color: color,
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Terms of Service
              </a>
            </li>
            {/* Add more obligatory sections */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

// Styles
const footerContainerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px 0",
  textAlign: "center",
};

const footerContentStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 20px",
};

const logoImageStyle = {
  width: "100px", // Adjust size as needed
};

const socialMediaStyle = {
  marginRight: "20px",
};

const sectionsStyle = {
  // Adjust styles for the sections container
};

const listStyle = {
  listStyleType: "none",
  padding: 0,
  display: "flex",
  gap: 10,
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "14px",
};

export default Footer;
