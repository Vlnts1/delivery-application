import styled from 'styled-components';

export const SummaryContainer = styled.div`
  width: 100%;
  margin-top: 5%;
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;
  height: 60vh;
  overflow: auto;

  @media (max-width: 768px) {
    margin-top: 0;
    height: 60vh;
    padding: 20px;
    border: 1px solid rgb(211, 211, 211);
    border-radius: 10px;
  }
`;

export const CardContainer = styled.div`
  width: 90%;
`;

export const CardCol = styled.div`
  margin: 5%;
`;

export const SummaryAmountContainer = styled.div`
  width: 100%;
  margin-top: 5%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const SummaryHeader = styled.h4`
  text-align: left;
`;

export const NoItemsHeader = styled.h5`
  text-align: center;
  margin-top: 10%;
`;

export const SubmitButtonCol = styled.div`
  margin-left: 90%;
`;

export const SubmitButton = styled.button`
  padding: 15px 70px;
  border-radius: 20px;
  background-color: #337ab7;
  color: #ffffff;
  font-size: 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #23527c;
  }
`;

export const BtnCol = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const ProductQuantityCol = styled.div`
  margin-top: 10%;
`;

export const ProductQuantity = styled.span`
  margin-left: 3%;
  margin-right: 3%;
`;

export const HeaderPrice = styled.h5`
  margin-top: 5%;
`;

export const HeaderProductName = styled.h5`
  margin-top: 5%;
`;
