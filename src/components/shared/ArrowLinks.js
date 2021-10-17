import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { headingStyles } from '../../abstracts/Mixins';
import arrowDark from '../../assets/shared/desktop/arrow.svg';
import arrowLight from '../../assets/shared/desktop/arrowlight.svg';

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
  return (
    <ArrowLink to={path}>
      <span>{text}</span>
      <img src={arrowDark} alt='' />
    </ArrowLink>
  );
};

export const ArrowLinkLight = ({ text, path }) => {
  return (
    <ArrowLink light={+true} to={path}>
      <span>{text}</span>
      <img src={arrowLight} alt='' />
    </ArrowLink>
  );
};
