import styled from 'styled-components';

export const PrimaryButton = styled.button`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  font-weight: 700;
  margin: 24px 0 32px 0;
  width: 100%;
  background-color: black;
  color: white;
  outline: none;
  display: inline-flex;
  justify-content: center;
  border: 0;
  cursor: pointer;
  padding: 24px 0;

  align-self: end;
  &:hover {
    opacity: 0.8;
  }
`;