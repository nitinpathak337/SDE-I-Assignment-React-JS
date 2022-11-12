// import StyledComponent from './styledComponent'
import { Component } from "react";
import { ThreeDots } from "react-loader-spinner";
import { AiOutlineSearch } from "react-icons/ai";

import {
  ContentContainer,
  List,
  Bg,
  SearchContainer,
  Input,
  DataContainer,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  NavLink,
  Retry,
  ResourceList,
  PageItem,
} from "./styledComponent";

import Header from "../Header/index";
import TabItem from "../TabItem/index";
import ResourceItem from "../ResourceItem/index";

const apiStatusConstant = {
  initial: "INITIAL",
  failure: "FAILURE",
  success: "SUCCESS",
  loading: "LOADING",
};

const tabs = [
  {
    id: "resources",
    text: "Resources",
  },
  {
    id: "requests",
    text: "Requests",
  },
  {
    id: "users",
    text: "Users",
  },
];

class Home extends Component {
  state = {
    activeTab: "resources",
    searchInput: "",
    apiStatus: apiStatusConstant.initial,
    resources: [],
    currentPage: 1,
  };

  componentDidMount() {
    this.getData();
  }

  changeTab = (id) => {
    this.setState({ activeTab: id });
  };

  getData = async () => {
    this.setState({ apiStatus: apiStatusConstant.loading });
    const url =
      "https://media-content.ccbp.in/website/react-assignment/resources.json";
    const response = await fetch(url);
    if (response.ok === true) {
      const data = await response.json();
      console.log(data);
      const updatedData = data.map((eachItem) => ({
        title: eachItem.title,
        category: eachItem.category,
        description: eachItem.description,
        id: eachItem.id,
        iconUrl: eachItem.icon_url,
        link: eachItem.link,
        tag: eachItem.tag,
      }));
      this.setState({
        apiStatus: apiStatusConstant.success,
        resources: updatedData,
      });
    } else {
      this.setState({ apiStatus: apiStatusConstant.failure });
    }
  };

  renderData = () => {
    const { apiStatus } = this.state;

    switch (apiStatus) {
      case apiStatusConstant.loading:
        return this.renderLoader();
      case apiStatusConstant.failure:
        return this.renderFailureView();
      case apiStatusConstant.success:
        return this.renderSuccessView();
      default:
        return null;
    }
  };

  onSearch = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  renderLoader = () => {
    return (
      <div>
        <ThreeDots color="#00BFFF" height="50" width="50" />
      </div>
    );
  };

  renderFailureView = () => {
    return (
      <NotFoundContainer>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
          className="jobs-failure-img"
        />
        <Heading>Oops! Something Went Wrong</Heading>
        <Desc className="jobs-failure-description">
          We are having some trouble to complete your request.Please try again.
        </Desc>
        <NavLink>
          <Retry onClick={this.getData}>Retry</Retry>
        </NavLink>
      </NotFoundContainer>
    );
  };

  renderSuccessView = () => {
    const { resources, activeTab, searchInput, currentPage } = this.state;
    let filteredResources;

    if (activeTab === "resources") {
      filteredResources = resources;
    } else {
      filteredResources = resources.filter(
        (eachItem) => eachItem.tag + "s" === activeTab
      );
    }
    let endIndex = currentPage * 6;
    let startIndex = endIndex - 6;
    filteredResources = filteredResources.slice(startIndex, endIndex);

    filteredResources = filteredResources.filter((eachItem) =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    let totalPages = Math.ceil(resources.length / 6);
    console.log(totalPages);
    let pageArr = [];
    for (let i = 1; i <= totalPages; i++) {
      pageArr.push(i);
    }

    return (
      <>
        {filteredResources.length === 0 ? (
          <NotFoundContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <Heading className="cart-empty-heading">No Resources Found</Heading>
            <Desc>You can add new resources whenever you want.</Desc>
          </NotFoundContainer>
        ) : (
          <>
            <ResourceList>
              {filteredResources.map((eachItem) => (
                <ResourceItem key={eachItem.id} details={eachItem} />
              ))}
            </ResourceList>
          </>
        )}
        <List>
          {pageArr.map((eachItem) => (
            <PageItem key={eachItem}>
              <button type="button" id={eachItem} onClick={this.onChangePage}>
                {eachItem}
              </button>
            </PageItem>
          ))}
        </List>
      </>
    );
  };

  onChangePage = (event) => {
    this.setState({ currentPage: event.target.id });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <Bg>
        <Header />
        <ContentContainer>
          <List>
            {tabs.map((eachItem) => (
              <TabItem
                key={eachItem.id}
                details={eachItem}
                activeTab={activeTab}
                changeTab={this.changeTab}
              />
            ))}
          </List>
          <SearchContainer>
            <AiOutlineSearch />
            <Input
              type="search"
              placeholder="Search"
              onChange={this.onSearch}
            />
          </SearchContainer>
          <DataContainer>{this.renderData()}</DataContainer>
        </ContentContainer>
      </Bg>
    );
  }
}

export default Home;
