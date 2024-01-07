import {
  DynamicInputFieldWrapper,
  DynamicRow,
  DynamicRowsWrapper,
  FieldLabel,
  Input,
} from './Form.styled';
import CrossIcon from '../../../assets/icon-cross.svg?react';
import { PrimaryBtn } from '../../features/header/Header.styled';
import { useEffect, useState } from 'react';
import { InputFieldProps } from './InputField';
import { TColumn } from '../../types';

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
  value?: TColumn[];
};

const DynamicInputField = ({
  label,
  allInputProps,
  addRowBtnText,
  commonOnChange,
  value,
}: Props) => {
  const [inputCounter, setInputCounter] = useState(1);

  useEffect(() => {
    value?.length && setInputCounter(value.length);
  }, [value]);

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
                  value:
                    // Added these chain of condition to avoid react error:
                    /**Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. */
                    value && value[index] && value[index].name
                      ? value[index].name
                      : '',
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
