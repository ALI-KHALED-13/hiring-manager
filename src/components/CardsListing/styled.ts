import styled from "styled-components";



export const StyledCardsListing = styled.div`
  background-color : ${({theme})=> theme.white};
  padding: 1rem;
`;

export const StyledListingHeader = styled.div`
  display:flex;
  gap: 3.2rem;
  padding: 1.6rem;
  margin: 1rem 0;

  & > h2 {
    color: ${({theme})=> theme.blue};
    font-weight: 600;
  }
  
`;

export const StyledCandidateCard = styled.li`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  padding: 1.6rem;
  margin: 1rem 0;
`;

export const StyledCandidateProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

`;

export const StyledCandidateData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const StyledHashtag = styled.span`
  color: ${({theme})=> theme.blue};
  font-size: 1rem;
`;

export const StyledTagsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;