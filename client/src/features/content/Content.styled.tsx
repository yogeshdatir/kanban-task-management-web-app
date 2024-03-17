import styled from '@emotion/styled';
import { ColumnContainer } from '../boards/Column.styled';

export const ContentContainer = styled.div`
  display: flex;
  height: calc(100% - 96px);
  padding: 24px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
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
  width: 100%;
`;

export const NewColumn = styled(ColumnContainer)`
  min-height: calc(100% - 48px);
  border-radius: 6px;
  background: linear-gradient(
    180deg,
    rgba(43, 44, 55, 0.25) 0%,
    rgba(43, 44, 55, 0.13) 100%
  );
  margin-top: 48px;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  :hover {
    color: hsl(242, 48%, 58%);
  }
`;

export const ShowSidebarFloater = styled.button<any>`
  position: absolute;
  left: 0;
  bottom: 2rem;
  height: 3rem;
  width: ${({ showSidebar }: any) => (showSidebar ? '0' : '3.5rem')};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--Main-Purple, #635fc7);
  border-radius: 0px 100px 100px 0px;
  transition: width 400ms;

  :hover {
    background: var(--main-purple-hover, #a8a4ff);
  }
`;