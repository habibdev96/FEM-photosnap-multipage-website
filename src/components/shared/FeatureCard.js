import styled from 'styled-components';
import { CardHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';

const StyledArticle = styled.article`
  text-align: center;

  img {
    width: 10rem;
    margin-bottom: 5rem;
  }
`;

const FeatureCard = ({ icon, title, description }) => {
  return (
    <StyledArticle>
      <img src={icon} alt={title} />
      <CardHeading>{title}</CardHeading>
      <Paragraph>{description}</Paragraph>
    </StyledArticle>
  );
};

export default FeatureCard;
