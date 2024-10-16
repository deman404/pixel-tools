import React from "react";
import Box from "./Box";

//hooks
import useWindowSize from "../Hooks/useWindowSize";

const Pricing = () => {
  const size = useWindowSize();
  const isPhone = size.width > 800;
  const isTablet = size.width > 1300;
  const featureBox1 = [
    "post one app or tool",
    "Email support",
    "Basic analytics",
    "Limited visibility",
  ];
  const featureBox2 = [
    "post up to 3-5 apps/tools",
    "Email support",
    "Moderate Visibility",
    "Help center access",
    "Basic Analytics",
  ];
  const featureBox3 = [
    "Unlimited Posting",
    "Featured Listings",
    "Advanced Analytics",
    "Enhanced Marketing",
    "Help center access",
    "Email support",
  ];

  const cardDeckStyle = {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    gap: "20px",
    margin: "20px 0px",
    flexWrap: "wrap",
  };

  return (
    <div
      style={{
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
          color: "#fff",
          margin: 0,
          fontSize: isTablet ? 70 : 40,
        }}
      >
        Predictable pricing
      </h1>
      <h3
        className=" fadeDownAnimation"
        style={{
          color: "#0081fb",
          fontSize: isTablet ? 45 : 25,
          margin: 0,
        }}
      >
        designed to scale
      </h3>
      <div style={cardDeckStyle}>
        <Box
          price="0"
          title="Free"
          btnClass="btn-outline-primary"
          btnTitle="Sign up for free"
          feature={featureBox1}
        />
        <Box
          feature={featureBox2}
          price="1"
          title="Starter"
          btnClass="btn-primary"
          btnTitle="Get started"
        />
        <Box
          feature={featureBox3}
          price="9"
          title="Advance"
          btnClass="btn-primary"
          btnTitle="Get started"
        />
      </div>
    </div>
  );
};

export default Pricing;
