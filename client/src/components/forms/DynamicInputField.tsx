import {
  DynamicInputFieldWrapper,
  DynamicRow,
  DynamicRowsWrapper,
  FieldLabel,
  Input,
} from './Form.styled';
import CrossIcon from '../../../assets/icon-cross.svg?react';
import { PrimaryBtn } from '../Header.styled';
import { useState } from 'react';
import { InputFieldProps } from './InputField';

const DynamicRowComp = ({
  updateInputCounter,
  inputProps,
}: {
  updateInputCounter: (change: number) => void;
  inputProps?: InputFieldProps['inputProps'];
}) => {
  return (
    <DynamicRow>
      <Input type="text" {...inputProps} />
      <CrossIcon
        style={{ cursor: 'pointer' }}
        onClick={() => updateInputCounter(-1)}
      />
    </DynamicRow>
  );
};

type Props = {
  label?: string;
  allInputProps?: InputFieldProps['inputProps'][];
  addRowBtnText?: string;
  commonOnChange?: (e: React.ChangeEvent, index: number) => void | undefined;
};

const DynamicInputField = ({
  label,
  allInputProps,
  addRowBtnText,
  commonOnChange,
}: Props) => {
  const [inputCounter, setInputCounter] = useState(1);

  const updateInputCounter = (change: number) => {
    if (change > 0) setInputCounter((inputCounter) => inputCounter + change);
    else {
      inputCounter > 1 &&
        setInputCounter((inputCounter) => inputCounter + change);
    }
  };

  return (
    <DynamicInputFieldWrapper>
      <FieldLabel>{label}</FieldLabel>
      <DynamicRowsWrapper>
        {[...Array(inputCounter)].map((_, index: number) => {
          return (
            <DynamicRowComp
              key={index}
              updateInputCounter={updateInputCounter}
              inputProps={Object.assign(
                {},
                {
                  onChange: (e: React.ChangeEvent) => {
                    commonOnChange && commonOnChange(e, index);
                  },
                },
                allInputProps && allInputProps[index]
              )}
            />
          );
        })}
        <PrimaryBtn onClick={() => updateInputCounter(1)}>
          {addRowBtnText}
        </PrimaryBtn>
      </DynamicRowsWrapper>
    </DynamicInputFieldWrapper>
  );
};

export default DynamicInputField;
