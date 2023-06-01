import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: 10%;
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

export const Button = styled.button`
  margin-bottom: 4%;
  margin-left: 20%;
  width: 60%;
  border: 1px solid #6c757d;
  border-radius: 5px;
  color: black;
  background-color: transparent;
  padding: 1rem 2rem;

  font-size: 1rem;
  line-height: 2;
  text-align: center;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
`;
export const Header = styled.h5`
  padding: 20px 0 0 0;
  margin-bottom: 5%;
  text-align: center;
`;
