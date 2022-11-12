import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4%;
  border-bottom: 1px solid #d7dfe9;
  padding-left: 3%;
  padding-right: 3%;
  max-width: 100%;
  margin: 0px;
  background-color: white;
  @media screen and (min-width: 768px) {
    padding: 3%;
    padding-bottom: 2%;
  }
`;

export const Logo = styled.img`
  width: 20%;
  @media screen and (min-width: 768px) {
    width: 6%;
  }
`;

export const Profile = styled.img`
  width: 18%;
  @media screen and (min-width: 768px) {
    width: 22%;
  }
`;

export const ButtonProfileCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 43%;
  @media screen and (min-width: 768px) {
    width: 15%;
  }
`;

export const AddButton = styled.button`
  outline: none;
  cursor: pointer;
  border: none;
  background-color: #2dca73;
  color: white;
  border-radius: 4px;
  height: 27px;
  @media screen and (min-width: 768px) {
    height: 35px;
    width: 90px;
  }
`;
