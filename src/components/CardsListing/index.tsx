import {useState} from 'react';
import PFPPlaceHolder from "../PFPPlaceHolder";
import Tag from "../Tag";
import { candidates } from "./config";
import { StyledCandidateCard, StyledCandidateData, StyledCandidateProfile, StyledCardsListing, StyledHashtag, StyledListingHeader, StyledTagsContainer } from "./styled";
import CheckboxInput from '../CheckboxInput';



const CardsListing =()=> {

  const [checkedCands, setCheckedCands] = useState<string[]>([])

  const handleCandidatesCheck = (optionVal: string, isChecked: boolean) => {
    if (isChecked){
      setCheckedCands(checkedCands.filter(candId=> candId !== optionVal))
    } else {
      setCheckedCands(checkedCands.concat(optionVal))
    }
  }

  const areAllCandsChecked = checkedCands.length === candidates.length;

  return (
    <StyledCardsListing>
      <StyledListingHeader>
        <CheckboxInput
          optionVal='all'
          isChecked={areAllCandsChecked}
          onChange={()=> setCheckedCands(areAllCandsChecked? [] : candidates.map(cand=> cand._id))}
        />
        <h2>247 candidates</h2>
        <div style={{marginLeft: 'auto'}}>tabs</div>
      </StyledListingHeader>
      <ul>
        {candidates.map(cand=> (
          <StyledCandidateCard key={cand._id}>
            <CheckboxInput
              optionVal={cand._id}
              isChecked={checkedCands.includes(cand._id)}
              onChange={handleCandidatesCheck}
            />
            <StyledCandidateProfile >
              <PFPPlaceHolder fullName={cand.fullname} size="m"/>
              <StyledCandidateData>
                <h3 style={{fontWeight: 600}}>
                  {cand.fullname}
                </h3>
                <p>{cand.location}</p>
                <p>{cand.edu}</p>
                <StyledTagsContainer>
                  {cand.hashtags.map(hash=> <StyledHashtag key={cand.fullname + hash}>{hash}</StyledHashtag>)}
                </StyledTagsContainer>
                <StyledTagsContainer>
                  {cand.tags.map(hash=> (
                    <Tag
                      key={cand.fullname + hash}
                      option={{value: hash, display: hash}}
                      isChecked={false}
                    />
                    )
                  )}
                </StyledTagsContainer>
              </StyledCandidateData>
            </StyledCandidateProfile>
          </StyledCandidateCard>
        ))}
      </ul>
    </StyledCardsListing>
  );
}


export default CardsListing;