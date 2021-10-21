import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { headingStyles } from '../../abstracts/Mixins';
import arrowDark from '../../assets/shared/desktop/arrow.svg';
import arrowLight from '../../assets/shared/desktop/arrowlight.svg';
import { useGlobalContext } from '../../context/context';

const ArrowLink = styled(Link)`
  ${headingStyles}
  display: inline-flex;
  align-items: center;
  gap: 2rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--black)')};

  img {
    width: 5rem;
    transition: var(--mainTransition);
  }

  &:hover,
  &:focus {
    span {
      text-decoration: underline;
    }

    img {
      margin-left: 2rem;
    }
  }
`;

export const ArrowLinkDark = ({ text, path }) => {
  const { scrollToTop } = useGlobalContext();

  return (
    <ArrowLink to={path} onClick={scrollToTop} data-aos='fade-in'>
      <span>{text}</span>
      <img src={arrowDark} alt='' />
    </ArrowLink>
  );
};

export const ArrowLinkLight = ({ text, path }) => {
  const { scrollToTop } = useGlobalContext();

  return (
    <ArrowLink light={+true} to={path} onClick={scrollToTop} data-aos='fade-in'>
      <span>{text}</span>
      <img src={arrowLight} alt='' />
    </ArrowLink>
  );
};
