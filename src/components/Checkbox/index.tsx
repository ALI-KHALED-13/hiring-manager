import { Check } from "@phosphor-icons/react";
import { StyledCheckbox, } from "./styled";


interface CheckboxProps {
  optionVal: string;
  onChange: Function;
  isChecked: boolean;
  disabled?: boolean;
}

const Checkbox =({
  optionVal,
  onChange,
  isChecked,
  disabled
}: CheckboxProps)=> {
  

  return (
    <>
      <input
        type="checkbox"
        id={optionVal}
        value={optionVal}
        onChange={()=> !disabled && onChange(optionVal, isChecked)}
        style={{display: "none"}}
      />
      <label htmlFor={optionVal}>
        <StyledCheckbox
          isChecked={isChecked}
          disabled={disabled}
        >
          {isChecked && 
            <Check
              weight="bold"
              color="white"
              size={18}
              style={{flexShrink: 0}}
            />}
        </StyledCheckbox>
      </label>
    </> 
  )
}

export default Checkbox