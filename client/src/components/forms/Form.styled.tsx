import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FieldLabel = styled.label`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  background: var(--Dark-Grey, #2b2c37);
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const DynamicInputFieldWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

export const DynamicRowsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const DynamicRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  input {
    flex: 1;
  }
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 1rem;

  button {
    flex: 1;
  }
`;
