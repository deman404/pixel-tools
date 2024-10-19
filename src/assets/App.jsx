// tools
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//styles
import "./App.css";

//pages
import Landing from "./pages/Landing";
import Login from "../assets/pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
