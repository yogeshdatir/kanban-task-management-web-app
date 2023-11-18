import styled from '@emotion/styled';

export const ContentContainer = styled.div`
  height: calc(100% - 96px);
  padding: 24px;
  overflow: auto;
`;

export const BoardContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 100%;
`;
