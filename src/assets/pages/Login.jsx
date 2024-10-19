//hooks
import { ThemeProvider } from "../Hooks/ThemeContext";

//icons
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { TbBrandGithubFilled } from "react-icons/tb";
//components
import LoginComp from "../components/LoginComp";
const Login = () => {
  return (
    <>
      <ThemeProvider>
        <LoginComp />
      </ThemeProvider>
    </>
  );
};

export default Login;
