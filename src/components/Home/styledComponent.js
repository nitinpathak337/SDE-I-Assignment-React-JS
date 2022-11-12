import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-left: 0px;
  list-style-type: none;
`;

export const Bg = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const SearchContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  margin-left: 3%;
  margin-right: 3%;
  align-items: center;
  margin-top: 3%;
  padding-left: 2%;
  height: 30px;
  border: 1px solid #d7dfe9;

  @media screen and (min-width: 768px) {
    width: 41%;
    height: 35px;
    padding-left: 1%;
    margin-left: 10%;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  width: 100%;
  margin-left: 2%;
  border: none;
`;

export const DataContainer = styled.div`
  margin-left: 3%;
  margin-right: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const Image = styled.img`
  width: 65%;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`;

export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 30px;
`;

export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 20px;
`;

export const NavLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`;

export const Retry = styled.button`
  color: white;
  border: none;
  outline: none;
  height: 30px;
  width: 90px;
  border-radius: 4px;
  background-color: #0b69ff;
  cursor: pointer;
`;

export const ResourceList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 4%;
  align-items: center;
`;

export const PageItem = styled.li`
  margin: 1%;
`;

// export const PageButton = styled.button`
//   background-color: ${(props) => (props.active === true ? "#0b69ff" : "white")};
// `;
