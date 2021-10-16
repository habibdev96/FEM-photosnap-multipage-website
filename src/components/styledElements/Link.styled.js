import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { headingStyles } from '../../abstracts/Mixins';

export const StyledLink = styled(Link)`
  ${headingStyles}
  font-size: 1.5rem;
  text-transform: uppercase;
  color: var(--black);
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    color: var(--lightGray);
  }
`;
