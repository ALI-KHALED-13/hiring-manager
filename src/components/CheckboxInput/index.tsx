import { Check } from "@phosphor-icons/react";
import { StyledCheckbox } from "./styled";

interface CheckboxProps {
  optionVal: string;
  onChange: (optionVal: string, isChecked:boolean)=> void;
  isChecked: boolean;
  disabled?: boolean;
}

const CheckboxInput =({
  optionVal,
  isChecked,
  onChange,
  disabled = false
}: CheckboxProps)=>{

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
              size={17}
              style={{flexShrink: 0}}
            />}
        </StyledCheckbox>
      </label>
    </>
  );
}

export default CheckboxInput