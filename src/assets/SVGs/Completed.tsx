import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
  width: 20px;
  height: 20px;
`;

const Completed = () => (
<Svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.25 14.25L9 12"
      stroke="#898989"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 10.5L11.25 14.25"
      stroke="#898989"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21C7.02944 21 3 16.9706 3 12V12C3 7.02944 7.02944 3 12 3V3C16.9706 3 21 7.02944 21 12V12C21 16.9706 16.9706 21 12 21V21Z"
      stroke="#898989"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Completed;
