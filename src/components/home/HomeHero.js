import styled from 'styled-components';
import { MainHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { ArrowLink } from '../styledElements/Link.styled';
import { maxWidthLg } from '../../abstracts/Mixins';
import { TwoCol } from '../styledElements/Containers.styled';
import arrow from '../../assets/shared/desktop/arrowlight.svg';
import showcase from '../../assets/home/desktop/create-and-share.jpg';

const StyledHeader = styled.header`
  background-color: var(--black);

  .info {
    ${maxWidthLg}
    padding: 5rem 10rem;
  }

  .showcase {
    height: 80vh;
    width: 100%;
    background: url(${showcase}) center center/cover no-repeat;
  }
`;

const HomeHero = () => {
  return (
    <StyledHeader>
      <TwoCol>
        <div className='info'>
          <MainHeading light>Create and share your photo Stories</MainHeading>
          <Paragraph light>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </Paragraph>
          <ArrowLink light to='/Pricing'>
            <span>Get an invite</span>
            <img src={arrow} alt='' />
          </ArrowLink>
        </div>
        <div className='showcase'></div>
      </TwoCol>
    </StyledHeader>
  );
};

export default HomeHero;
