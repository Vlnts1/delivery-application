import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 10%;
  margin-bottom: 10%;
  align-items: center;
  padding: 40px 30px 40px 30px;
  display: block;
  align-items: center;
  border: 1px solid rgb(211, 211, 211);
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-top: 0;
    height: 60vh;
    padding: 20px;
    border: 1px solid rgb(211, 211, 211);
    border-radius: 10px;
  }
`;

export const Input = styled.input`
  display: absolute;
  margin-bottom: 12%;
  width: 100%;
  padding: 0.375rem 2rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }

  &::placeholder {
    color: #6c757d;
    opacity: 1;
  }
`;

export const BtnCol = styled.div`
  text-align: end;
  margin-top: 10%;

  @media (max-width: 768px) {
    text-align: center;
  }
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

  @media (max-width: 768px) {
    padding: 10px 40px;
    font-size: 16px;
  }
`;
