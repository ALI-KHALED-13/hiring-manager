import styled, { css } from 'styled-components';

interface StyledTagsProps {
  isChecked: boolean;
}

export const StyledTag = styled.div<StyledTagsProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  & > input[type="checkbox"] {
    display: none;
  }

  ${({isChecked})=> isChecked && css`
    & label, &:hover label {
      background-color: ${({theme}) => theme.blue};
      color: ${({theme}) => theme.white};
    }
  `};
`;

export const StyledLabel = styled.label`
  padding: 2px 10px;
  border: none;
  border-radius: 1rem;
  background-color: ${({theme}) => theme.lightGreen};
  color: ${({theme}) => theme.green};
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;

  @media (hover: hover) { // for devices supporting hover
    &:hover {
      background-color: ${({theme}) => theme.grayishBlue};
      color: ${({theme}) => theme.blue};
    }
  }

  &:active {
    background-color: ${({theme}) => theme.blue};
    color: ${({theme}) => theme.white};
  }
`;
