import styled from '@emotion/styled';

export const Form = styled.form`
  display: grid;
  grid-template-columns: min-content;

  & button {
    margin: 10px 0;
    background-color: #e6ffe0d5;
    border: 1px solid #000;
    border-radius: 4px;
    &:hover,
    :focus {
      background-color: #bffab0d3;
      transform: scale(1.1);
    }
  }
`;
