import styled from 'styled-components';
import FeatureCard from '../shared/FeatureCard';
import { ThreeCol } from '../styledElements/Containers.styled';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';
import { useGlobalContext } from '../../context/context';

const StyledSection = styled.section`
  ${maxWidthLg}
  ${sectionSpacingMd}
`;

const FeaturesFeatureCards = () => {
  const { featureCards } = useGlobalContext();

  return (
    <StyledSection>
      <ThreeCol>
        {featureCards[0].map((card) => (
          <FeatureCard key={card.id} {...card} />
        ))}
        {featureCards[1].map((card) => (
          <FeatureCard key={card.id} {...card} />
        ))}
      </ThreeCol>
    </StyledSection>
  );
};

export default FeaturesFeatureCards;
