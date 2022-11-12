import {
  ListItem,
  Image,
  TitleCategoryContainer,
  ImageTitleContainer,
  Title,
  Link,
  Desc,
  Category,
} from "./styledComponent";

const ResourceItem = (props) => {
  const { details } = props;
  const { iconUrl, title, link, description, category } = details;

  return (
    <ListItem>
      <div>
        <ImageTitleContainer>
          <Image src={iconUrl} alt="icon" />
          <TitleCategoryContainer>
            <Title>{title}</Title>
            <Category>{category}</Category>
          </TitleCategoryContainer>
        </ImageTitleContainer>
        <Link href={link} target="_blank">
          {link}
        </Link>
        <Desc>{description}</Desc>
      </div>
    </ListItem>
  );
};

export default ResourceItem;
