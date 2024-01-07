import { CSSProperties, ReactElement, useRef, useState } from 'react';
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
  style?: CSSProperties;
}

interface IProps {
  dropdownMenuIcon: string | ReactElement;
  options: IOption[];
  onChange?: (value: string | number) => void;
}

const DropdownMenu = ({ dropdownMenuIcon, options, onChange }: IProps) => {
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
        {dropdownMenuIcon}
      </DropdownIcon>
      <DropdownBox data-testid="options-box" isActive={isActive}>
        {options?.map(({ value, displayValue, style }) => {
          return (
            <OptionItem
              key={value}
              onClick={() => {
                onChange && onChange(value);
              }}
              value={value}
              style={style}
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
