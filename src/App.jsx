// tools
import { useState } from "react";

//styles
import "./App.css";
//web apps componnets
import Header from "./assets/components/Header";
import Banner from "./assets/components/Banner";
import CoockisModal from "./assets/components/CoockisModal";
import Pricing from "./assets/components/Pricing";
// images
import bg1 from "./assets/images/bg1.png";
import bg2 from "./assets/images/bg2.png";
//hooks
import { ThemeProvider } from "./assets/Hooks/ThemeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider style={{ zIndex: 1}}>
        <Header />
        <Banner />
        <Pricing />
      </ThemeProvider>
      <CoockisModal />
    </>
  );
}

export default App;
