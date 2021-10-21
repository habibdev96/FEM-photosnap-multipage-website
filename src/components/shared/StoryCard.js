import styled from 'styled-components';
import { CardHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { ArrowLinkLight } from './ArrowLinks';

const StyledArticle = styled.article`
  position: relative;
  height: 50vh;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 2rem 5rem;
  color: var(--white);
  transition: var(--mainTransition);

  &:before {
    content: '';
    position: absolute;
    height: 0.8rem;
    bottom: 0;
    left: 0;
    right: 0;
    transition: var(--mainTransition);
  }

  &:hover,
  &:focus {
    transform: translateY(-2rem);

    &:before {
      background: linear-gradient(
        to right,
        hsl(28, 100%, 79%),
        hsl(329, 36%, 59%),
        hsl(229, 100%, 68%)
      );
    }
  }

  .content {
    border-bottom: 0.1rem solid var(--lightGray);
    width: 100%;
    margin-bottom: 2rem;
  }
`;

const StoryCard = ({ date, title, author, bg }) => {
  return (
    <StyledArticle
      style={{
        background: `linear-gradient(hsla(0, 0%, 0%, 0.1), rgba(0, 0, 0, 0.7)) ,url(${bg}) center center/cover no-repeat`,
      }}
    >
      <div className='content' data-aos='fade-in'>
        <Paragraph card>{date}</Paragraph>
        <CardHeading light>{title}</CardHeading>
        <Paragraph card>by {author}</Paragraph>
      </div>
      <ArrowLinkLight text='Read Story' path='/Stories' />
    </StyledArticle>
  );
};

export default StoryCard;
