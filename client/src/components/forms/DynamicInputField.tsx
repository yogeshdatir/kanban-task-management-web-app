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
  updateColumnCounter,
  inputProps,
}: {
  updateColumnCounter: (change: number) => void;
  inputProps?: InputFieldProps['inputProps'];
}) => {
  return (
    <DynamicRow>
      <Input type="text" {...inputProps} />
      <CrossIcon
        style={{ cursor: 'pointer' }}
        onClick={() => updateColumnCounter(-1)}
      />
    </DynamicRow>
  );
};

type Props = {
  label?: string;
  allInputProps?: InputFieldProps['inputProps'][];
  addRowBtnText?: string;
};

const DynamicInputField = ({ label, allInputProps, addRowBtnText }: Props) => {
  const [columnCounter, setColumnCounter] = useState(1);

  const updateColumnCounter = (change: number) => {
    if (change > 0) setColumnCounter((columnCounter) => columnCounter + change);
    else {
      columnCounter > 1 &&
        setColumnCounter((columnCounter) => columnCounter + change);
    }
  };

  return (
    <DynamicInputFieldWrapper>
      <FieldLabel>{label}</FieldLabel>
      <DynamicRowsWrapper>
        {[...Array(columnCounter)].map((_, index: number) => {
          return (
            <DynamicRowComp
              key={index}
              updateColumnCounter={updateColumnCounter}
              inputProps={allInputProps && allInputProps[index]}
            />
          );
        })}
        <PrimaryBtn onClick={() => updateColumnCounter(1)}>
          {addRowBtnText}
        </PrimaryBtn>
      </DynamicRowsWrapper>
    </DynamicInputFieldWrapper>
  );
};

export default DynamicInputField;
