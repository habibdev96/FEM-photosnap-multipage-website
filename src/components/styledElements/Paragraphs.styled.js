import styled, { css } from 'styled-components';
import { textStyles } from '../../abstracts/Mixins';

const Paragraph = styled.p`
  ${textStyles}
  font-size: 1.5rem;
  padding: 2rem 0;
  color: ${({ light }) => (light ? 'var(--lightGray)' : 'var(--black)')};

  ${({ card }) =>
    card &&
    css`
      font-size: 1.3rem;
      padding: 0;
      color: var(--white);
    `}
`;

export default Paragraph;
