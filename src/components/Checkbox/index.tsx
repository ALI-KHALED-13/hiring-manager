import { Check } from "@phosphor-icons/react";
import { StyledCheckbox, StyledLabel } from "./styled";
import Tag from "../Tag";

interface CheckboxProps {
  option: IOption;
  onChange: Function;
  isChecked: boolean;
  shape?: string;
  disabled?: boolean;
}

const Checkbox =({
  option,
  onChange,
  shape = "checkbox",
  isChecked,
  disabled
}: CheckboxProps)=> {
  

  return shape === "tag"? (
    <Tag
      isChecked={isChecked}
      option={option}
      onChange={onChange}
    />
  ):(
    <>
      <input
        type="checkbox"
        id={option.value}
        value={option.value}
        onChange={()=> !disabled && onChange(option, isChecked)}
        style={{display: "none"}}
      />
      <StyledLabel
        disabled={disabled}
        htmlFor={option.value}
      >
        <StyledCheckbox
          isChecked={isChecked}
          disabled={disabled}
        >
          {isChecked && 
            <Check
              weight="bold"
              color="white"
              size={17}
              style={{flexShrink: 0}}
            />}
        </StyledCheckbox>
        {option.display}
      </StyledLabel>
    </> 
  )
}

export default Checkbox