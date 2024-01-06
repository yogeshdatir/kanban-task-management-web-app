import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  height: 96px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  background: var(--Dark-Grey, #2b2c37);
  border-bottom: 1px solid var(--lines-dark, #3e3f4e);

  .dropdown-icon-wrapper {
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
