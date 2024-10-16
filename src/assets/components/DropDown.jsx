import React from "react";
import styled from "styled-components";

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="input">
        <button className="value">Product</button>
        <button className="value">Developers</button>
        <button className="value">Pricing</button>
        <button className="value">Docs</button>
        <button className="value">Login</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: #121212;
    justify-content: center;
    border-radius: 5px;
    border: "solid 1px #333";
  }

  .value {
    background-color: transparent;
    border: "solid 1px #333";
    padding: 10px;
    color: white;
    display: flex;
    position: relative;
    gap: 5px;
    cursor: pointer;
    border-radius: 4px;
  }

  .value:not(:active):hover,
  .value:focus {
    background-color: #21262c;
  }

  .value:focus,
  .value:active {
    background-color: #1a1f24;
    outline: none;
  }

  .value::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -10px;
    width: 5px;
    height: 80%;
    background-color: #2f81f7;
    border-radius: 5px;
    opacity: 0;
  }

  .value:focus::before,
  .value:active::before {
    opacity: 1;
  }

  .value svg {
    width: 15px;
  }
`;

export default Radio;
