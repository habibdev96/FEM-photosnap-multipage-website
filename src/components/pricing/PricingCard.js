import styled from 'styled-components';
import { MainHeading, CardHeading } from '../styledElements/Headings.styled';
import Paragraph from '../styledElements/Paragraphs.styled';
import { Button } from '../styledElements/Buttons.styled';
import { useGlobalContext } from '../../context/context';

const StyledArticle = styled.article`
  text-align: center;
  padding: 5rem;
  background-color: var(--lighterGray);
  box-shadow: var(--mainShadow);

  &.primary {
    position: relative;
    background-color: var(--black);
    transform: scale(1.1);

    &:after {
      content: '';
      position: absolute;
      height: 0.8rem;
      top: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        to right,
        hsl(28, 100%, 79%),
        hsl(329, 36%, 59%),
        hsl(229, 100%, 68%)
      );
    }
  }

  .btn {
    margin-top: 3rem;
    width: 100%;
  }
`;

const PricingCard = ({
  plan,
  description,
  monthlyPrice,
  yearlyPrice,
  primaryCard,
}) => {
  const { showYearlyPrice } = useGlobalContext();

  if (primaryCard) {
    return (
      <StyledArticle className='primary'>
        <CardHeading light>{plan}</CardHeading>
        <Paragraph light>{description}</Paragraph>
        <MainHeading light>
          ${showYearlyPrice ? yearlyPrice : monthlyPrice}
        </MainHeading>
        <Paragraph lightpadding light>
          per {showYearlyPrice ? 'month' : 'year'}
        </Paragraph>
        <Button secondary={+true} className='btn' to='/Pricing'>
          Pick Plan
        </Button>
      </StyledArticle>
    );
  } else {
    return (
      <StyledArticle>
        <CardHeading>{plan}</CardHeading>
        <Paragraph>{description}</Paragraph>
        <MainHeading>
          ${showYearlyPrice ? yearlyPrice : monthlyPrice}
        </MainHeading>
        <Paragraph lightpadding>
          per {showYearlyPrice ? 'month' : 'year'}
        </Paragraph>
        <Button primary={+true} className='btn' to='/Pricing'>
          Pick Plan
        </Button>
      </StyledArticle>
    );
  }
};

export default PricingCard;
