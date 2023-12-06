import { useDispatch } from 'react-redux';
import { PrimaryBtn } from '../Header.styled';
import DynamicInputField from './DynamicInputField';
import { ActionRow, FormContainer } from './Form.styled';
import InputField from './InputField';
import { addBoard, selectBoard } from '../../react-redux/boardSlice';
import { useState } from 'react';
import { TBoard } from '../../types';

type Props = {
  setShowFormModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const BoardForm = ({ setShowFormModal }: Props) => {
  const dispatch = useDispatch();

  const [newBoard, setNewBoard] = useState<TBoard>({
    name: '',
    columns: [],
  });

  const handleColumnDynamicInput = (
    e: React.ChangeEvent,
    inputIndex: number
  ) => {
    const boardColumns = [...newBoard.columns];

    boardColumns[inputIndex] = {
      name: (e.target as HTMLInputElement | HTMLTextAreaElement).value,
      tasks: [],
    };

    setNewBoard({
      ...newBoard,
      columns: boardColumns,
    });
  };

  return (
    <FormContainer>
      <p>Add new board</p>
      <InputField
        label="Board Name"
        inputProps={{
          type: 'text',
          name: 'boardName',
          placeholder: 'e.g. Web Design',
          onChange: (e) => {
            setNewBoard((prevState: TBoard) => ({
              ...prevState,
              name: e.target.value,
            }));
          },
        }}
      />
      <DynamicInputField
        label="Board Columns"
        addRowBtnText="+ Add New Column"
        commonOnChange={handleColumnDynamicInput}
      />
      <ActionRow>
        <PrimaryBtn
          onClick={() => {
            console.log({ newBoard });
            dispatch(addBoard(newBoard));
            dispatch(selectBoard(newBoard.name));
            setShowFormModal(false);
          }}
        >
          Submit
        </PrimaryBtn>
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

export default BoardForm;
