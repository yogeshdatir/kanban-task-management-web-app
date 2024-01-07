import styled from '@emotion/styled';

export const ConfirmationModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Heading = styled.h3`
  color: var(--Red, #ea5555);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Heading (L) */
  font-family: Plus Jakarta Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Message = styled.p`
  color: var(--Medium-Grey, #828fa3);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Body (L) */
  font-family: Plus Jakarta Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 176.923% */
`;

export const DangerBtn = styled.button`
  border-radius: 20px;
  background: var(--Red, #ea5555);
  padding: 0.5rem 1rem;
  color: var(--White, #fff);
  text-align: center;
  font-family: Plus Jakarta Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px; /* 176.923% */
`;

export const SecondaryBtn = styled.button`
  border-radius: 20px;
  background: rgba(99, 95, 199, 0.1);
  padding: 0.5rem 1rem;
  color: var(--Main-Purple, #635fc7);
  text-align: center;
  font-family: Plus Jakarta Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px; /* 176.923% */
`;

export const ActionWrapper = styled.div`
  display: flex;
  gap: 1rem;

  button {
    flex: 1;
  }
`;
