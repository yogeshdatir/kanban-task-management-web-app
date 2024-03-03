import { ChangeEvent, FormEvent, useState } from 'react';
import { PrimaryBtn } from '../header/Header.styled';
import DynamicInputField from '../../components/forms/DynamicInputField';
import {
  ActionRow,
  Form,
  FormContainer,
} from '../../components/forms/Form.styled';
import InputField from '../../components/forms/InputField';
import TextareaField from '../../components/forms/TextareaField';
import Select from '../../components/forms/select/SelectDropdown';
import { useDispatch } from 'react-redux';
import { TTask } from '../../types';
import { addTask } from '../../react-redux/boardSlice';

const EMPTY_TASK: TTask = {
  title: '',
  description: '',
  status: '',
  subtasks: [],
};

type Props = {
  setShowFormModal: (prevState: boolean) => void;
  task?: TTask;
};

const TaskForm = ({ setShowFormModal, task }: Props) => {
  const [localTaskCopy, setLocalTaskCopy] = useState<TTask>(task ? task : EMPTY_TASK);

  const dispatch = useDispatch();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLocalTaskCopy((prevTask: TTask) => {
      return { ...prevTask, [e.target.name]: e.target.value };
    });
  };

  const handleSubtaskDynamicInput = (
    e: React.ChangeEvent,
    inputIndex: number
  ) => {
    const subtasks = [...localTaskCopy.subtasks];

    subtasks[inputIndex] = {
      title: (e.target as HTMLInputElement | HTMLTextAreaElement).value,
      isCompleted: false,
    };

    setLocalTaskCopy({
      ...localTaskCopy,
      subtasks,
    });
  };

  const handleTaskStatusChange = (e: React.MouseEvent<HTMLOptionElement>) => {
    const target = e.target as HTMLInputElement;
    // OR (event.target as HTMLInputElement).value
    setLocalTaskCopy((prevTask: TTask) => {
      return prevTask && { ...prevTask, status: target.value };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ localTaskCopy });
    dispatch(addTask(localTaskCopy));
    setShowFormModal(false);
  };

  // TODO: Add form validations
  return (
    <FormContainer>
      <p>Add new task</p>
      <Form onSubmit={handleSubmit}>
        <InputField
          label="Title"
          inputProps={{
            type: 'text',
            name: 'title',
            placeholder: 'e.g. Take coffee break',
            value: localTaskCopy.title,
            onChange: handleInputChange,
            required: true,
          }}
        />
        <TextareaField
          label="Description"
          textareaProps={{
            placeholder: `e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little.`,
            rows: 4,
            name: 'description',
            value: localTaskCopy.description,
            onChange: handleInputChange,
            required: true,
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
          commonOnChange={handleSubtaskDynamicInput}
          value={localTaskCopy.subtasks}
        />
        <Select
          selectedOption={localTaskCopy?.status || ''}
          onChange={handleTaskStatusChange}
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
          label="Status"
          required
        />
        <ActionRow>
          <PrimaryBtn type="submit">Submit</PrimaryBtn>
          <PrimaryBtn
            onClick={() => {
              setShowFormModal(false);
            }}
          >
            Cancel
          </PrimaryBtn>
        </ActionRow>
      </Form>
    </FormContainer>
  );
};

export default TaskForm;
