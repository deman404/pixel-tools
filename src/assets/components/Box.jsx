import React from "react";

//Hooks
import { useTheme } from "../Hooks/ThemeContext";

const Box = (props) => {
  const { title, btnClass, btnTitle, price, feature } = props;
  const { theme } = useTheme();
  const background = theme === "light" ? "aliceblue" : "#121212";
  const backgroundCompt = theme === "light" ? "#ffffff" : "#242424";
  const color = theme === "light" ? "#000000" : "aliceblue";
  const border = theme === "light" ? "#ededed" : "#333";
  return (
    <div
      className="fadeAnimation"
      style={{
        width: 250,
        height: 400,
        backgroundColor: backgroundCompt,
        borderColor: border,
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 10,
        padding: "20px",
        color: color,
      }}
    >
      <div
        style={{
          paddingBottom: "10px",
        }}
      >
        <h4
          style={{
            margin: 0,
            fontWeight: "normal",
            fontSize: "1.5rem",
          }}
        >
          {title}
        </h4>
      </div>
      <div style={{ height: "70%" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          ${price} <small>/ mo</small>
        </h1>
        <ul
          style={{
            listStyleType: "none",
            marginTop: "1rem",
            marginBottom: "1.5rem",
            padding: 0,
            fontSize: "1rem",
          }}
        >
          {feature &&
            feature.map((data, index) => {
              return <li key={index}>{data}</li>;
            })}
        </ul>
      </div>
      <button
        type="button"
        style={{
          width: "100%",
          fontSize: "1.25rem",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#0081fb",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {btnTitle}
      </button>
    </div>
  );
};

export default Box;
