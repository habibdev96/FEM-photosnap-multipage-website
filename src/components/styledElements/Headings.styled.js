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
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--black)')};
`;

export const SubHeading = styled.h4`
  ${headingStyles}
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--black)')};
`;
