import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";




export const StyledNavMenu = styled.nav`
  position: fixed;
  bottom: 0; 
  width: 100vw;
  background-color: ${( {theme} )=> theme.white};
  display: flex;
  padding: 1rem;

  justify-content: space-between;
  
  ${mediaQuery("lg")}{
    position: sticky;
    top: 0;
    height: 100vh;
    flex-flow: column nowrap;
    width: unset;
  }
`;

export const StyledMenuList = styled.ul`
  list-style-type: none;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  max-width: 68%;
  overflow: auto;
  background-color: ${( {theme} )=> theme.white};

  ${mediaQuery('lg')}{
    flex-flow: column nowrap;
    max-width: unset;
    max-height: 80%;
  }
`;

interface MenuListItemProps {
  $isActive?: boolean;
}

export const StyledMenuListItem = styled.li<MenuListItemProps>`
  padding: 1.2rem;
  border-radius: 0.8rem;
  cursor: pointer;
  flex-shrink: 0;
  background-color: ${({theme, $isActive})=> $isActive? theme.lightBlue : 'inherit'};
  transition: background-color 0.3s ease-in-out;
  & svg {
      fill: ${({theme, $isActive}) => $isActive? theme.blue : theme.gray};
      transition: fill 0.3s ease-in-out;
  }
  &:hover {
    background-color: ${( {theme} )=> theme.lightBlue};
  }

  ${mediaQuery('lg')}{
    padding: 2rem;
  }
`;

export const StyledLogo = styled.div`
  background-color: ${({theme})=> theme.shadowGray};
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  ${mediaQuery('lg')}{
    width: 4rem;
    height: 4rem;
  }
`;