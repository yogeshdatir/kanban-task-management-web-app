import { useDispatch, useSelector } from 'react-redux';
import { PrimaryBtn } from '../Header.styled';
import DynamicInputField from './DynamicInputField';
import { ActionRow, FormContainer } from './Form.styled';
import InputField from './InputField';
import {
  addBoard,
  selectBoard,
  updateBoard,
} from '../../react-redux/boardSlice';
import { useEffect, useState } from 'react';
import { TBoard } from '../../types';
import { AppState } from '../../react-redux/store';

type Props = {
  setShowBoardFormModal: React.Dispatch<React.SetStateAction<boolean>>;
  isEdit?: boolean;
};

const BoardForm = ({ setShowBoardFormModal, isEdit = false }: Props) => {
  const { boards, selectedBoardName } = useSelector((state: AppState) => {
    return state.boardsState;
  });

  const dispatch = useDispatch();

  const [newBoard, setNewBoard] = useState<TBoard>({
    name: '',
    columns: [],
  });

  useEffect(() => {
    const selectedBoard: TBoard | undefined = boards.find(
      (board: TBoard) => board.name === selectedBoardName
    );
    selectedBoard && isEdit && setNewBoard(selectedBoard);
  }, [boards, isEdit, selectedBoardName]);

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
      <p>{isEdit ? `Edit board` : `Add new board`}</p>
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
          value: newBoard.name,
        }}
      />
      <DynamicInputField
        label="Board Columns"
        addRowBtnText="+ Add New Column"
        commonOnChange={handleColumnDynamicInput}
        value={newBoard.columns}
      />
      <ActionRow>
        <PrimaryBtn
          onClick={() => {
            console.log(newBoard);

            if (isEdit) {
              dispatch(updateBoard(newBoard));
            } else {
              dispatch(addBoard(newBoard));
              dispatch(selectBoard(newBoard.name));
            }
            setShowBoardFormModal(false);
          }}
        >
          Submit
        </PrimaryBtn>
        <PrimaryBtn
          onClick={() => {
            setShowBoardFormModal(false);
          }}
        >
          Cancel
        </PrimaryBtn>
      </ActionRow>
    </FormContainer>
  );
};

export default BoardForm;
