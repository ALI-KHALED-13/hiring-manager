import {useState} from 'react';
import PFPPlaceHolder from "../PFPPlaceHolder";
import Tag from "../Tag";
import { candidates } from "./config";
import { StyledCandidateCard, StyledCandidateData, StyledCandidateProfile, StyledCardsListing, StyledHashtag } from "./styled";
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

  return (
    <StyledCardsListing>
      <div>
        <h3>244 candidates</h3>
        <div>tabs</div>
      </div>
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
                <h3>{cand.fullname}</h3>
                <p>{cand.location}</p>
                <p>{cand.edu}</p>
                <div>
                  {cand.hashtags.map(hash=> <StyledHashtag key={cand.fullname + hash}>{hash}</StyledHashtag>)}
                </div>
                <div>
                  {cand.tags.map(hash=> (
                    <Tag
                      key={cand.fullname + hash}
                      option={{value: hash, display: hash}}
                      isChecked={false}
                    />
                    )
                  )}
                </div>
              </StyledCandidateData>
            </StyledCandidateProfile>
          </StyledCandidateCard>
        ))}
      </ul>
    </StyledCardsListing>
  );
}


export default CardsListing;