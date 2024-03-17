import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  /* overflow-y: auto; */
`;

export const ModalContainer = styled.div`
  position: absolute;
  padding: 2rem;
  border-radius: 6px;
  background: var(--Dark-Grey, #2b2c37);
  width: 480px;
  max-height: 90vh;
  overflow: auto;
`;
