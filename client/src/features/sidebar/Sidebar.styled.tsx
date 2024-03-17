import styled from '@emotion/styled';

const LOGO_CONT_HEIGHT = '96px';

export const SidebarContainer = styled.div<any>`
  width: ${({ showSidebar }: any) => (showSidebar ? '21%' : '0')};
  transition: width 400ms;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--Dark-Grey, #2b2c37);
  border-right: 1px solid var(--lines-dark, #3e3f4e);

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .logo-container {
    height: ${LOGO_CONT_HEIGHT};
    padding-left: 32px;
    display: flex;
    align-items: center;
  }

  .menu-container {
    padding: 15px 24px 2rem 0;
    display: flex;
    flex-direction: column;
    height: calc(100% - ${LOGO_CONT_HEIGHT});
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

  .menu-item,
  .footer-item {
    padding-left: 32px;
    height: 3rem;
    cursor: pointer;
    border-radius: 0px 100px 100px 0px;
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
    color: #828fa3;

    :hover:not(&.selected) {
      border-radius: 0px 100px 100px 0px;
      background: var(--White, #fff);
      color: var(--Main-Purple, #635fc7);

      path {
        fill: var(--Main-Purple, #635fc7);
      }
    }

    &.selected {
      background: var(--Main-Purple, #635fc7);
      color: #fff;

      path {
        fill: #fff;
      }
    }

    transition: all 0.2s ease-in-out;
  }

  .footer-item {
    margin-top: auto;
  }

  .menu-action-button {
    margin: 15px 0 15px 32px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    gap: 1rem;
    align-items: center;

    color: var(--Main-Purple, #635fc7);

    path {
      fill: var(--Main-Purple, #635fc7);
    }

    /* Heading (M) */
    font-size: 15px;
    font-weight: 700;
  }
`;
