//icons
import { TbMouseFilled, TbAppWindowFilled } from "react-icons/tb";
//images
import logo from "../images/logo.png";
import globale from "../images/edge-functions-dark.svg";
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
          justifyContent: "space-between",
          alignItems: "center",
          border: "solid 1px #333",
        }}
      >
        <div style={{ height: "100%", width: "50%" }}>
          <h1 style={{ display: "flex", alignItems: "center" }}>How it work</h1>
          <ul>
            <li>
              <p>Create your tools</p>
            </li>
            <li>
              <p>Add it to suoraTools</p>
            </li>
            <li>
              <p>Get your audience</p>
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 50,
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
                  <img src={logo} alt="icon" style={{ width: 230 }} />
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
          width: isTablet ? "30%" : "100%",
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
          get audience from the glob
        </h1>
      </div>

      <div
        className="fadeAnimation"
        style={{
          backgroundColor: "#242424",
          width: isTablet ? "30%" : "100%",
          height: 300,
          padding: 10,
          margin: 5,
          borderRadius: 10,
          border: "solid 1px #333",
        }}
      ></div>
    </div>
  );
}

export default KnowComp;
