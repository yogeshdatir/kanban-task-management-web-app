/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from '@emotion/styled';

export const Dropdown = styled.div`
  width: 100%;
  position: relative;
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);

  font-family: 'Nunito', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  user-select: none;

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

export const SelectBox = styled.div<any>`
  min-height: 40px;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  padding: 8px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  box-sizing: border-box;
  text-transform: capitalize;
`;

export const ArrowIcon = styled.img<any>`
  width: 9px;
  margin-left: auto;
  transition: all 0.2s ease-out;
  transform: ${(props: any) =>
    props.isActive ? 'rotate(180deg)' : 'rotate(0)'};
`;

export const OptionsBox = styled.div<any>`
  border-radius: 8px;
  background: var(--very-dark-grey-dark-bg, #20212c);
  box-shadow: 0px 10px 20px 0px rgba(54, 78, 126, 0.25);

  position: absolute;
  top: 120%;
  width: 100%;
  overflow: auto;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  /* TODO: add animation for height and hide scroll till animation completes. */
  max-height: ${(props: any) => (props.isActive ? '164px' : 0)};
  padding: ${(props: any) => (props.isActive ? '1rem' : 0)};

  color: var(--Medium-Grey, #828fa3);
  font-feature-settings: 'clig' off, 'liga' off;

  /* Body (L) */
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px; /* 176.923% */
`;

export const OptionItem = styled.option<any>`
  width: 100%;
  text-align: left;
  text-transform: capitalize;
  cursor: pointer;
  transition: all 0.2s;
  background-color: ${(props: any) =>
    props.selectedOption ? 'var(--Main-Purple, #635FC7)' : 'transparent'};
  color: ${(props: any) =>
    props.selectedOption
      ? 'var(--White, #FFF)'
      : 'var(--Medium-Grey, #828fa3)'};

  &:hover {
    background-color: ${(props: any) =>
      props.selectedOption
        ? 'var(--Main-Purple, #635FC7)'
        : 'var(--main-purple-hover, #A8A4FF)'};
    color: var(--White, #fff);
  }
  box-sizing: border-box;
`;
