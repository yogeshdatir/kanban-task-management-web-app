import styled from '@emotion/styled';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    padding: 0.75rem;
    border-radius: 4px;
    background-color: #20212c;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;

    p {
      padding-left: 1rem;
    }

    p.completed {
      text-decoration: line-through;
      opacity: 0.5;
      color: hsl(0, 0%, 100%);
    }

    :hover {
      background-color: #635fc725;
    }
  }
`;
