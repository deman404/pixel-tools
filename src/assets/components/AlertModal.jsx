//system import
import React, { useEffect, useState } from "react";

function CoockisModal({Message}) {
  const [isVisible, setIsVisible] = useState(false);

  

  const acceptCookies = () => {
    setIsVisible(false);
  };


  return (
    <div
      className="fadeInRight"
      style={{
        width: 330,
        height: 80,
        backgroundColor: "#242424",
        borderRadius: 10,
        position: "fixed",
        right: 30,
        bottom: 30,
        border: "#333 solid 1px",
        padding: 10,
        zIndex: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p style={{ fontSize: 15, margin: 0 }}>
        {Message}
      </p>
      <div style={{ display: "flex" }}>
        <p
          onClick={() => setIsVisible(false)}
          style={{
            backgroundColor: "#242424",
            padding: "2px 15px",
            borderRadius: 5,
            border: "#333 solid 1px",
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          Okay
        </p>
        
      </div>
    </div>
  );
}

export default CoockisModal;
