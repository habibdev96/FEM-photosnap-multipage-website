import styled from 'styled-components';
import { MainHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { ArrowLink } from '../styledElements/Link.styled';
import { maxWidthLg } from '../../abstracts/Mixins';
import { TwoCol } from '../styledElements/Containers.styled';
import arrow from '../../assets/shared/desktop/arrow.svg';
import showcase from '../../assets/home/desktop/beautiful-stories.jpg';
import showcase2 from '../../assets/home/desktop/designed-for-everyone.jpg';

const StyledSection = styled.section`
  .info {
    ${maxWidthLg}
    padding: 5rem 10rem;
  }

  .showcase {
    height: 70vh;
    width: 100%;
    background: url(${showcase}) center center/cover no-repeat;
  }

  .showcase-2 {
    height: 70vh;
    width: 100%;
    background: url(${showcase2}) center center/cover no-repeat;
  }
`;

export const HomeFeatureSectionOne = () => {
  return (
    <StyledSection>
      <TwoCol invert>
        <div className='showcase'></div>
        <div className='info'>
          <MainHeading>Beautiful stories every time</MainHeading>
          <Paragraph>
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </Paragraph>
          <ArrowLink to='/Pricing'>
            <span>View the stories</span>
            <img src={arrow} alt='' />
          </ArrowLink>
        </div>
      </TwoCol>
    </StyledSection>
  );
};

export const HomeFeatureSectionTwo = () => {
  return (
    <StyledSection>
      <TwoCol>
        <div className='info'>
          <MainHeading>Designed for everyone</MainHeading>
          <Paragraph>
            Photosnap can help you create stories that resonate with your
            audience. Our tool is designed for photographers of all levels,
            brands, businesses you name it.
          </Paragraph>
          <ArrowLink to='/Pricing'>
            <span>View the stories</span>
            <img src={arrow} alt='' />
          </ArrowLink>
        </div>
        <div className='showcase-2'></div>
      </TwoCol>
    </StyledSection>
  );
};
