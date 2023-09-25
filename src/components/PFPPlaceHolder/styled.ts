import styled from "styled-components";

interface PlaceholderProps {
  size: 'm' | 's';
}

export const StyledPlaceHolder = styled.div<PlaceholderProps>`
  user-select: none;
  width: ${({size})=> size == "m"? 10 : 4 }rem;
  height: ${({size})=> size == "m"? 10 : 4 }rem;
  padding: ${({size})=> size == "m"? 3 : 1 }rem;
  border-radius: 50%;

  color: ${({theme})=> theme.skyBlue};
  background-color: ${({theme})=> theme.grayishBlue};
  display: grid;
  place-items: center;
  font-size: ${({size})=> size == "m"? 2.5 : 1.25 }rem;
  font-weight: 600;
`;