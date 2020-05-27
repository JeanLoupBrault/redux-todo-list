import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const HookIcon = () => {
  return (
    <>
      {/* <div>Cart Icon</div> */}
      <ImageContainer>
        <Link to="/">
          <img src="/Hook.png" alt="todo" width="40px" height="40px"></img>
        </Link>
      </ImageContainer>
    </>
  );
};

const ImageContainer = styled.div`
  background-color: #ffffff;
`;

export default HookIcon;
