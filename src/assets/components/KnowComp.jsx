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
        display: isTablet ? "flex" : "block",
        marginTop: 20,
      }}
    >
      <div
        className="fadeAnimation"
        style={{
          backgroundColor: "#242424",
          width: isTablet ? "50%" : "100%",
          height: 300,
          padding: 10,
          margin: 5,
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
        <div
          style={{
            backgroundColor: "#262626",
            width: 250,
            height: 250,
            border: "solid 1px #333",
            borderRadius: 10,
            display: isPhone ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 30,
          }}
        >
          <div
            style={{
              width: 220,
              height: 220,
              border: "solid 1px #333",
              borderRadius: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 180,
                height: 180,
                border: "solid 1px #333",
                borderRadius: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 140,
                  height: 140,
                  border: "solid 1px #333",
                  borderRadius: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 100,
                    border: "solid 1px #333",
                    borderRadius: 60,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={logo}
                    alt="icon"
                    style={{ width: 230 }}
                    className="imageShadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="fadeAnimation"
        style={{
          backgroundColor: "#242424",
          width: isTablet ? "30%" : "106%",
          height: 320,
          margin: 5,
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
          margin: 5,
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
            opacity:0.3
          }}
        />
        <div
          style={{
            zIndex: 1,
            color: "white",
            position:"absolute",
            right:"40%",
            top:"45%"
          }}
        >
          30k
        </div>
        <div
          style={{
            zIndex: 1,
            color: "white",
            position:"absolute",
            right:"63%",
            top:"56%"
          }}
        >
          10k
        </div>
        <div
          style={{
            zIndex: 1,
            color: "white",
            position:"absolute",
            right:"4%",
            top:"35%"
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
