import { withRouter, Link } from "react-router-dom";

import {
  HeaderContainer,
  Logo,
  AddButton,
  Profile,
  ButtonProfileCont,
} from "./styledComponent";

const HeaderForAdd = () => {
  return (
    <HeaderContainer>
      <Logo
        src="https://media-content.ccbp.in/website/ccbp_website_logos/nxtwave_header_logo.png"
        alt="logo"
      />
      <ButtonProfileCont>
        <Link to="/login">
          <AddButton>LOG OUT</AddButton>
        </Link>
        <Profile
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
      </ButtonProfileCont>
    </HeaderContainer>
  );
};

export default withRouter(HeaderForAdd);
