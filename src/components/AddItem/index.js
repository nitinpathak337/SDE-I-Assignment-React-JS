import { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  AddContainer,
  FormContainer,
  UsersPara,
  Form,
  ImageContainer,
  Heading,
  Label,
  Input,
  InputDesc,
  CreateButton,
} from "./styledComponent";

import HeaderForAdd from "../HeaderForAdd/index.js";

import "./index.css";

class AddItem extends Component {
  state = {
    inputItemName: "",
    inputLink: "",
    inputResourceName: "",
    inputDescription: "",
  };

  onChangeItemName = (event) => {
    this.setState({ inputItemName: event.target.value });
  };

  onChangeLink = (event) => {
    this.setState({ inputLink: event.target.value });
  };

  onChangeResourceName = (event) => {
    this.setState({ inputResourceName: event.target.value });
  };

  onChangeDescription = (event) => {
    this.setState({ inputDescription: event.target.value });
  };

  onCreate = (event) => {
    event.preventDefault();

    const {
      inputItemName,
      inputLink,
      inputResourceName,
      inputDescription,
    } = this.state;

    if (
      inputItemName === "" ||
      inputLink === "" ||
      inputDescription === "" ||
      inputResourceName === ""
    ) {
      toast.error("Empty Field");
    } else if (inputDescription.length > 20) {
      toast.error("Description should be less than 20 characters");
    } else {
      this.makeApiCall();
    }
  };

  makeApiCall = async () => {
    const response = await fetch(
      "https://media-content.ccbp.in/website/react-assignment/add_resource.json"
    );

    if (response.ok === true) {
      toast.success("Resource Added Successfully");
    } else {
      toast.error("Something Went Wrong");
    }
  };

  render() {
    return (
      <>
        <HeaderForAdd />
        <AddContainer>
          <FormContainer>
            <Link to="/" className="link">
              <IoIosArrowBack />
              <UsersPara>Users</UsersPara>
            </Link>
            <Form>
              <Heading>Item Details</Heading>
              <Label htmlFor="item name">ITEM NAME</Label>
              <Input
                type="text"
                id="item name"
                onChange={this.onChangeItemName}
              />
              <Label htmlFor="link">LINK</Label>
              <Input type="text" id="link" onChange={this.onChangeLink} />
              <Label htmlFor="resource name">RESOURCE NAME</Label>
              <Input
                type="text"
                id="resource name"
                onChange={this.onChangeResourceName}
              />
              <Label htmlFor="description">DESCRIPTION</Label>
              <InputDesc
                id="description"
                rows="3"
                onChange={this.onChangeDescription}
              ></InputDesc>
              <CreateButton onClick={this.onCreate}>CREATE</CreateButton>
            </Form>
          </FormContainer>
          <ImageContainer></ImageContainer>
        </AddContainer>
      </>
    );
  }
}

export default AddItem;
