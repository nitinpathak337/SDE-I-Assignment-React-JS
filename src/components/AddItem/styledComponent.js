import styled from "styled-components";

export const AddContainer = styled.div`
  display: flex;
  background-color: #f5f5f5;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;

  min-height: 75vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3%;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    width: 50%;
  }
`;

export const UsersPara = styled.span`
  color: #7e858e;
  font-size: 16px;
`;

export const Form = styled.form`
  display: flex;
  width: 80%;
  margin-top: 4%;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 60%;
    background-size: cover;
    background-image: url("https://www.parmetech.com/wp-content/uploads/2020/12/Office-Design-Trends-2021-scaled.jpeg");
  }
`;

export const Heading = styled.h1`
  color: #171f46;
  font-size: 32px;
  align-self: center;
`;

export const Label = styled.label`
  color: #7e858e;
  font-size: 12px;
  margin-bottom: 2%;
`;

export const Input = styled.input`
  background-color: white;
  border: 1px solid #d7dfe9;
  width: 100%;
  padding: 6px;
  outline: none;
  border-radius: 2px;
  height: 20px;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    height: 27px;
  }
`;

export const InputDesc = styled.textarea`
  background-color: white;
  border: 1px solid #d7dfe9;
  width: 100%;
  padding: 6px;
  outline: none;
  border-radius: 2px;
  margin-bottom: 15px;
`;

export const CreateButton = styled.button`
  outline: none;
  border: none;
  background-color: #0b69ff;
  color: white;
  border-radius: 2px;
  align-self: center;
  cursor: pointer;
  height: 35px;
  width: 93px;
`;
