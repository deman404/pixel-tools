// tools
import { useState } from "react";

//styles
import "./App.css";
//web apps componnets
import Header from "./assets/components/Header";
import Banner from "./assets/components/Banner";
import CoockisModal from "./assets/components/CoockisModal";
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
      <CoockisModal/>
    </>
  );
}

export default App;
