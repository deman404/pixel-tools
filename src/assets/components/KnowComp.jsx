//icons
import { TbMouseFilled, TbAppWindowFilled } from "react-icons/tb";
//images
import logo from "../images/logo.png";
import globale from "../images/edge-functions-dark.svg";
import graf from "../images/graf.png";
//hooks
import useWindowSize from "../Hooks/useWindowSize";
function KnowComp() {
  const size = useWindowSize();
  const isPhone = size.width > 800;
  const isTablet = size.width > 1300;
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
          backgroundColor: "#242424",
          width: isTablet ? "35%" : "100%",
          height: 300,
          padding: 10,
          borderRadius: 10,
          display: "flex",
          justifyContent: isPhone ? "space-between" : "center",
          alignItems: "center",
          border: "solid 1px #333",
        }}
      >
        <div
          style={{
            height: "100%",
            width: isPhone ? "50%" : "100%",
          }}
        >
          <h1>How it Works</h1>
          <ul>
            <li>
              <p style={{ fontSize: 18 }}>Create Your Tools</p>
            </li>
            <li>
              <p style={{ fontSize: 18 }}>Add Them to SupraTools</p>
            </li>
            <li>
              <p style={{ fontSize: 18 }}>Reach Your Audience</p>
            </li>
          </ul>
        </div>
        <img
          src={logo}
          alt="icon"
          style={{ width: 180,display:isPhone ? "block":"none" }}
          className="imageShadow"
        />
      </div>
      <div
        className="fadeAnimation"
        style={{
          backgroundColor: "#242424",
          width: isTablet ? "30%" : "106%",
          height: 320,
          borderRadius: 10,
          position: "relative", // make the parent container relative
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          border: "solid 1px #333",
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
            color: "white",
            backgroundColor: "#242424",
            padding: "5px 15px",
            borderRadius: 10,
            border: "solid 1px #333",
          }}
        >
          Reach the globale
        </div>
        <h1 style={{ position: "absolute", top: 0, padding: "5px 10px" }}>
          Engage with a global audience
        </h1>
      </div>

      <div
        className="fadeAnimation"
        style={{
          backgroundColor: "#242424",
          width: isTablet ? "30%" : "106%",
          height: 320,
          borderRadius: 10,
          position: "relative", // make the parent container relative
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          border: "solid 1px #333",
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
            opacity: 0.3,
          }}
        />
        <div
          style={{
            zIndex: 1,
            color: "white",
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
            color: "white",
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
            color: "white",
            position: "absolute",
            right: "4%",
            top: "35%",
          }}
        >
          70k
        </div>
        <h1 style={{ position: "absolute", top: 0, padding: "5px 10px" }}>
          Get all analytics to reach gools
        </h1>
      </div>
    </div>
  );
}

export default KnowComp;
