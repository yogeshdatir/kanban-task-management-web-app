import styled from '@emotion/styled';

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 280px;
`;

export const ColumnTitle = styled.p`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2.4px;
  text-align: left;
  color: #828fa3;
`;

export const Circle = styled.span`
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: calc(100% - 48px);
  overflow: auto;
`;
