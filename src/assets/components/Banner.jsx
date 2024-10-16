//images
import bnr1 from "../images/bnr1.png";
//icons
import { TbMouseFilled, TbAppWindowFilled } from "react-icons/tb";
//hooks
import useWindowSize from "../Hooks/useWindowSize";
//componenets
import KnowComp from "./KnowComp";

function Banner() {
  const size = useWindowSize();
  const isPhone = size.width > 800;
  const isTablet = size.width > 1300;
  return (
    <>
      <div
        style={{
          width: "100vw",
          overflowX: "hidden",
          overflowY: "auto",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
            paddingTop: 80,
            zIndex: 1,
          }}
        >
          <h1
            className="fadeAnimation"
            style={{
              color: "#fff",
              margin: 0,
              fontSize: isTablet ? 70 : 40,
            }}
          >
            Built in Days
          </h1>
          <h3
            className="fadeAnimation"
            style={{
              color: "#0081fb",
              fontSize: isTablet ? 45 : 25,
              margin: 0,
            }}
          >
            Scaled for Millions
          </h3>

          <p
            className="fadeAnimation"
            style={{
              fontSize: isTablet ? 20 : 13,
              textAlign: "center",
              fontWeight: "bold",
              width:'50%'
            }}
          >
            SupraTools is the platform for developers to easily launch, publish,
            and scale their tools. With instant deployment, analytics, and
            global reach, grow your projects to millions effortlessly
          </p>
          <div
            className="btn fadeAnimation"
            style={{ padding: "5px 15px", marginTop: 10 }}
          >
            <p style={{ fontWeight: "bold", fontSize: 15 }}>Start Now</p>
          </div>
        </div>
        <KnowComp/>
      </div>
    </>
  );
}

export default Banner;
