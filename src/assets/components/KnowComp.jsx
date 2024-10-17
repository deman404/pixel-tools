//icons
import { TbMouseFilled, TbAppWindowFilled } from "react-icons/tb";
//images
import logo from "../images/logo.png";
import globale from "../images/edge-functions-dark.svg";
import graf from "../images/graf.png";
//hooks
import useWindowSize from "../Hooks/useWindowSize";
import { useTheme } from "../Hooks/ThemeContext";

function KnowComp() {
  const size = useWindowSize();
  const isPhone = size.width > 800;
  const isTablet = size.width > 1300;
  const { theme } = useTheme();
  const background = theme === "light" ? "aliceblue" : "#121212";
  const backgroundCompt = theme === "light" ? "#ffffff" : "#242424";
  const color = theme === "light" ? "#000000" : "aliceblue";
  const border = theme === "light" ? "#ededed" : "#333";

  return (
    <div
      style={{
        width: "80vw",
        display: "flex",
        marginTop: 20,
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      <div
        className="fadeAnimation"
        style={{
          backgroundColor: backgroundCompt,
          width: isTablet ? "35%" : "100%",
          height: 300,
          padding: 10,
          borderRadius: 10,
          display: "flex",
          justifyContent: isPhone ? "space-between" : "center",
          alignItems: "center",
          borderColor: border,
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        <div
          style={{
            height: "100%",
            width: isPhone ? "50%" : "100%",
          }}
        >
          <h1 style={{ color: color }}>How it Works</h1>
          <ul>
            <li>
              <p style={{ fontSize: 18, color: color }}>Create Your Tools</p>
            </li>
            <li>
              <p style={{ fontSize: 18, color: color }}>
                Add Them to SupraTools
              </p>
            </li>
            <li>
              <p style={{ fontSize: 18, color: color }}>Reach Your Audience</p>
            </li>
          </ul>
        </div>
        <img
          src={logo}
          alt="icon"
          style={{ width: 180, display: isPhone ? "block" : "none" }}
          className="imageShadow"
        />
      </div>
      <div
        className="fadeAnimation"
        style={{
          backgroundColor: backgroundCompt,
          width: isTablet ? "30%" : "106%",
          height: 320,
          borderRadius: 10,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderColor: border,
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        <img
          className="imageShadow"
          src={globale}
          alt="globale"
          style={{
            position: "absolute", // make the image fill the parent container
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // cover the entire container
            zIndex: 0, // send the image behind the content
          }}
        />
        <div
          style={{
            zIndex: 1,
            color: color,
            backgroundColor: backgroundCompt,
            padding: "5px 15px",
            borderRadius: 10,
            borderColor: border,
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          Reach the globale
        </div>
        <h1 style={{ position: "absolute", top: 0, padding: "5px 10px",color:color }}>
          Engage with a global audience
        </h1>
      </div>

      <div
        className="fadeAnimation"
        style={{
          backgroundColor: backgroundCompt,
          width: isTablet ? "30%" : "106%",
          height: 320,
          borderRadius: 10,
          position: "relative", // make the parent container relative
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderColor: border,
          borderWidth: 1,
          borderStyle: "solid",
        }}
      >
        <img
          src={graf}
          alt="graf"
          style={{
            position: "absolute", // make the image fill the parent container
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // cover the entire container
            zIndex: 0, // send the image behind the content
            opacity: 0.8,
          }}
        />
        <div
          style={{
            zIndex: 1,
            color: color,
            position: "absolute",
            right: "40%",
            top: "45%",
          }}
        >
          30k
        </div>
        <div
          style={{
            zIndex: 1,
            color: color,
            position: "absolute",
            right: "63%",
            top: "56%",
          }}
        >
          10k
        </div>
        <div
          style={{
            zIndex: 1,
            color: color,
            position: "absolute",
            right: "4%",
            top: "35%",
          }}
        >
          70k
        </div>
        <h1 style={{ position: "absolute", top: 0, padding: "5px 10px",color:color }}>
          Get all analytics to reach gools
        </h1>
      </div>
    </div>
  );
}

export default KnowComp;
