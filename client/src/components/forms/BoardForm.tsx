import { PrimaryBtn } from '../Header.styled';
import DynamicInputField from './DynamicInputField';
import { ActionRow, FormContainer } from './Form.styled';
import InputField from './InputField';

type Props = {
  setShowFormModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const BoardForm = ({ setShowFormModal }: Props) => {
  return (
    <FormContainer>
      <p>Add new board</p>
      <InputField
        label="Board Name"
        inputProps={{
          type: 'text',
          name: 'boardName',
          placeholder: 'e.g. Web Design',
        }}
      />
      <DynamicInputField
        label="Board Columns"
        addRowBtnText="+ Add New Column"
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

export default BoardForm;
