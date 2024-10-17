import React from "react";
//hooks
import useWindowSize from "../Hooks/useWindowSize";
import { useTheme } from "../Hooks/ThemeContext";
//images
import profile from "../images/profile.jpg";
//icons
import { AiFillInstagram } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

function Developper() {
  const size = useWindowSize();
  const isPhone = size.width > 800;
  const isTablet = size.width > 1300;
  const { theme } = useTheme();
  const background = theme === "light" ? "aliceblue" : "#121212";
  const backgroundCompt = theme === "light" ? "#ffffff" : "#242424";
  const color = theme === "light" ? "#000000" : "aliceblue";
  const border = theme === "light" ? "#ededed" : "#333";

  const DevBox = (props) => {
    const { name, post, word, instagram, github, linkedin } = props;
    return (
      <>
        <div
          style={{
            width: 200,
            height: 200,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: border,
            borderRadius: 10,
            background: backgroundCompt,
            margin: 5,
            gap: 20,
            padding: 10,
          }}
        >
          <div style={{ width: 200, height: 50, display: "flex" }}>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            >
              <img
                src={profile}
                style={{ width: "100%", height: "100%", borderRadius: 50 }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 150,
                justifyContent: "center",
                paddingLeft: 10,
              }}
            >
              <h3 style={{ fontSize: 15, margin: 0, color: color }}>{name}</h3>
              <p style={{ fontSize: 13, margin: 0, color: color }}>{post}</p>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <blockquote className="quote" style={{ color: color }}>
              {word}
            </blockquote>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <a href={instagram}>
              <AiFillInstagram
                size={30}
                style={{ color: color, cursor: "pointer" }}
                className="hover"
              />
            </a>
            <a href={github}>
              <DiGithubBadge
                size={30}
                style={{ color: color, cursor: "pointer" }}
                className="hover"
              />
            </a>
            <a href={linkedin}>
              <FaLinkedin
                size={30}
                style={{ color: color, cursor: "pointer" }}
                className="hover"
              />
            </a>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div
        style={{
          backgroundColor: background,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          paddingTop: 20,
          zIndex: 1,
        }}
      >
        <h1
          className="fadeDownAnimation"
          style={{
            color: color,
            margin: 0,
            fontSize: isTablet ? 70 : 40,
          }}
        >
          Team of developers
        </h1>
        <h3
          className=" fadeDownAnimation"
          style={{
            color: "#0081fb",
            fontSize: isTablet ? 45 : 25,
            margin: 0,
          }}
        >
          To give you best try
        </h3>
        <div
          style={{
            backgroundColor: background,
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            paddingTop: 20,
            zIndex: 1,
            flexWrap:"wrap"
          }}
        >
          <DevBox
            name="Ayman azhar"
            post="Founder"
            word="the easy way is the hard end way"
            instagram="https://react-icons.github.io/react-icons/search/#q=link"
            github="https://react-icons.github.io/react-icons/search/#q=link"
            linkedin="https://react-icons.github.io/react-icons/search/#q=link"
          />
          
        </div>
      </div>
    </>
  );
}

export default Developper;
