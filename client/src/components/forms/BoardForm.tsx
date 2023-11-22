import { PrimaryBtn } from '../Header.styled';
import DynamicInputField from './DynamicInputField';
import { FormContainer } from './Form.styled';
import InputField from './InputField';

const BoardForm = () => {
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
      <DynamicInputField />
      <PrimaryBtn>Create New Board</PrimaryBtn>
    </FormContainer>
  );
};

export default BoardForm;
