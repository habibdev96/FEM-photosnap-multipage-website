import styled from 'styled-components';
import bg from '../../assets/stories/desktop/moon-of-appalacia.jpg';
import { maxWidthLg } from '../../abstracts/Mixins';
import { TwoCol } from '../styledElements/Containers.styled';
import { SubHeading, MainHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { ArrowLinkLight } from '../shared/ArrowLinks';

const StyledHeader = styled.header`
  background: url(${bg}) center center/cover no-repeat;
  height: 80vh;

  .info {
    ${maxWidthLg}
    padding: 20rem 10rem;
  }

  .article-info {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

const StoriesHero = () => {
  return (
    <StyledHeader>
      <TwoCol>
        <div className='info'>
          <SubHeading light>Last month's featured story</SubHeading>
          <MainHeading light>Hazy full moon of Appalachia</MainHeading>
          <div className='article-info'>
            <Paragraph light>March 2nd 2020</Paragraph>
            <Paragraph white>by John Appleseed</Paragraph>
          </div>
          <Paragraph light>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </Paragraph>
          <ArrowLinkLight text='Read the Story' path='/Stories' />
        </div>
      </TwoCol>
    </StyledHeader>
  );
};

export default StoriesHero;
