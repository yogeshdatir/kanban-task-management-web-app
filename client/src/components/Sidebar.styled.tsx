import styled from '@emotion/styled';

export const SidebarContainer = styled.div`
  width: 20.83%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  background: var(--Dark-Grey, #2b2c37);

  .logo-container {
    height: 96px;
    display: flex;
    justify-content: center;
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

    &.selected {
      border-radius: 0px 100px 100px 0px;
      background: var(--Main-Purple, #635fc7);
    }
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
