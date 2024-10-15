

import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { TbBrandGithubFilled } from "react-icons/tb";

const Login = ({ onClose }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#0000007e",
        zIndex: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "display 1s ease-in-out",
        position: "absolute",
      }}
    >
      <div
        style={{
          height: "80%",
          width: "50%",
          background: "#ffffff",
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            padding: 10,
            display: "flex",
            justifyContent: "flex-start",
            alignContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <IoClose
            size={18}
            onClick={onClose}
            style={{
              color: "#000",
              cursor: "pointer",
              position: "relative",
              left: 0,
            }}
          />
        </div>
        <h1 style={{ color: "#000" }}>Login</h1>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 10,
          }}
        >
          <input
            className="input"
            type="email"
            placeholder="example@gmail.com"
            style={{
              width: "50%",
              height: 40,
              border: "none",
              background: "#ededed",
              borderRadius: 5,
              marginTop: 15,
              padding: 10,
            }}
            required
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            style={{
              width: "50%",
              height: 40,
              border: "none",
              background: "#ededed",
              borderRadius: 5,
              marginTop: 15,
              padding: 10,
            }}
            required
          />
          <div
            style={{
              color: "#fff",
              background: "#181920",
              marginTop: 10,
              padding: 10,
              width: "50%",
              display: "flex",
              justifyContent: "center",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
            Login
          </div>
          <p
            style={{
              color: "#18192075",
              fontSize: 15,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            or
          </p>
          <span
            style={{
              width: "60%",
              height: 1,
              background: "#1819207e",
              marginTop: 10,
              borderRadius: 10,
            }}
          />
          <div
            style={{
              marginTop: 10,
              width: "60%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FcGoogle
              size={40}
              style={{
                background: "#ededed",
                padding: 8,
                borderRadius: 5,
                cursor: "pointer",
                width: "80%",
                margin: 4,
              }}
            />
            <TbBrandGithubFilled
              size={40}
              style={{
                background: "#ededed",
                padding: 8,
                borderRadius: 5,
                color: "#181920",
                cursor: "pointer",
                width: "80%",
                margin: 4,
              }}
            />
          </div>
          <div
            style={{
              color: "#181920",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="#"
              style={{
                textDecoration: "underline",
                color: "#0081FB",
                padding: 5,
              }}
            >
              Create New account
            </a>

            <a
              href="#"
              style={{
                textDecoration: "underline",
                color: "#0081FB",
                padding: 5,
              }}
            >
              Forget password
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
