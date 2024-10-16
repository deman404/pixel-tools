import React, { useState } from "react";
import "./header.css";
import logo from "../images/DevElevet.png";
import { IoBagHandle } from "react-icons/io5";
import useWindowSize from "../Hooks/useWindowSize";
import Login from "./Login"; // Assuming the Login component is in the parent folder

function Header() {
  const size = useWindowSize();
  const [isLoginVisible, setLoginVisible] = useState(false);

  // Function to toggle the visibility of the Login component
  const toggleLogin = () => {
    setLoginVisible((prev) => !prev);
  };

  return (
    <div>
      <div
        className="header blur fadeDownAnimation"
        style={{
          width: size.width > 800 ? "50%" : "90%",
          left: size.width > 800 ? "25%" : "2.5%",
          right: size.width > 800 ? "25%" : "2.5%",
          justifyContent: size.width > 800 ? "space-around" : "space-between",
        }}
      >
        <img src={logo} alt="logo" className="logo" />
        
        <div className="btn" onClick={toggleLogin}>
          <p>Login</p>
        </div>
      </div>

      {/* Conditionally render the Login component based on isLoginVisible */}
      {isLoginVisible && <Login onClose={() => setLoginVisible(false)} />}
    </div>
  );
}

export default Header;
