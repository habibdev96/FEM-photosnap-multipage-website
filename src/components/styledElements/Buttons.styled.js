import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { headingStyles } from '../../abstracts/Mixins';

export const Button = styled(Link)`
  ${headingStyles}
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.5rem 2rem;
  transition: var(--mainTransition);

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--black);
      color: var(--white);

      &:hover,
      &:focus {
        background-color: var(--lightGray);
        color: var(--black);
      }
    `}
`;
