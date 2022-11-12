import styled from "styled-components";

export const TabButton = styled.button`
  width: 100%;
  cursor: pointer;
  outline: none;
  border: none;
  height: 40px;
  color: ${(props) => (props.active === true ? "white" : "#171F46")};
  background-color: ${(props) =>
    props.active === true ? "#0B69FF" : "light grey"};
  border: 1px solid #d7dfe9;
`;

export const ListItem = styled.li`
  width: 30%;
  margin-top: 3%;
  @media screen and (min-width: 768px) {
    width: 13%;
  }
`;
