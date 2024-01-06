import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
  width: 21%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  background: var(--Dark-Grey, #2b2c37);
  border-right: 1px solid var(--lines-dark, #3e3f4e);

  .logo-container {
    height: 96px;
    padding-left: 32px;
    display: flex;
    align-items: center;
  }

  .menu-container {
    padding: 15px 24px 15px 0;
    display: flex;
    flex-direction: column;
  }

  .menu-header {
    padding: 0 0 20px 32px;
    text-transform: uppercase;

    color: var(--Medium-Grey, #828fa3);
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.4px;
  }

  .menu-item {
    padding: 15px 0 15px 32px;
    cursor: pointer;
    border-radius: 0px 100px 100px 0px;

    :hover:not(&.selected) {
      border-radius: 0px 100px 100px 0px;
      background: var(--White, #fff);
      color: var(--Main-Purple, #635fc7);
    }

    &.selected {
      background: var(--Main-Purple, #635fc7);
    }

    transition: all 0.2s ease-in-out;
  }

  .menu-action-button {
    margin: 15px 0 15px 32px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    color: var(--Main-Purple, #635fc7);
    font-feature-settings: 'clig' off, 'liga' off;

    /* Heading (M) */
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
