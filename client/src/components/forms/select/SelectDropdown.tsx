import { useRef, useState } from 'react';
import {
  ArrowIcon,
  SelectContainer,
  OptionItem,
  OptionsBox,
  SelectBox,
  SelectFieldWrapper,
} from './SelectDropdown.styled';
import ArrowPng from '../../../../assets/icon-chevron-down.svg';
import useClickOutside from '../../../hooks/useClickOutside';
import { FieldLabel } from '../Form.styled';

export interface IOption {
  value: string | number;
  displayValue: string | number;
}

interface IProps {
  selectedOption: string | number;
  setSelectedOption?: React.Dispatch<React.SetStateAction<any>>;
  onChange?: (event: React.MouseEvent<HTMLOptionElement>) => void;
  options: IOption[];
  label?: string;
}

const Select = ({
  selectedOption,
  setSelectedOption,
  onChange,
  options,
  label,
}: IProps) => {
  const [isActive, setIsActive] = useState(false);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => {
    if (isActive) setIsActive(!isActive);
  });

  const handleDropdownClick = () => {
    setIsActive(!isActive);
  };

  return (
    <SelectFieldWrapper>
      {label && <FieldLabel>{label}</FieldLabel>}
      <SelectContainer
        data-testid="select-container"
        ref={wrapperRef}
        onClick={handleDropdownClick}
      >
        <SelectBox data-testid="select-field">
          <span>{selectedOption}</span>
          <ArrowIcon isActive={isActive} src={ArrowPng} alt="expand" />
        </SelectBox>
        <OptionsBox data-testid="options-box" isActive={isActive}>
          {options?.map(({ value, displayValue }) => {
            return (
              <OptionItem
                key={value}
                onClick={(e: React.MouseEvent<HTMLOptionElement>) => {
                  onChange
                    ? onChange(e)
                    : setSelectedOption && setSelectedOption(value);
                }}
                value={value}
                selectedOption={value === selectedOption}
              >
                {displayValue}
              </OptionItem>
            );
          })}
        </OptionsBox>
      </SelectContainer>
    </SelectFieldWrapper>
  );
};

export default Select;
