import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";



export const StyledPageCotainer = styled.main`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  ${mediaQuery('lg')}{
    padding: 3rem;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  gap: 3rem;
  min-width: 25%;
`;

export const StyledPageHeader = styled.h1`
  color: ${({theme})=> theme.blue};
  font-size: 2rem;
  font-weight: 600;

`;

export const StyledFiltersContainer = styled.aside`
  background-color: ${({theme})=> theme.white};
  padding: 1.5rem;
  & > .space-flex {
    padding: 1.8rem 0 ;
  }
`;

export const FilterItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.8rem 0;
  border-top: 1px solid ${({theme})=> theme.lightGray};
`;

export const StyledToolsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  & > button {
    padding: 8px;
  }
`;