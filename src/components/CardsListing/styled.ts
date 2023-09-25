import styled from "styled-components";



export const StyledCardsListing = styled.div`
  background-color : ${({theme})=> theme.white};
  padding: 1rem;
`;


export const StyledCandidateCard = styled.li`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  padding: 1.6rem;
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
  font-size: 0.8rem;
`;