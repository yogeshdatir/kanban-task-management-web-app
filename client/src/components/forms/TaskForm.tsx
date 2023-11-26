import { useState } from 'react';
import { PrimaryBtn } from '../Header.styled';
import DynamicInputField from './DynamicInputField';
import { ActionRow, FormContainer } from './Form.styled';
import InputField from './InputField';
import TextareaField from './TextareaField';
import Select from './select/SelectDropdown';

type Props = {
  setShowFormModal: (prevState: boolean) => void;
};

const TaskForm = ({ setShowFormModal }: Props) => {
  const [selectedStatus, setSelectedStatus] = useState('todo');
  return (
    <FormContainer>
      <p>Add new task</p>
      <InputField
        label="Title"
        inputProps={{
          type: 'text',
          name: 'title',
          placeholder: 'e.g. Take coffee break',
        }}
      />
      <TextareaField
        label="Description"
        textareaProps={{
          placeholder:
            'e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.',
          rows: 4,
        }}
      />
      <DynamicInputField
        label="Subtasks"
        allInputProps={[
          { placeholder: 'e.g. Make coffee' },
          {
            placeholder: 'e.g. Drink coffee & smile',
          },
        ]}
        addRowBtnText="+ Add New Subtask"
      />
      <Select
        selectedOption={selectedStatus}
        setSelectedOption={setSelectedStatus}
        options={[
          {
            value: 'todo',
            displayValue: 'todo',
          },
          {
            value: 'doing',
            displayValue: 'doing',
          },
          {
            value: 'done',
            displayValue: 'done',
          },
        ]}
      />
      <ActionRow>
        <PrimaryBtn>Submit</PrimaryBtn>
        <PrimaryBtn
          onClick={() => {
            setShowFormModal(false);
          }}
        >
          Cancel
        </PrimaryBtn>
      </ActionRow>
    </FormContainer>
  );
};

export default TaskForm;
