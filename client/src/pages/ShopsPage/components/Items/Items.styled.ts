import styled from 'styled-components';

export const ItemsContainer = styled.div`
  width: 100%;
  margin-top: 5%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;
  height: 80vh;
  overflow: auto;
  @media (max-width: 576px) {
    height: auto;
  }
`;

export const CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const CardCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 50%; /* Set each column to take 50% width */
  margin: 10px;
`;

export const ButtonCol = styled.div`
  text-align: end;
`;
