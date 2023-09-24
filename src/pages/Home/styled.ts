import styled from "styled-components";
import { mediaQuery } from "../../utils/mediaQuery";



export const StyledPageCotainer = styled.main`
  padding: 2rem;
  ${mediaQuery('lg')}{
    padding: 3rem;
    display: flex;
    gap: 3.2rem;
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


export const StyledFiltersContainer = styled.aside`
  background-color: ${({theme})=> theme.white};
  padding: 1.5rem;
`;

export const FilterItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 0;
  border-top: 1px solid ${({theme})=> theme.lightGray};
`;

export const StyledToolsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;