import React from "react";
//hooks
import { useTheme } from "../Hooks/ThemeContext";

const Radio = () => {
  const { theme } = useTheme();
  const background = theme === "light" ? "aliceblue" : "#121212";
  const backgroundCompt = theme === "light" ? "#ffffff" : "#242424";
  const color = theme === "light" ? "#000000" : "aliceblue";
  const border = theme === "light" ? "#ededed" : "#333";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        backgroundColor: backgroundCompt,
        justifyContent: "center",
        borderRadius: "5px",
        borderColor: border,
        borderWidth: 1,
        borderStyle: "solid",
        padding: 5,
        gap: 5,
      }}
    >
      <button
        className="value"
        style={{
          backgroundColor: "transparent",
          borderColor: border,
          borderWidth: 1,
          borderStyle: "solid",
          padding: "10px",
          color: color,
          display: "flex",
          position: "relative",
          gap: "5px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = background)}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        onFocus={(e) => (e.target.style.backgroundColor = background)}
        onBlur={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        Product
      </button>
      <button
        className="value"
        style={{
          backgroundColor: "transparent",
          borderColor: border,
          borderWidth: 1,
          borderStyle: "solid",
          padding: "10px",
          color:color,
          display: "flex",
          position: "relative",
          gap: "5px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = background)}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        onFocus={(e) => (e.target.style.backgroundColor = background)}
        onBlur={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        Developers
      </button>
      <button
        className="value"
        style={{
          backgroundColor: "transparent",
          borderColor: border,
          borderWidth: 1,
          borderStyle: "solid",
          padding: "10px",
          color: color,
          display: "flex",
          position: "relative",
          gap: "5px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = background)}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        onFocus={(e) => (e.target.style.backgroundColor = background)}
        onBlur={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        Pricing
      </button>
      <button
        className="value"
        style={{
          backgroundColor: "transparent",
          borderColor: border,
          borderWidth: 1,
          borderStyle: "solid",
          padding: "10px",
          color: color,
          display: "flex",
          position: "relative",
          gap: "5px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = background)}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        onFocus={(e) => (e.target.style.backgroundColor = background)}
        onBlur={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        Docs
      </button>
      <button
        className="value"
        style={{
          backgroundColor: "transparent",
          borderColor: border,
          borderWidth: 1,
          borderStyle: "solid",
          padding: "10px",
          color: color,
          display: "flex",
          position: "relative",
          gap: "5px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = background)}
        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
        onFocus={(e) => (e.target.style.backgroundColor = background)}
        onBlur={(e) => (e.target.style.backgroundColor = "transparent")}
      >
        Login
      </button>
    </div>
  );
};

export default Radio;
