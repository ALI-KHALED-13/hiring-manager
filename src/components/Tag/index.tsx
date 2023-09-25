import { StyledTag, StyledLabel } from './styled';

interface TagProps {
  option: IOption;
  isChecked: boolean;
}

const Tag = ({option, isChecked}: TagProps) => {
  return (
    <StyledTag isChecked={isChecked}>
      <input
        type="checkbox"
        id={option.value}
        value={option.value}
      />
      <StyledLabel htmlFor={option.value}>{option.display}</StyledLabel>
    </StyledTag>
  )
};

export default Tag;
