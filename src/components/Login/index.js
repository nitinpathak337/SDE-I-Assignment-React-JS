import { Component } from "react";

import {
  LoginFormContainer,
  FormContainer,
  LoginWebsiteLogo,
  InputContainer,
  LoginButton,
  UserNameInputField,
  PasswordInputField,
  InputLabel,
  ShowHideContainer,
  ErrorMessage,
  CheckboxInput,
} from "./styledComponent";

class LoginForm extends Component {
  state = {
    mobile: "",
    password: "",
    showMobileError: false,
    showPasswordError: false,
    errorMsgMobile: "",
    errorMsgPassword: "",
    isCheckedPassword: false,
  };

  onChangeMobile = (event) => {
    this.setState({ mobile: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSuccess = () => {
    const { history } = this.props;

    history.replace("/");
  };

  submitForm = async (event) => {
    event.preventDefault();
    const { mobile, password } = this.state;
    if (mobile === "" && password === "") {
      this.setState({
        showMobileError: true,
        errorMsgMobile: "Required",
        showPasswordError: true,
        errorMsgPassword: "Required",
      });
    } else if (password === "") {
      this.setState({
        showPasswordError: true,
        errorMsgPassword: "Required",
        showMobileError: false,
      });
    } else if (mobile === "") {
      this.setState({
        showMobileError: true,
        errorMsgMobile: "Required",
        showPasswordError: false,
      });
    } else {
      this.setState(
        { showMobileError: false, showPasswordError: false },
        this.onSubmitSuccess()
      );
    }
  };

  onShowHidePassword = () => {
    this.setState((prev) => ({ isCheckedPassword: !prev.isCheckedPassword }));
  };

  renderPasswordField = () => {
    const {
      password,
      isCheckedPassword,
      showPasswordError,
      errorMsgPassword,
    } = this.state;
    return (
      <>
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <PasswordInputField
          type={isCheckedPassword ? "text" : "password"}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
        {showPasswordError && <ErrorMessage>*{errorMsgPassword}</ErrorMessage>}
        <ShowHideContainer>
          <CheckboxInput
            type="checkbox"
            id="show-password"
            checked={isCheckedPassword}
            onChange={this.onShowHidePassword}
          />
          <InputLabel htmlFor="show-password">Show Password</InputLabel>
        </ShowHideContainer>
      </>
    );
  };

  renderMobileField = () => {
    const { username } = this.state;
    return (
      <>
        <InputLabel htmlFor="username">MOBILE NUMBER</InputLabel>
        <UserNameInputField
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeMobile}
          placeholder="Mobile Number"
        />
      </>
    );
  };

  render() {
    const { showMobileError, errorMsgMobile } = this.state;

    return (
      <LoginFormContainer>
        <FormContainer onSubmit={this.submitForm}>
          <LoginWebsiteLogo
            src="https://media-content.ccbp.in/website/ccbp_website_logos/nxtwave_header_logo.png"
            alt="website logo"
          />
          <InputContainer>{this.renderMobileField()}</InputContainer>
          {showMobileError && <ErrorMessage>*{errorMsgMobile}</ErrorMessage>}
          <InputContainer>{this.renderPasswordField()}</InputContainer>

          <LoginButton type="submit">Login</LoginButton>
        </FormContainer>
      </LoginFormContainer>
    );
  }
}

export default LoginForm;
