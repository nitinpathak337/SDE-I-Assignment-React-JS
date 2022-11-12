import styled from "styled-components";

export const ListItem = styled.li`
  width: 100%;
  background-color: white;
  padding: 4%;
  margin: 4%;
  border: 1px solid #d7dfe9;
  height: 25vh;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    width: 25%;
    padding: 2%;
    margin: 2%;
  }
`;

export const Image = styled.img`
  width: 44px;
  height: 44px;
`;

export const ImageTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TitleCategoryContainer = styled.div`
  margin-left: 5%;
`;

export const Title = styled.p`
  margin-bottom: 0px;
  color: black;
  font-size: 16px;
`;

export const Category = styled.p`
  margin-top: 8px;
  color: #7e858e;
  font-size: 12px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #0b69ff;
`;

export const Desc = styled.p`
  color: #7e858e;
`;
