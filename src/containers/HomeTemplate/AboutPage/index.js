import React from "react";
import styled from "styled-components";
const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ clr }) => clr || "red"};
`;
const Wrapper = styled.div`
  padding: 4rem;
  background: papayawhip;
  ${Title} {
    color: red !important;
  }
`;

const Hello = styled(Title)``;
export default function AboutPage() {
  return (
    <>
      <Wrapper>
        <Hello clr="blue">About Page</Hello>
      </Wrapper>
    </>
  );
}
