import styled from 'styled-components';
import { headingStyles } from '../../abstracts/Mixins';
import Responsive from '../../abstracts/Responsive';

export const MainHeading = styled.h1`
  ${headingStyles}
  font-size: 4rem;
  text-transform: uppercase;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--black)')};

  ${Responsive.md`
    font-size: 3.2rem;
  `}
`;

export const CardHeading = styled.h3`
  ${headingStyles}
  font-size: 2.4rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--black)')};

  ${Responsive.xl`
    font-size: 1.8rem;
  `}
`;

export const SubHeading = styled.h4`
  ${headingStyles}
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: ${({ light }) => (light ? 'var(--white)' : 'var(--black)')};
`;
