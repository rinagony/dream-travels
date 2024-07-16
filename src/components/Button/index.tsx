import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "filled" | "outlined" | "transparent";
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border-radius: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  transition-timing-function: ease-in-out;

  ${({ variant, theme }) =>
    variant === "filled" &&
    css`
      background-color: ${theme.colors.black};
      color: ${theme.colors.white};
      border: none;

      &:hover {
        background-color: ${theme.colors.semiGray};
        color: ${theme.colors.black};
      }
    `}

  ${({ variant, theme }) =>
    variant === "outlined" &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      border: none;
      text-decoration: underline;
    `}

    ${({ variant, theme }) =>
    variant === "transparent" &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      border: 2px solid ${theme.colors.black};

      &:hover {
        background-color: ${theme.colors.semiGray};
      }
    `}
`;

const Button = ({
  variant = "filled",
  onClick,
  type = "button",
  children,
}: ButtonProps) => {
  return (
    <StyledButton type={type} variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
