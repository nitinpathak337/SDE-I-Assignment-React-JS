import { TabButton, ListItem } from "./styledComponent";

const TabItem = (props) => {
  const { details, activeTab, changeTab } = props;

  const { id, text } = details;

  const isActive = id === activeTab ? true : false;

  const onChangeTab = () => {
    changeTab(id);
  };

  return (
    <ListItem>
      <TabButton onClick={onChangeTab} active={isActive}>
        {text}
      </TabButton>
    </ListItem>
  );
};

export default TabItem;
