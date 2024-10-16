import React from "react";

const Box = (props) => {
  const { title, btnClass, btnTitle, price, feature } = props;

  return (
    <div
      className="fadeAnimation"
      style={{
        width: 250,
        height: 400,
        backgroundColor: "#121212",
        border: "1px solid #333",
        borderRadius: 10,
        padding: "20px",
        color: "#fff",
      }}
    >
      <div
        style={{
          paddingBottom: "10px",
        }}
      >
        <h4
          style={{
            margin: 0,
            fontWeight: "normal",
            fontSize: "1.5rem",
          }}
        >
          {title}
        </h4>
      </div>
      <div style={{ height: "70%" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          ${price} <small>/ mo</small>
        </h1>
        <ul
          style={{
            listStyleType: "none",
            marginTop: "1rem",
            marginBottom: "1.5rem",
            padding: 0,
            fontSize:"1rem"
          }}
        >
          {feature &&
            feature.map((data, index) => {
              return <li key={index}>{data}</li>;
            })}
        </ul>
      </div>
      <button
        type="button"
        style={{
          width: "100%",
          fontSize: "1.25rem",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#0081fb",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        {btnTitle}
      </button>
    </div>
  );
};

export default Box;
