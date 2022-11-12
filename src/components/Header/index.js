import { withRouter } from "react-router-dom";

import {
  HeaderContainer,
  Logo,
  Profile,
  ButtonProfileCont,
  AddButton,
} from "./styledComponent";

const Header = (props) => {
  const onAdd = () => {
    const { history } = props;

    history.push("/add");
  };

  return (
    <HeaderContainer>
      <Logo
        src="https://media-content.ccbp.in/website/ccbp_website_logos/nxtwave_header_logo.png"
        alt="logo"
      />
      <ButtonProfileCont>
        <AddButton onClick={onAdd}>ADD ITEM</AddButton>
        <Profile
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
      </ButtonProfileCont>
    </HeaderContainer>
  );
};

export default withRouter(Header);
