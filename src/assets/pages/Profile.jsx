import React from "react";
//hooks
import { ThemeProvider } from "../Hooks/ThemeContext";
//Components
import HeaderHome from "../components/HeaderHome";
import ProfileSection from "../components/ProfileSection"

export default function Profile() {
  return (
    <>
      <ThemeProvider>
        <HeaderHome />
        <ProfileSection/>
      </ThemeProvider>
    </>
  );
}
