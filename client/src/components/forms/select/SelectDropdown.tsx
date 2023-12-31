import { useRef, useState } from 'react';
import {
  ArrowIcon,
  SelectContainer,
  OptionItem,
  OptionsBox,
  SelectBox,
} from './SelectDropdown.styled';
import ArrowPng from '../../../../assets/icon-chevron-down.svg';
import useClickOutside from '../../../hooks/useClickOutside';

export interface IOption {
  value: string | number;
  displayValue: string | number;
}

interface IProps {
  selectedOption: string | number;
  setSelectedOption: any;
  options: IOption[];
}

const Select = ({ selectedOption, setSelectedOption, options }: IProps) => {
  const [isActive, setIsActive] = useState(false);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => {
    if (isActive) setIsActive(!isActive);
  });

  const handleDropdownClick = () => {
    setIsActive(!isActive);
  };

  return (
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
              onClick={() => setSelectedOption(value)}
              value={value}
              selectedOption={value === selectedOption}
            >
              {displayValue}
            </OptionItem>
          );
        })}
      </OptionsBox>
    </SelectContainer>
  );
};

export default Select;
