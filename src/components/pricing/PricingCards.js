import styled from 'styled-components';
import PricingToggle from './PricingToggle';
import PricingCard from './PricingCard';
import { ThreeCol } from '../styledElements/Containers.styled';
import { useGlobalContext } from '../../context/context';
import { maxWidthLg, sectionSpacingMd } from '../../abstracts/Mixins';

const StyledSection = styled.section`
  ${maxWidthLg}
  ${sectionSpacingMd}
`;

const PricingCards = () => {
  const { priceCards } = useGlobalContext();

  return (
    <StyledSection>
      <PricingToggle />
      <ThreeCol>
        {priceCards.map((card) => (
          <PricingCard key={card.id} {...card} />
        ))}
      </ThreeCol>
    </StyledSection>
  );
};

export default PricingCards;
