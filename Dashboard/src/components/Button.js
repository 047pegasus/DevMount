import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  margin: 10px 10px 0px 0px;
  background-color: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`;

const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
