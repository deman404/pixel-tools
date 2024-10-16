// tools
import { useState } from "react";

//styles
import "./App.css";
//web apps componnets
import Header from "./assets/components/Header";
import Banner from "./assets/components/Banner";
// images
import bg1 from "./assets/images/bg1.png";
import bg2 from "./assets/images/bg2.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ zIndex: 1, }}>
        <Header />
        <Banner />
      </div>

      <img
        src={bg1}
        alt=""
        style={{ position: "absolute", top: 10, width: "45%", zIndex: -5 }}
      />
      <img
        src={bg2}
        alt=""
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          width: "45%",
          zIndex: -5,
        }}
      />
    </>
  );
}

export default App;
