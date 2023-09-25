import { Check } from "@phosphor-icons/react";
import { StyledCheckbox, } from "./styled";


interface CheckboxProps {
  option: IOption;
  onChange: Function;
  isChecked: boolean;
  disabled?: boolean;
}

const Checkbox =({
  option,
  onChange,
  isChecked,
  disabled
}: CheckboxProps)=> {
  

  return (
    <>
      <input
        type="checkbox"
        id={option.value}
        value={option.value}
        onChange={()=> !disabled && onChange(option, isChecked)}
        style={{display: "none"}}
      />
      <label htmlFor={option.value}>
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