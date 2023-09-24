import { StyledPlaceHolder } from "./styled";

interface PFPPlaceHolderProps {
  fullName: string;
  size?: 'm' | 's';
}

const PFPPlaceHolder = ({size = 'm', fullName}: PFPPlaceHolderProps)=> {
  return (
    <StyledPlaceHolder size={size}>
      {fullName.split(" ").map(name=> name[0].toUpperCase()).join("")}
    </StyledPlaceHolder>
  )
}


export default PFPPlaceHolder