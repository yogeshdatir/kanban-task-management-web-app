import { ReactElement, useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import {
  OptionItem,
  DropdownBox,
  DropdownIcon,
  DropdownMenuContainer,
} from '../forms/select/SelectDropdown.styled';

export interface IOption {
  value: string | number;
  displayValue: string | number;
}

interface IProps {
  dropdownMenu: string | ReactElement;
  options: IOption[];
}

const DropdownMenu = ({ dropdownMenu, options }: IProps) => {
  const [isActive, setIsActive] = useState(false);

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => {
    if (isActive) setIsActive(!isActive);
  });

  const handleDropdownClick = () => {
    setIsActive(!isActive);
  };

  return (
    <DropdownMenuContainer
      data-testid="dropdownMenu-container"
      ref={wrapperRef}
      onClick={handleDropdownClick}
    >
      <DropdownIcon data-testid="dropdownMenu-field">
        {dropdownMenu}
      </DropdownIcon>
      <DropdownBox data-testid="options-box" isActive={isActive}>
        {options?.map(({ value, displayValue }) => {
          return (
            <OptionItem
              key={value}
              // onClick={() => setSelectedOption(value)}
              value={value}
            >
              {displayValue}
            </OptionItem>
          );
        })}
      </DropdownBox>
    </DropdownMenuContainer>
  );
};

export default DropdownMenu;
