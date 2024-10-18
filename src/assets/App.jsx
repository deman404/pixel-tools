// tools
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//styles
import "./App.css";

//pages
import Home from "../assets/pages/Home";
import Login from "../assets/pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
