import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';

export const MainHeading = styled.h1`
  ${headingStyles}
  font-size: 4rem;
  text-transform: uppercase;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--black)')};
`;

export const CardHeading = styled.h3`
  ${headingStyles}
  font-size: 1.8rem;
  color: var(--white);
`;
