// tools
import { useState } from "react";
//web apps componnets
import Header from "../components/Header";
import Banner from "../components/Banner";
import CoockisModal from "../components/CoockisModal";
import Pricing from "../components/Pricing";
import Developper from "../components/Developper";
import Footer from "../components/Footer";
//hooks
import { ThemeProvider } from "../Hooks/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider style={{ zIndex: 1 }}>
        <Header />
        <Banner />
        <Pricing />
        <Developper />
        <Footer/>
      </ThemeProvider>
      <CoockisModal />
    </>
  );
}

export default App;
