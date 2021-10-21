import styled from 'styled-components';
import { CardHeading } from '../styledElements/Headings.styled';
import Responsive from '../../abstracts/Responsive';
import { useGlobalContext } from '../../context/context';

const Toggler = styled.div`
  margin-bottom: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  ${Responsive.xxs`
    gap: 1rem;
  `}

  .switch {
    position: relative;
    display: inline-block;
    width: 6.5rem;
    height: 3rem;

    &:hover,
    &:focus {
      opacity: 0.8;
    }
  }

  .checkbox {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .toggle {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 2.55rem;
    background-color: var(--lighterGray);
    transition: var(--mainTransition);

    &.active {
      background-color: var(--black);

      &:before {
        background-color: var(--white);
      }
    }

    &:before {
      position: absolute;
      content: '';
      height: 2.5rem;
      width: 2.5rem;
      left: 0.4rem;
      bottom: 0.3rem;
      border-radius: 50%;
      background-color: var(--black);
      transition: var(--mainTransition);
    }
  }

  .checkbox:checked + .toggle:before {
    transform: translateX(2.95rem);
  }
`;

const PricingToggle = () => {
  const { showYearlyPrice, setShowYearlyPrice } = useGlobalContext();

  return (
    <Toggler>
      <CardHeading>Monthly</CardHeading>
      <label className='switch'>
        <input
          type='checkbox'
          className='checkbox'
          onClick={() => setShowYearlyPrice(!showYearlyPrice)}
        />
        <span className={`toggle ${showYearlyPrice && 'active'}`}></span>
      </label>
      <CardHeading>Annually</CardHeading>
    </Toggler>
  );
};

export default PricingToggle;
