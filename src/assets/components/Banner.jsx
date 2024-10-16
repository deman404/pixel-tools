//images
import bnr1 from "../images/bnr1.png";
//icons
import { TbMouseFilled } from "react-icons/tb";
//hooks
import useWindowSize from "../Hooks/useWindowSize";

function Banner() {
  const size = useWindowSize();
  const isPhone = size.width > 800;
  return (
    <>
      <div
        className="blur"
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          padding: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: isPhone ? "30%" : "50%",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <h1
            className="fadeAnimation"
            style={{
              color: "#000",
              margin: 0,
              fontSize: isPhone ? "" : 40,
              fontWeight: "bold",
            }}
          >
            Welcom to DevLevet
          </h1>
          <h5
            className="fadeAnimation"
            style={{
              color: "#000",
              fontSize: isPhone ? 25 : 18,
              margin: 0,
              textWrap: "inherit",
            }}
          >
            Dev Levet empowers developers to share their creations and gain
            visibility. Start free and grow your audience today!
          </h5>
        </div>
        <div
          style={{
            width: "40%",
            zIndex: 10,
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={bnr1}
            alt=""
            className="fadeAnimation"
          />
        </div>
      </div>
      <TbMouseFilled color="#181920" size={30} className="mouse" style={{
        position:"absolute",
        bottom:100,
        right:"50%",
        left:"50%"
      }} />
    </>
  );
}

export default Banner;
