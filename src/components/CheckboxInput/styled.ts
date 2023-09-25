import styled, { css } from "styled-components";

interface StyledCheckboxProps {
  isChecked: boolean;
  disabled?: boolean;
}

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  width: 1.8rem;
  height: 1.8rem;
  border: none;
  box-shadow: inset 0 0 0 2px ${({theme , disabled})=> theme[ disabled ? "gray" : "blue"] };
  border-radius: 2px;
  background-color: transparent;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  ${ ({ isChecked, disabled, theme})=> isChecked && css`
    background-color: ${theme[disabled ? "gray" : "blue"]};
    display: flex;
    justify-content: center;
  `}

`;