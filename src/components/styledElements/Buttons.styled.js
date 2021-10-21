import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { headingStyles } from '../../abstracts/Mixins';

export const Button = styled(Link)`
  ${headingStyles}
  display: inline-block;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.5rem 2rem;
  text-align: center;
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

  ${({ secondary }) =>
    secondary &&
    css`
      border: 0.1rem solid var(--black);
      background-color: var(--white);
      color: var(--black);

      &:hover,
      &:focus {
        border: 0.1rem solid var(--white);
        background-color: var(--black);
        color: var(--white);
      }
    `}
`;
