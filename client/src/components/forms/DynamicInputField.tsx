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

const DynamicRowComp = ({
  updateColumnCounter,
}: {
  updateColumnCounter: (change: number) => void;
}) => {
  return (
    <DynamicRow>
      <Input type="text" />
      <CrossIcon onClick={() => updateColumnCounter(-1)} />
    </DynamicRow>
  );
};

const DynamicInputField = () => {
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
      <FieldLabel>Board Columns</FieldLabel>
      <DynamicRowsWrapper>
        {[...Array(columnCounter)].map(() => {
          return <DynamicRowComp updateColumnCounter={updateColumnCounter} />;
        })}
        <PrimaryBtn onClick={() => updateColumnCounter(1)}>
          + Add New Column
        </PrimaryBtn>
      </DynamicRowsWrapper>
    </DynamicInputFieldWrapper>
  );
};

export default DynamicInputField;
