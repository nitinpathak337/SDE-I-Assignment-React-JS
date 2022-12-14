import { Link, withRouter } from "react-router-dom";

import {
  HeaderContainer,
  Logo,
  Profile,
  ButtonProfileCont,
  AddButton,
} from "./styledComponent";

const Header = (props) => {
  return (
    <HeaderContainer>
      <Logo
        src="https://media-content.ccbp.in/website/ccbp_website_logos/nxtwave_header_logo.png"
        alt="logo"
      />
      <ButtonProfileCont>
        <Link to="/add">
          <AddButton>ADD ITEM</AddButton>
        </Link>
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

export default withRouter(Header);
