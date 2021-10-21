import styled from 'styled-components';
import { FlexEvenly } from '../styledElements/Containers.styled';
import { MainHeading } from '../styledElements/Headings.styled';
import { ArrowLinkLight } from '../shared/ArrowLinks';
import bg from '../../assets/shared/desktop/bg-beta.jpg';
import { sectionSpacingMd } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

const StyledSection = styled.section`
  background: url(${bg}) center center/cover no-repeat;
  ${sectionSpacingMd}

  ${Responsive.md`
    text-align: center;
  `}
`;

const Cta = () => {
  return (
    <StyledSection>
      <FlexEvenly data-aos='fade-in'>
        <MainHeading light>
          We're in Beta. <br />
          Get your invite today!
        </MainHeading>
        <ArrowLinkLight text='Get an invite' path='/Pricing' />
      </FlexEvenly>
    </StyledSection>
  );
};

export default Cta;
