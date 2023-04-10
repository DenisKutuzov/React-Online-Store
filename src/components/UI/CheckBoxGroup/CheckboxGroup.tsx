import React, { FC } from 'react'

interface ICheckboxGroupProps {
  numbersCard? : number | null,
  check?: boolean
    className?: string;
    checkedBoxByGroup: any;
    id: string;
    nameGroup: string;
    label: string;
    onChange: (
      event: React.ChangeEvent<HTMLInputElement>,
      nameGroup: string
    ) => void;
  }
  
  export const CheckboxGroup: FC <ICheckboxGroupProps> = ({
    numbersCard,
    check,
    className,
    checkedBoxByGroup,
    id,
    nameGroup,
    label,
    onChange,
  }) => {
    
    const isChecked: boolean = checkedBoxByGroup[nameGroup].includes(label);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event, nameGroup);
    };
  
    return (
      <label
       
        htmlFor={id}
      >
        <span >
      
          <input style={{marginRight : '10px'}}
            checked={isChecked}
            id={id}
            name={label}
            type="checkbox"
            value={label}
            onChange={handleChange}
          />
        </span>
        {label && <span>{label}</span>} {numbersCard && <span>({numbersCard})</span>}
      </label>
    );
  };