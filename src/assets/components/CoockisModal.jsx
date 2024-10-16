//system import
import React, { useEffect, useState } from "react";

function CoockisModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if cookies consent is already given
    const consent = getCookie("cookiesConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    setCookie("cookiesConsent", "accepted", 30); // Set a cookie for 30 days
    setIsVisible(false);
  };

  const rejectCookies = () => {
    setCookie("cookiesConsent", "rejected", 30); // Set a cookie for 30 days
    setIsVisible(false);
  };

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

  if (!isVisible) return null; // Don't render if not visible

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
        We use first-party cookies to improve our services.
      </p>
      <div style={{ display: "flex" }}>
        <p
          onClick={acceptCookies}
          style={{
            backgroundColor: "#242424",
            padding: "2px 15px",
            borderRadius: 5,
            border: "#333 solid 1px",
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          Accept
        </p>
        <p
          onClick={rejectCookies}
          style={{
            backgroundColor: "#242424",
            padding: "2px 15px",
            borderRadius: 5,
            border: "#333 solid 1px",
            marginLeft: 10,
            cursor: "pointer",
            fontSize: 13,
          }}
        >
          reject
        </p>
      </div>
    </div>
  );
}

export default CoockisModal;
