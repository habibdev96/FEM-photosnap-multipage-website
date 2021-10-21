import styled from 'styled-components';
import { MainHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { maxWidthLg } from '../../abstracts/Mixins';
import { TwoCol } from '../styledElements/Containers.styled';

const StyledHeader = styled.header`
  position: relative;
  background-color: var(--black);

  .gradient {
    position: absolute;
    height: 100%;
    width: 1rem;
    background: linear-gradient(
      to top,
      hsl(28, 100%, 79%),
      hsl(329, 36%, 59%),
      hsl(229, 100%, 68%)
    );
  }

  .info {
    ${maxWidthLg}
    padding: 5rem 10rem;
  }

  .showcase {
    height: 80vh;
    width: 100%;
  }
`;

const SectionHero = ({ title, description, bg }) => {
  return (
    <StyledHeader>
      <div className='gradient'></div>
      <TwoCol>
        <div className='info' data-aos='fade-in'>
          <MainHeading light>{title}</MainHeading>
          <Paragraph light>{description}</Paragraph>
        </div>
        <div
          className='showcase'
          style={{ background: `url(${bg}) center center/cover no-repeat` }}
        ></div>
      </TwoCol>
    </StyledHeader>
  );
};

export default SectionHero;
