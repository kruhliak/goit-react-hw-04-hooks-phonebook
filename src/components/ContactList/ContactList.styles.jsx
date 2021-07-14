import styled from '@emotion/styled';

export const List = styled.ul`
  padding: 5px;
  margin: 10px 0;

  & li {
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & button {
      margin-left: 10px;
      background-color: #f0c8c8;
      border: 1px solid #000;
      border-radius: 4px;
      &:hover,
    :focus {
      background-color: #f09797;
      transform: scale(1.05);
    }
    }
  }
`;
