import styled from '@emotion/styled';

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px 16px;
  border-radius: 8px;
  background: var(--Dark-Grey, #2b2c37);
  box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.1);
  cursor: pointer;
`;

export const ViewTaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`;

export const TaskTitle = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;

export const SubTaskDetails = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #828fa3;
`;
