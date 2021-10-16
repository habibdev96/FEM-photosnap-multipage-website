import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { headingStyles } from '../../abstracts/Mixins';

export const StyledLink = styled(Link)`
  ${headingStyles}
  font-size: 1.5rem;
  text-transform: uppercase;
  transition: var(--mainTransition);
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--black)')};

  &:hover,
  &:focus {
    color: var(--lightGray);
  }
`;

export const ArrowLink = styled(Link)`
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
