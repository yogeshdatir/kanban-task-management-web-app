import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  height: 96px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;

  .dropdown-icon-wrapper {
    padding: 0 8px;
    cursor: pointer;
    height: 20px;
  }
`;

export const PrimaryBtn = styled.button`
  padding: 15px 24px;
  border: none;
  cursor: pointer;

  border-radius: 24px;
  background: var(--Main-Purple, #635fc7);

  :hover {
    background: var(--main-purple-hover, #a8a4ff);
  }

  transition: all 0.2s ease-in-out;
`;
